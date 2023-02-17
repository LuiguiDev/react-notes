import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0})

  // Everytime the component is rendered the function is called, also we can add porps [] to watch, when they change, the function will run
  useEffect(() => {
    function handleMove (event) {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    // This code will run when the component is removed OR when the depencies change
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return(
    <>
      <h3>Mouse follower</h3>
      <div className="pointer" style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactive' : 'Active'} mouse follower</button>
    </>
  )
}
// The event getEventListeners(window) return the number of times that an event has been called
export default App
