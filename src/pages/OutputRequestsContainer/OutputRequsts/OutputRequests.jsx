import React from "react";
import OutReqSearchField from "./ChildComponents/OutReqSearchField/OutReqSearchField";
import OutReqFilterButtons from "./ChildComponents/OutReqFilterButtons/OutReqFilterButtons";
import RenderAllOutReq from "./ChildComponents/RenderAllOutReq";
import styles from "./OutReq.module.css"


let OutputRequests = ({removeOutputRequest, markAsArchived, repeatRequest, outputRequestsArray, outReqArrayHeaders}) => { // список всех подкомпонент для исходящих запросов
    return <div className={styles.outputRequestsGrid}>
        <div><h2>Исходящие запросы</h2></div>
        <div><OutReqSearchField/></div>
        <div><OutReqFilterButtons/></div>
        <div><RenderAllOutReq
            removeOutputRequest={removeOutputRequest}
            markAsArchived={markAsArchived}
            repeatRequest={repeatRequest}
            outputRequestsArray={outputRequestsArray}
            outReqArrayHeaders={outReqArrayHeaders}
        /></div>
    </div>
}

export default OutputRequests