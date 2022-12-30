import React from "react";
import OutReqMenu from "./OutReqMenu/OutReqMenu2";
import styles from "./SingleOutReq.module.css"
import responces from "./../../../../../assets/media/images/responces.jpg"

let SingleOutReq = ({
                               idRequest, date, name, qty, cost, answers, archived,
                               removeOutputRequest, markAsArchived, repeatRequest,
                           }) => {
    let goToResponces = () => {
         alert("редирект на ответы ID " + idRequest ) // имитация перехода на ответы по запросу
    }

    return <div className={styles.singleOutputRequest}>
        <div className={styles.fontFormating}>{date}</div>  {/*Дата запроса*/}
        <div className={styles.fontFormating}>{name}</div>{/*Имя запроса*/}
        <div className={styles.fontFormating}>{qty}</div>{/*Кол-во в запросе*/}
        <div className={styles.fontFormating}>{cost}</div> {/*Стоимость в запросе*/}
        <div>{answers? <div> <img className={styles.responcesImgStyle} src={responces} onClick={goToResponces} alt=""/></div>: <div className={styles.fontFormating}>Нет ответов</div> }</div>
        <div className={styles.outReqMenu}><OutReqMenu
            removeOutputRequest={removeOutputRequest} // колбек удаления outputRequest из стейта
            markAsArchived={markAsArchived} // колбек архивирования
            repeatRequest={repeatRequest} //колбек повторить запрос
            idRequest={idRequest} // id запроса
        /></div>

    </div>
}

export default SingleOutReq