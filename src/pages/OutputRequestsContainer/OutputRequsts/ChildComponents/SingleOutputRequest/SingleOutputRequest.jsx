import React from "react";
import OutputRequestMenu from "./OutputRequestMenu/OutputRequestMenu";
import styles from "./SingleOutputRequest.module.css"
import responces from "./../../../../../assets/media/images/responces.jpg"

let SingleOutputRequest = ({
                               idRequest, date, name, qty, cost, answers, archived,
                               removeOutputRequest, markAsArchived, repeatRequest,
                           }) => {
    return <div className={styles.singleOutputRequest}>
        <div>{date}</div>
        <div>{name}</div>
        <div>{qty}</div>
        <div>{cost}</div>
        <div>{answers? <img className={styles.responcesImgStyle} src={responces} alt=""/>: "Нет ответов"}</div>
        <div><OutputRequestMenu
            removeOutputRequest={removeOutputRequest} // колбек удаления outputRequest из стейта
            markAsArchived={markAsArchived}
            repeatRequest={repeatRequest}
            idRequest={idRequest}
            name={name}
        /></div>

    </div>
}

export default SingleOutputRequest