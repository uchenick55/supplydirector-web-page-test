import React from "react";
import OutReqSearchField from "./ChildComponents/OutReqSearchField/OutReqSearchField";
import OutReqFilterButtons from "./ChildComponents/OutReqFilterButtons/OutReqFilterButtons";
import RenderAllOutReq from "./ChildComponents/RenderAllOutReq";
import styles from "../OutReqContainer.module.scss"


let OutputRequests = ({removeOutputRequest, markAsArchived, repeatRequest, outputRequestsArray}) => { // список всех подкомпонент для исходящих запросов
    return <div>
        <h2 className={styles.headerStyle}>Исходящие запросы</h2>
        <div><OutReqSearchField/></div>
        <div><OutReqFilterButtons/></div>
        <div><RenderAllOutReq
            removeOutputRequest={removeOutputRequest}
            markAsArchived={markAsArchived}
            repeatRequest={repeatRequest}
            outputRequestsArray={outputRequestsArray}
        /></div>
    </div>
}

export default OutputRequests