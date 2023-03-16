import { useEffect, useState } from "react";
import { EVENTS } from '../constants/Events';
import AboutPage from '../Pages/AboutPage'
import HomePage from '../Pages/HomePage'

export default function App () {
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

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}