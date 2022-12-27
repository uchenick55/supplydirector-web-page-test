import React, {} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {MAIN_URL} from "../constants";
import ProfilePage from "../pages/OutputRequestsContainer/OutputRequestsContainer";


const ProfileRouter = () => {

    return <Switch>
        <Route exact path={MAIN_URL.PROFILE} component={ProfilePage}/>
        <Redirect to={MAIN_URL.PROFILE}/>
    </Switch>
};


export default ProfileRouter;
