import React from "react";
import OutReqSearchField from "./ChildComponents/OutReqSearchField/OutReqSearchField";
import OutReqFilterButtons from "./ChildComponents/OutReqFilterButtons/OutReqFilterButtons";
import RenderAllOutReq from "./ChildComponents/RenderAllOutReq";
import styles from "./OutReq.module.css"

let OutputRequests = ({
                          removeOutputRequest, markAsArchived, repeatRequest, outputRequestsArray,
                          outReqArrayHeaders, setOutReqFormData, activeOutReqHeader, setActiveHeadarer,
                          outReqArrayFiltBtn, outReqActiveFiltBtn, setActiveFiltBtn
                      }) => {
    // список всех подкомпонент для исходящих запросов
    return <div className={styles.outputRequestsGrid}>
        <div><h2>Исходящие запросы</h2></div>
        {/*заголовок*/}
        <div><OutReqSearchField setOutReqFormData={setOutReqFormData}/></div>
        {/*отрисовка поисковой строки*/}
        <div><OutReqFilterButtons
            outReqArrayFiltBtn={outReqArrayFiltBtn}// массив кнопок фильтрации исходящих запросов
            outReqActiveFiltBtn={outReqActiveFiltBtn}// активная кнопка фильтрации исходящих запросов
            setActiveFiltBtn={setActiveFiltBtn}// задание активной кнопки фильтрации
        /></div>
        {/*отрисовка кнопок фильтрации*/}
        <div>{/*отрисовка исходящих запросов с заголовками*/}
            <RenderAllOutReq
                removeOutputRequest={removeOutputRequest}
                markAsArchived={markAsArchived}
                repeatRequest={repeatRequest}
                outputRequestsArray={outputRequestsArray}
                outReqArrayHeaders={outReqArrayHeaders}
                setActiveHeadarer={setActiveHeadarer}
                activeOutReqHeader={activeOutReqHeader}
                outReqActiveFiltBtn={outReqActiveFiltBtn}
            /></div>
    </div>
}

export default OutputRequests