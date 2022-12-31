import React from "react";
import OutReqMenu from "./OutReqMenu/OutReqMenu2";
import styles from "./SingleOutReq.module.css"
import responces from "./../../../../../assets/media/images/responces.jpg"

let SingleOutReq = ({
                               idRequest, answers,
                               removeOutputRequest, markAsArchived, repeatRequest, dataList
                           }) => {
    let goToResponces = () => {
         alert("редирект на ответы ID " + idRequest ) // имитация перехода на ответы по запросу
    }


    let RenderDataList = ({value}) => {
        return  <div className={styles.fontFormating}>{value}</div>;  {/*вывод однотипных запросов*/}
    }

    return <div className={styles.singleOutputRequest}>
        {Object.values(dataList).map(value => {
            return <RenderDataList value={value}/>
        })}
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