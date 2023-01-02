import React, {} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {MAIN_URL} from "../constants";
import ProfileRouter from "./ProfileRouter";
import styles from "./routers.module.css";


const MainRouter = () => {
    return <div className={styles.app_wrapper}>
        <div className={styles.app_wrapper_menu_left}>
            <h2>Левое меню</h2>
            <p>Запросы можно удалять через всплывающее меню (восстановление после F5)</p>
            <p>Работает фильтрация запросов по всем кнопкам под полем поиска</p>
            <p>Переключение заголовков сортировки над списком запросов</p>
            <p>На остальных элементах просто алерты вместо действий</p>

        </div>
        <div className={styles.app_wrapper_header}><h2>Header</h2></div>
        <div className={styles.app_wrapper_content}>
            <Switch>
                <Route path={MAIN_URL.PROFILE} component={ProfileRouter}/>
                <Redirect to={MAIN_URL.PROFILE}/>
            </Switch>
        </div>

    </div>


};


export default MainRouter;
