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
        {/*вывод однотипных запросов*/}
        return  <div className={styles.fontFormating}>{value}</div>;
    }

    return <div className={styles.singleOutputRequest}>
        {Object.values(dataList).map((value, index) => { // отрисовка однотипных элементов из тела запросов
            return <RenderDataList key={value.toString()} value={value}/>
        })}

        <div>{answers // если ответы есть (true)
            ? <div> <img className={styles.responcesImgStyle} src={responces} onClick={goToResponces} alt=""/></div>
                // отрисовка картинки ответов с onClick реакцией
            : <div className={styles.fontFormating}>Нет ответов</div> }</div>
                {/*Если ответов нет, то текст*/}
        <div className={styles.outReqMenu}><OutReqMenu
            removeOutputRequest={removeOutputRequest} // колбек удаления outputRequest из стейта
            markAsArchived={markAsArchived} // колбек архивирования
            repeatRequest={repeatRequest} //колбек повторить запрос
            idRequest={idRequest} // id запроса
        />
        </div>

    </div>
}

export default SingleOutReq