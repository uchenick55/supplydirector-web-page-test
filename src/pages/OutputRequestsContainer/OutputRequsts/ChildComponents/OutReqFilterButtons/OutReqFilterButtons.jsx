import React from "react";
import styles from "./OutReqFilterButtons.module.css"
import sort from "../../../../../assets/media/icons/sort1.jpg";

let OutReqFilterButtons = ({outReqArrayFiltBtn, outReqActiveFiltBtn}) => {
    //компонента кнопок фильтров по исходящим запросам
    let MapOutReqArrayFiltBtn = ({value}) => {
        return <span>
                <span className={outReqActiveFiltBtn === value // если итерационный заголовок равен активному из BLL
                    ?styles.activeFilterButtons // стилизация активной кнопки фильтрации
                    :styles.passiveFilterButtons} // стилизация остальных кнопок
                >{value}</span>

            </span>
    }
    return <div className={styles.outputRequestsFilterButtons}>
        {outReqArrayFiltBtn.map((value) => { // вывод заголовков исходящих запросов
            return <MapOutReqArrayFiltBtn key={value.toString()} value={value}/>
        })}
    </div>
}

export default OutReqFilterButtons