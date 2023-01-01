import React from "react";
import OutReqSearchField from "./ChildComponents/OutReqSearchField/OutReqSearchField";
import OutReqFilterButtons from "./ChildComponents/OutReqFilterButtons/OutReqFilterButtons";
import RenderAllOutReq from "./ChildComponents/RenderAllOutReq";
import styles from "./OutReq.module.css"


let OutputRequests = ({removeOutputRequest, markAsArchived, repeatRequest, outputRequestsArray,
                          outReqArrayHeaders, setOutReqFormData, activeOutReqHeader, setActiveHeadarer}) => {
    // список всех подкомпонент для исходящих запросов
    return <div className={styles.outputRequestsGrid}>
        <div><h2>Исходящие запросы</h2></div> {/*заголовок*/}
        <div><OutReqSearchField setOutReqFormData={setOutReqFormData} /></div> {/*отрисовка поисковой строки*/}
        <div><OutReqFilterButtons/></div>{/*отрисовка кнопок фильтрации*/}
        <div>{/*отрисовка исходящих запросов с заголовками*/}
            <RenderAllOutReq
            removeOutputRequest={removeOutputRequest}
            markAsArchived={markAsArchived}
            repeatRequest={repeatRequest}
            outputRequestsArray={outputRequestsArray}
            outReqArrayHeaders={outReqArrayHeaders}
            activeOutReqHeader={activeOutReqHeader}
            setActiveHeadarer={setActiveHeadarer}
        /></div>
    </div>
}

export default OutputRequests