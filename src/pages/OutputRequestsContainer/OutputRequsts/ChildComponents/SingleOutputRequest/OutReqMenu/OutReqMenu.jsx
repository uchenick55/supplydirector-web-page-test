import Dropdown from "rc-dropdown"; // импорт выпадающего меню
import Menu, {Item as MenuItem} from "rc-menu"; // импорт разделителя и элементов меню
import "rc-dropdown/assets/index.css"; // импорт стилей, возможно удалю
import React from "react";
import dots from "../../../../../../assets/media/icons/dropdown-menu/dots.jpg"
import remove from "../../../../../../assets/media/icons/dropdown-menu/remove.jpg"
import archive from "../../../../../../assets/media/icons/dropdown-menu/archive.jpg"
import repeat from "../../../../../../assets/media/icons/dropdown-menu/repeat.jpg"
import detailed from "../../../../../../assets/media/icons/dropdown-menu/detailed.jpg"
import styles from "./OutReqMenu.module.css"
import {Redirect} from 'react-router-dom';

const OutReqMenu = ({removeOutputRequest, markAsArchived, repeatRequest, idRequest, name}) => {
    let detailedRequest = (idRequest) => {
        alert("переход на страницу Подробнее для запроса " + idRequest)
        return <Redirect to="/somewhere/else"/>
        // перенаправление на другую страницу (работал с Navlink вместо Redirect - другая версия react-router-dom),
    }

    let CommonMenuItem = ({text, action, picSrc, idMenu}) => {
        return <div key={idMenu.toString() + idRequest.toString()}> {/*ключ в запрос передаю, но почему то в самом образце примера сразу ошибка с key undefined в консоли поялвялась, не смог убрать*/}
            <MenuItem
                className={styles.outputRequestMenuItem}
                onClick={() => {// по клику
                    action(idRequest); // вызов функции обработчика из контейнерной компоненты
                }}>
            <span className={styles.iconMenu}>
                <img src={picSrc} alt=""/> {/*картинка в меню*/}
            </span>
                <span className={styles.textInMenu}>{text}</span> {/*Текст пункта меню*/}
            </MenuItem>
        </div>
    }

    let localMenuDataArray = [ // локальный массив объектов, с данными меню для map
        {idMenu: 1, action: removeOutputRequest, text: "Удалить", picSrc: remove},
        {idMenu: 2, action: markAsArchived, text: "В архив", picSrc: archive},
        {idMenu: 3, action: repeatRequest, text: "Повторить", picSrc: repeat},
        {idMenu: 4, action: detailedRequest, text: "Подробнее", picSrc: detailed},
    ]
    const menu = (
        <Menu>
            {localMenuDataArray.map((l) => { // перебираем пункты меню из таблицы localMenuDataArray
                return <CommonMenuItem // отрисовка общей части каждого пункта меню с изменяющимися данными
                    key={l.idMenu} //ключ отрисовки
                    action={l.action} // экшн Output Request
                    text={l.text} //текст отрисовки
                    picSrc={l.picSrc} // картинка рядом с текстом
                    idMenu={l.idMenu} // id меню
                />
            })}
        </Menu>
    );

    return (
        <div>
            <div>
                <Dropdown // основная частьвыпадающего меню
                    overlay={menu} // имя меню, которое мы вызываем
                    animation="slide-up" // анимация или появление сразу
                    trigger={["click"]} // меню отображается по клику или по наведению (по умолчанию)
                >
                    <img // та картинка (многоточие) которое представляет меню
                        className={styles.iconMenu} // стиль
                        src={dots}
                        alt="меню"
                    />
                </Dropdown>
            </div>
        </div>
    );
};
export default OutReqMenu;