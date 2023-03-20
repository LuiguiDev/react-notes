import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import { Router } from './Router/Router';
import { Page404 } from './Pages/Page404';
import { Route } from './Router/Route';

const routes = [
  {
    path: '/search/:query',
    Component: ({routeParams}) => <h2>Has buscado: {routeParams.query}</h2>
  }
]

export default function App () {
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}