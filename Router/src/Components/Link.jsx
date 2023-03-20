import { EVENTS } from "../Constants/Events";

export function browse (path) {
  // Window.history change the url without refreshing the page
  window.history.pushState({}, '', path);
  const browseEvent = new Event(EVENTS.pushState);
  window.dispatchEvent(browseEvent); // This triggers the event, providing access to the listeners
}

export function Link ({ to, target, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === 0;
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
    const isDefaultTarget = target === undefined || target === '_self';
    
    if(isMainEvent && !isModifiedEvent && isDefaultTarget) {
      // If those conditions are met, we use SPA browsing, if not we use default browsing
      e.preventDefault()
      browse(to)
    }
  };

  return <a href={to} onClick={handleClick} target={target} {...props} />
}
