import Dropdown from "rc-dropdown"; // импорт выпадающего меню
import Menu, { Item as MenuItem, Divider } from "rc-menu"; // импорт разделителя и элементов меню
import "rc-dropdown/assets/index.css"; // импорт стилей, возможно удалю
import React from "react";

function onVisibleChange(visible) {
    // маркер что меню отобразилось, пока заглушка
    console.log("visible", visible);
}

const menu = (
    <Menu>
        <MenuItem
            key="removeOutputRequest" // было в исходном коде, пока оставил
            onClick={() => {
                // здесь вызвать локальную функцию контейнерной компоненты
                alert("delete callback");
            }}
            //     className="гриды разделения картинки и названия"
        >
            <div>
                <img
                    style={{ width: 15 }}
                    src="https://cdn-icons-png.flaticon.com/512/401/401036.png"
                    alt=""
                />
            </div>
            <div>Удалить</div>
        </MenuItem>
        <Divider />

        <MenuItem
            key="removeOutputRequest" // было в исходном коде, пока оставил
            onClick={() => {
                // здесь вызвать локальную функцию контейнерной компоненты
                alert("delete callback");
            }}
            //     className="гриды разделения картинки и названия"
        >
            <div>
                <img
                    style={{ width: 15 }}
                    src="https://cdn-icons-png.flaticon.com/512/401/401036.png"
                    alt=""
                />
            </div>
            <div>В архив</div>
        </MenuItem>
    </Menu>
);

const OutputRequestMenu = () => {
    return (
        <div>
            <div style={{ margin: 20 }}>  {/*стиль, заменить на module.css*/}
                <div style={{ height: 100 }} />  {/*стиль, заменить на module.css*/}
                <div>
                    <Dropdown // основная частьвыпадающего меню
                        overlay={menu} // имя меню, которое мы вызываем
                        animation="slide-up" // анимация или появление сразу
                        // trigger={["click"]} меню отображается по клику или по умолчанию - по наведению, пока не нужно
                        // onVisibleChange={onVisibleChange} срабатывает при появлении/скрывании меню - пока не нужно
                    >
                        <img // та картинка (многоточие) которое представляет меню
                            style={{ width: 100 }} // стиль, заменить на module.css
                            src="https://w7.pngwing.com/pngs/6/527/png-transparent-dots-computer-icons-ellipsis-to-be-continued-text-rectangle-monochrome-thumbnail.png"
                            alt=""
                        />
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};
export default OutputRequestMenu;