import React, {} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {MAIN_URL} from "../constants";
import ProfileRouter from "./ProfileRouter";
import styles from "./routers.module.css";


const MainRouter = () => {
    return <div className={styles.app_wrapper}>
        <div className={styles.app_wrapper_menu_left}>Часть меню</div>
        <div className={styles.app_wrapper_header}>Часть header</div>
        <div className={styles.app_wrapper_content}>
            Часть контента
{/*            <Switch>
                <Route path={MAIN_URL.PROFILE} component={ProfileRouter}/>
                <Redirect to={MAIN_URL.PROFILE}/>
            </Switch>*/}
        </div>

    </div>


};


export default MainRouter;
