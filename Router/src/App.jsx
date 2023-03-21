import { Router } from './Router/Router';
import { Page404 } from './Pages/Page404';
import { Route } from './Router/Route';
import { lazy, Suspense } from 'react';

// This is an empty component until it is called and imports the real component
const LazyAboutPage = lazy(() => import('./Pages/AboutPage'))
const LazyHomePage = lazy(() => import('./Pages/HomePage'))

const routes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: ({routeParams}) => <h2>Has buscado: {routeParams.query}</h2>
  }
]

export default function App () {
  return (
    <main>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}