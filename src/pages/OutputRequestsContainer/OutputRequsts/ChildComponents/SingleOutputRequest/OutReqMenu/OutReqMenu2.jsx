import Dropdown from "rc-dropdown"; // импорт выпадающего меню
import "rc-dropdown/assets/index.css"; // импорт стилей, возможно удалю
import React from "react";
import dots from "../../../../../../assets/media/icons/dropdown-menu/dots.jpg"
import remove from "../../../../../../assets/media/icons/dropdown-menu/remove.jpg"
import archive from "../../../../../../assets/media/icons/dropdown-menu/archive.jpg"
import repeat from "../../../../../../assets/media/icons/dropdown-menu/repeat.jpg"
import detailed from "../../../../../../assets/media/icons/dropdown-menu/detailed.jpg"
import styles from "./OutReqMenu.module.css"
import {Redirect} from "react-router-dom";

const OutReqMenu = ({removeOutputRequest, markAsArchived, repeatRequest, idRequest, name}) => {

    let detailedRequest = (idRequest) => {
        alert("переход на страницу Подробнее для запроса " + idRequest)
        return <Redirect to="/somewhere/else"/>
        // перенаправление на другую страницу (работал с Navlink вместо Redirect - другая версия react-router-dom),
    }

    let LocalMenuDataArray = [ // локальный массив объектов, с данными меню для map
        {idMenu: 1, action: removeOutputRequest, text: "Удалить", picSrc: remove},
        {idMenu: 2, action: markAsArchived, text: "В архив", picSrc: archive},
        {idMenu: 3, action: repeatRequest, text: "Повторить", picSrc: repeat},
        {idMenu: 4, action: detailedRequest, text: "Подробнее", picSrc: detailed},
    ]

    let SingleMenuItem = ({action, text, picSrc}) => {
        return <div>
            <div
                className={styles.outputRequestMenuItem}
                onClick={() => {// по клику
                    action(idRequest); // вызов функции обработчика из контейнерной компоненты
                }}
            >
                <div className={styles.iconMenu}><img src={picSrc} alt=""/></div>
                <div className={styles.textInMenu}>{text}</div>
            </div>
        </div>
    }

    const menu = () => {
        return <div className={styles.commonClassForMenu}>
            {LocalMenuDataArray.map((d) => // подкомпонента отрисовки всех пунктов меню через map
                {
                    return <SingleMenuItem // отрисовка отдельного пункта меню с пропсами
                        key={d.idMenu} action={d.action}
                        text={d.text} picSrc={d.picSrc}
                    />
                }
            )}
        </div>
    }

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