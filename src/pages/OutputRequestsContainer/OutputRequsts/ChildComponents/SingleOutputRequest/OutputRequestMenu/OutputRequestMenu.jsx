import Dropdown from "rc-dropdown"; // импорт выпадающего меню
import Menu, {Item as MenuItem, Divider} from "rc-menu"; // импорт разделителя и элементов меню
import "rc-dropdown/assets/index.css"; // импорт стилей, возможно удалю
import React from "react";
import dots from "../../../../../../assets/media/icons/dropdown-menu/dots.jpg"
import remove from "../../../../../../assets/media/icons/dropdown-menu/remove.jpg"
import archive from "../../../../../../assets/media/icons/dropdown-menu/archive.jpg"
import repeat from "../../../../../../assets/media/icons/dropdown-menu/repeat.jpg"
import detailed from "../../../../../../assets/media/icons/dropdown-menu/detailed.jpg"
import styles from "./OutputRequestMenu.module.css"


const OutputRequestMenu = ({removeOutputRequest}) => {
    function onVisibleChange(visible) {
        // маркер что меню отобразилось, пока заглушка
        console.log("visible", visible);
    }

    let CommonMenuItem = ({text, action, picSrc, key}) => {
        return <>
            <MenuItem
                className={styles.outputRequestMenuGrid}
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
    const menu = (
        <Menu>
            <CommonMenuItem
                action={removeOutputRequest} // экшн удаление Output Request из OutputRequestsContainer
                text={"Удалить"}
                picSrc = {remove} // куртинка удалить
                key="removeOutputRequest" // ключ, пока оставил, возможно пригодится
            />
            <Divider/>


        </Menu>
    );

    return (
        <div>
            <div style={{margin: 20}}>  {/*стиль, заменить на module.css*/}
                <div style={{height: 100}}/>
                {/*стиль, заменить на module.css*/}
                <div>
                    <Dropdown // основная частьвыпадающего меню
                        overlay={menu} // имя меню, которое мы вызываем
                        animation="slide-up" // анимация или появление сразу
                        // trigger={["click"]} меню отображается по клику или по умолчанию - по наведению, пока не нужно
                        // onVisibleChange={onVisibleChange} срабатывает при появлении/скрывании меню - пока не нужно
                    >
                        <img // та картинка (многоточие) которое представляет меню
                            style={{width: 30}} // стиль, заменить на module.css
                            src={dots}
                            alt=""
                        />
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};
export default OutputRequestMenu;