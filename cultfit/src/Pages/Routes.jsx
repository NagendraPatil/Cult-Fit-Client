import { Switch, Route, Link } from 'react-router-dom'
import { Cult } from '../components/cult/Cult'
import { LandingPage } from '../components/Landing/Landing'
import Profile from '../components/profile/Profile'
import { CentreBooking } from '../components/Workout/CentreBooking'
import Workout from '../components/Workout/Workout'

export const Allroutes = () => {
    return <Switch>

        <Route exact path="/">
            <LandingPage/>
        </Route>

        <Route exact path="/cult">
            <Cult/>
        </Route>

        <Route exact path="/profile">
            <Profile/>
        </Route>

        <Route exact path="/sessiontype/:session">
            <Workout/>
        </Route>

        <Route exact path="/centrebooking/:centre">
            <CentreBooking/>
        </Route>


        <Route>
            <h1>404, Route Does not exist</h1>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </Route>

    </Switch>
}