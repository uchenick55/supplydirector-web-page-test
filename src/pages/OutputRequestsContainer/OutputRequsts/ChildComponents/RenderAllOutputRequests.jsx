import React from "react";
import SingleOutputRequest from "./SingleOutputRequest/SingleOutputRequest";

let RenderAllOutputRequests = ({removeOutputRequest, markAsArchived, repeatRequest, outputRequestsArray}) => {
    // компонента заголовков таблицы исходящих запросов, возможно уберу как отдельную компонету
    let outputRequestsElements = outputRequestsArray.map((d) => // подкомпонента отрисовки всех диалогов через map
        {
            return <SingleOutputRequest
                key={d.idRequest} idRequest={d.idRequest} date={d.date} name={d.name}
                qty={d.qty} cost={d.cost}  answers={d.answers}  archived={d.archived}
                removeOutputRequest={removeOutputRequest}
                markAsArchived={markAsArchived}
                repeatRequest={repeatRequest}
            />
        }
    );
    return (<div>
        <div>"HeadersOutputRequests"</div>
        <div>
            {outputRequestsElements}
        </div>
    </div>)
}

export default RenderAllOutputRequests