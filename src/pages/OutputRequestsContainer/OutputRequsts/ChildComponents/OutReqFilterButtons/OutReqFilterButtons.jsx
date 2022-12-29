import React from "react";
import styles from "./OutReqFilterButtons.module.css"

let OutReqFilterButtons = () => {
    //компонента кнопок фильтров по исходящим запросам
    return <div className={styles.outputRequestsFilterButtons}>
        <div className={styles.activeFilterButtons} onClick={()=>{alert("без фильтров, все запросы")}}>Все запросы</div>
        <div className={styles.passiveFilterButtons} onClick={()=>{alert("фильтрация только без ответов")}}>Без ответов</div>
        <div className={styles.passiveFilterButtons} onClick={()=>{alert("фильтрация только с ответами")}}>С ответами</div>
        <div className={styles.passiveFilterButtons} onClick={()=>{alert("фильтрация только старые запросы")}}>Старые</div>
        <div className={styles.passiveFilterButtons} onClick={()=>{alert("фильтрация только архивные запросы")}}>Архив</div>
    </div>
}

export default OutReqFilterButtons