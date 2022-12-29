import React from "react";
import styles from "./OutReqFilterButtons.module.css"

let OutReqFilterButtons = () => {
    //компонента кнопок фильтров по исходящим запросам
    return <div className={styles.outputRequestsFilterButtons}>
        <div className={styles.activeFilterButtons}>Все запросы</div>
        <div className={styles.passiveFilterButtons}>Без ответов</div>
        <div className={styles.passiveFilterButtons}>С ответами</div>
        <div className={styles.passiveFilterButtons}>Старые</div>
        <div className={styles.passiveFilterButtons}>Архив</div>

    </div>
}

export default OutReqFilterButtons