import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { Route } from "../Router/Route.jsx";
import { Router} from '../Router/Router.jsx'
import { Link } from '../Components/Link'
import { getCurrentPath } from "../Utilities/getPath.js";

vi.mock('../Utilities/getPath.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('shoud render 404 if any routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    console.log(screen.debug()) /* <- it will render the component if there aren't a cleanup function */
    expect(screen.getByText('404')).toBeTruthy() // To automize the 404 checking instead of looking for it at the console.log
  })

  it('shoud render the component with the first toute that matches', () => {
    getCurrentPath.mockReturnValue('/about')
    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
  
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]
    render(<Router routes={routes} />)
    console.log(screen.debug())
    expect(screen.getByText('About')).toBeTruthy()
  })

  it ('Should navigate using Links', () => {
    // If we use mockReturnValue it always display the same thing, we need it to be rendered Once so we can define the path by clicking the Link
    getCurrentPath.mockReturnValueOnce('/') 

    render (
      <Router>
        <Route path='/' Component={() => {
          return (
            <>
              <h1>Home</h1>
              <Link to={'/about'}>Go to about</Link>
            </>
          )
        }}
        />
        <Route path='/about' Component={() => <h1>About:</h1>} />
      </Router>
    )
    
    // click on the Link
    const button = screen.getByText(/Go to about/)
    fireEvent.click(button)
    // check if we render the component about:
    const aboutTilte = screen.findByText('About:')

    expect(aboutTilte).toBeTruthy()
  })
})
