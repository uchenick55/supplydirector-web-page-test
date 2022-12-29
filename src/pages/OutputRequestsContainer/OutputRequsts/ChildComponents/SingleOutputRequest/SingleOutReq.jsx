import React from "react";
import OutReqMenu from "./OutReqMenu/OutReqMenu";
import styles from "./SingleOutReq.module.css"
import responces from "./../../../../../assets/media/images/responces.jpg"

let SingleOutReq = ({
                               idRequest, date, name, qty, cost, answers, archived,
                               removeOutputRequest, markAsArchived, repeatRequest,
                           }) => {
    return <div className={styles.singleOutputRequest}>
        <div className={styles.fontFormating}>{date}</div>
        <div className={styles.fontFormating}>{name}</div>
        <div className={styles.fontFormating}>{qty}</div>
        <div className={styles.fontFormating}>{cost}</div>
        <div>{answers? <div> <img className={styles.responcesImgStyle} src={responces} alt=""/></div>: <div className={styles.fontFormating}>Нет ответов</div> }</div>
        <div className={styles.fontFormating}><OutReqMenu
            removeOutputRequest={removeOutputRequest} // колбек удаления outputRequest из стейта
            markAsArchived={markAsArchived} // колбек архивирования
            repeatRequest={repeatRequest} //колбек повторить запрос
            idRequest={idRequest} // id запроса
        /></div>

    </div>
}

export default SingleOutReq