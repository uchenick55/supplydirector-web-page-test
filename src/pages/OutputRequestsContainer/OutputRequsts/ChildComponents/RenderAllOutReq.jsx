import React from "react";
import SingleOutReq from "./SingleOutputRequest/SingleOutReq";
import styles from "./../ChildComponents/SingleOutputRequest/SingleOutReq.module.css"
import sort from "../../../../assets/media/icons/sort.jpg"


let RenderAllOutReq = ({removeOutputRequest, markAsArchived, repeatRequest,
                           outputRequestsArray, outReqArrayHeaders}) => {
    // компонента заголовков таблицы исходящих запросов, возможно уберу как отдельную компонету
    let outputRequestsElements = outputRequestsArray.map((d) => // подкомпонента отрисовки всех диалогов через map
        {
            return <SingleOutReq // отрисовка отдельного исходящего запроса с пропсами
                key={d.idRequest} idRequest={d.idRequest} date={d.date} name={d.name}
                qty={d.qty} cost={d.cost} answers={d.answers} archived={d.archived}
                removeOutputRequest={removeOutputRequest}
                markAsArchived={markAsArchived}
                repeatRequest={repeatRequest}
            />
        }
    );
    let RenderOutReqArrayHeaders = () => { // отрисовка заголовков списка исходящих запросов
        return  <div
            className={styles.headersOutputRequests}>
            <div
                className={styles.outRecActiveHeader}
                onClick={()=>{alert("сортировка по Дате")}}
            >
                {outReqArrayHeaders.date} {/*заголовок Дата*/}
                <img src={sort} alt="sort by Name"/> {/*картинка сортировки*/}
            </div>
            <div>{outReqArrayHeaders.name}</div> {/*заголовок имя*/}
            <div>{outReqArrayHeaders.qty}</div> {/*заголовок кол-во*/}
            <div>{outReqArrayHeaders.cost}</div> {/*заголовок цена*/}
            <div>{outReqArrayHeaders.answers}</div> {/*заголовок ответы*/}
        </div>
    }


    return (<div>
        <div><RenderOutReqArrayHeaders/></div> {/*отрисовка заголовков*/}
        <div>
            {outputRequestsElements} {/* Отрисовка исходящих запросов*/}
        </div>
    </div>)
}

export default RenderAllOutReq