import React from "react";
import SingleOutputRequest from "./SingleOutputRequest/SingleOutputRequest";

let RenderAllOutputRequests = ({removeOutputRequest}) => {
    // компонента заголовков таблицы исходящих запросов, возможно уберу как отдельную компонету
    return <div>
        <div>"RenderAllOutputRequests"</div>
        <div>"HeadersOutputRequests"</div>
        <div>"map SingleOutputRequest"
            <SingleOutputRequest
                removeOutputRequest={removeOutputRequest}
            /></div>
    </div>
}

export default RenderAllOutputRequests