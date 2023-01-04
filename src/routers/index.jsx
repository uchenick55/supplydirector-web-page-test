import React, {} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {MAIN_URL} from "../constants";
import ProfileRouter from "./ProfileRouter";
import styles from "./routers.module.css";
import dots from "../assets/media/icons/dropdown-menu/dots.jpg"


const MainRouter = () => {
    return <div className={styles.app_wrapper}>
        <div className={styles.app_wrapper_menu_left}>
            <h2>Левое меню</h2>
            <p>Поиск в запросах по полю "Название товара" независомо от регистра</p>
            <p>Фильтрация запросов по кнопкам под полем поиска</p>
            <p>Двунаправленная сортировка по заголовкам запросов</p>
            <p>Всплывающее меню справа от запроса позволяет: <br/> <img src={dots} alt="" className={styles.dotsStyle}/></p>
            <ul>
                <li>"Удалить" запрос</li>
                <li>Пометить "В архив"/снять отметку</li>
                <li>Заглушка-алерт "Повторить" запрос</li>
                <li>Заглушка-алерт переход "Подробнее"</li>
            </ul>

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
