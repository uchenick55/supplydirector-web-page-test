import React from "react";
import SingleOutReq from "./SingleOutputRequest/SingleOutReq";
import styles from "./../ChildComponents/SingleOutputRequest/SingleOutReq.module.css"


let RenderAllOutReq = ({removeOutputRequest, markAsArchived, repeatRequest, outputRequestsArray, outReqArrayHeaders}) => {
    // компонента заголовков таблицы исходящих запросов, возможно уберу как отдельную компонету
    let outputRequestsElements = outputRequestsArray.map((d) => // подкомпонента отрисовки всех диалогов через map
        {
            return <SingleOutReq
                key={d.idRequest} idRequest={d.idRequest} date={d.date} name={d.name}
                qty={d.qty} cost={d.cost} answers={d.answers} archived={d.archived}
                removeOutputRequest={removeOutputRequest}
                markAsArchived={markAsArchived}
                repeatRequest={repeatRequest}
            />
        }
    );
    let renderOutReqArrayHeaders =
        <div className={styles.headersOutputRequests}>
            <div>{outReqArrayHeaders.date}</div>
            <div>{outReqArrayHeaders.name}</div>
            <div>{outReqArrayHeaders.qty}</div>
            <div>{outReqArrayHeaders.cost}</div>
            <div>{outReqArrayHeaders.answers}</div>
        </div>

    return (<div>
        <div>{renderOutReqArrayHeaders}</div> {/*отрисовка заголовков*/}
        <div>
            {outputRequestsElements} {/* Отрисовка исходящих запросов*/}
        </div>
    </div>)
}

export default RenderAllOutReq