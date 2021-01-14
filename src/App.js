import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import PartialHeader from './components/partials/Header'

import ViewHome from './views/Home'
import ViewFavorites from './views/Favorites'
import ViewBreed from './views/Breed'
import ViewNoMatch from './views/NoMatch'

export default function App () {
  return (
    <Router>
      <div className="__app__">
        <PartialHeader />
        <Switch>
          <Route exact path="/">
            <ViewHome />
          </Route>
          <Route path="/b/:bread">
            <ViewBreed />
          </Route>
          <Redirect from="/b" to="/" />
          <Route
            path="/favorites"
          >
            <ViewFavorites />
          </Route>
          <Route path="*">
            <ViewNoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
