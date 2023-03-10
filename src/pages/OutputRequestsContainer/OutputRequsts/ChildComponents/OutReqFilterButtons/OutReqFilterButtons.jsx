import React from "react";
import styles from "./OutReqFilterButtons.module.css"

let OutReqFilterButtons = ({outReqArrayFiltBtn, outReqActiveFiltBtn, setActiveFiltBtn}) => {
    //компонента кнопок фильтров по исходящим запросам
    let MapOutReqArrayFiltBtn = ({value}) => {
        return <span onClick={()=>{setActiveFiltBtn(value)}}>
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