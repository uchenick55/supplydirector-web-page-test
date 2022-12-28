import Dropdown from "rc-dropdown"; // импорт выпадающего меню
import Menu, {Item as MenuItem} from "rc-menu"; // импорт разделителя и элементов меню
import "rc-dropdown/assets/index.css"; // импорт стилей, возможно удалю
import React from "react";
import dots from "../../../../../../assets/media/icons/dropdown-menu/dots.jpg"
import remove from "../../../../../../assets/media/icons/dropdown-menu/remove.jpg"
import archive from "../../../../../../assets/media/icons/dropdown-menu/archive.jpg"
import repeat from "../../../../../../assets/media/icons/dropdown-menu/repeat.jpg"
import detailed from "../../../../../../assets/media/icons/dropdown-menu/detailed.jpg"
import styles from "./OutputRequestMenu.module.css"
import {Redirect} from 'react-router-dom';


const OutputRequestMenu = ({removeOutputRequest, markAsArchived, repeatRequest}) => {

    let CommonMenuItem = ({text, action, picSrc, key}) => {
        return <>
            <MenuItem
                className={styles.outputRequestMenuItem}
                key={key} // было в исходном коде, пока оставил
                onClick={() => {
                    action(); // вызов функции обработчика из контейнерной компоненты
                }}>
            <span className={styles.iconMenu}>
                <img src={picSrc} alt=""/>
            </span>
                <span className={styles.textInMenu}>{text}</span> {/*Текст пункта меню*/}
            </MenuItem>
        </>
    }

    let detailedRequest = () => {
        alert("переход на страницу Подробнее из локальной функции ")
        return <Redirect to="/somewhere/else"/>
        // перенаправление на другую страницу (работал с Navlink вместо Redirect - другая версия react-router-dom),
    }
    const menu = (
        <Menu>
            <CommonMenuItem
                action={removeOutputRequest} // экшн удаление Output Request
                text={"Удалить"}
                picSrc={remove} // куртинка удалить
                key="removeOutputRequest" // ключ, пока оставил, возможно пригодится
            />
            <CommonMenuItem
                action={markAsArchived} // экшн пометки как архивный
                text={"В архив"}
                picSrc={archive} // куртинка удалить
                key="markAsArchived" // ключ, пока оставил, возможно пригодится
            />
            <CommonMenuItem
                action={repeatRequest} // экшн повторить исходящий запрос
                text={"Повторить"}
                picSrc={repeat} // куртинка удалить
                key="repeatRequest" // ключ, пока оставил, возможно пригодится
            />
            <CommonMenuItem
                action={detailedRequest} // экшн повторить исходящий запрос
                text={"Подробнее"}
                picSrc={detailed} // куртинка удалить
                key="detailedRequest" // ключ, пока оставил, возможно пригодится
            />
        </Menu>
    );

    return (
        <div>
            <div>
                <Dropdown // основная частьвыпадающего меню
                    overlay={menu} // имя меню, которое мы вызываем
                    animation="slide-up" // анимация или появление сразу
                    // trigger={["click"]} меню отображается по клику или по умолчанию - по наведению, пока не нужно
                    // onVisibleChange={onVisibleChange} срабатывает при появлении/скрывании меню - пока не нужно
                >
                    <img // та картинка (многоточие) которое представляет меню
                        className={styles.iconMenu} // стиль, заменить на module.css
                        src={dots}
                        alt=""
                    />
                </Dropdown>
            </div>
        </div>
    );
};
export default OutputRequestMenu;