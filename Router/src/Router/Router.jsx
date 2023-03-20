import { EVENTS } from "../constants/Events";
import { useState, useEffect, Children } from "react";
import { match } from 'path-to-regexp';
import { Route } from "./Route";

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    function onLocationChange () {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.pushState, onLocationChange);
    // When we go back in the hostory the event pushState is not trigered so we don't have a locationChange, to avoid it we use the event 'popstate'
    window.addEventListener(EVENTS.popState, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.pushState, onLocationChange);
      window.removeEventListener(EVENTS.popState, onLocationChange)
    } 
  }, []);

  let routeParams = {}

  // This is not a normal map, this is a method from react Children that allows us loop the parent's childrens
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === 'Route';

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // decodeURI convers spaces into caracters
    const matchUrl = match(path, { decode: decodeURIComponent })
    const matched = matchUrl(currentPath);

    if (!matched) return false
    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />
}  