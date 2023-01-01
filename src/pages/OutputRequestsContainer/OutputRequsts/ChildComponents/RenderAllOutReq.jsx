import React from "react";
import SingleOutReq from "./SingleOutputRequest/SingleOutReq";
import styles from "./../ChildComponents/SingleOutputRequest/SingleOutReq.module.css"
import sort from "../../../../assets/media/icons/sort1.jpg"


let RenderAllOutReq = ({
                           removeOutputRequest, markAsArchived, repeatRequest,
                           outputRequestsArray, outReqArrayHeaders, activeOutReqHeader
                       }) => {
    // компонента заголовков таблицы исходящих запросов, возможно уберу как отдельную компонету
    let outputRequestsElements = outputRequestsArray.map((d) => // подкомпонента отрисовки всех диалогов через map
        {
            return <SingleOutReq // отрисовка отдельного исходящего запроса с пропсами
                key={d.idRequest} idRequest={d.idRequest} dataList={d.dataList} answers={d.answers} archived={d.archived}
                removeOutputRequest={removeOutputRequest}
                markAsArchived={markAsArchived}
                repeatRequest={repeatRequest}
            />
        }
    );
    let RenderOutReqArrayHeaders = () => { // отрисовка заголовков списка исходящих запросов

        let RenderOutReqArrayHeaders = ({value}) => {
            return <span onClick={() => {
                alert("сортировка по " + value)
            }}>
                <span className={activeOutReqHeader === value?styles.outRecActiveHeader:styles.outRecInactiveHeader}>{value}</span>
                <span>{activeOutReqHeader === value ? <img className={styles.sortImgStyle} src={sort} alt=""/> : null}</span>
            </span>
        }

        return <div
            className={styles.outputRequestsHeadersCommon}
        >
            {Object.values(outReqArrayHeaders).map((value, index) => { // вывод заголовков исходящих запросов
                return <RenderOutReqArrayHeaders key={value.toString()} value={value}/>
            })}
        </div>
    }


    return (<div>
        <div><RenderOutReqArrayHeaders/></div>
        {/*отрисовка заголовков*/}
        <div>
            {outputRequestsElements} {/* Отрисовка исходящих запросов*/}
        </div>
    </div>)
}

export default RenderAllOutReq