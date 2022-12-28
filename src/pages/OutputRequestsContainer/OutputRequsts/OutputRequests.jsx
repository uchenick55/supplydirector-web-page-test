import React from "react";
import OutputRequestsSearchField from "./ChildComponents/OutputRequestsSearchField";
import OutputRequestsFilterButtons from "./ChildComponents/OutputRequestsFilterButtons/OutputRequestsFilterButtons";
import RenderAllOutputRequests from "./ChildComponents/RenderAllOutputRequests";

let OutputRequests = ({removeOutputRequest, markAsArchived, repeatRequest, outputRequestsArray}) => { // список всех подкомпонент для исходящих запросов
    return <div>
        <div>"OutputRequests"</div>
        <div><OutputRequestsSearchField/></div>
        <div><OutputRequestsFilterButtons/></div>
        <div><RenderAllOutputRequests
            removeOutputRequest={removeOutputRequest}
            markAsArchived={markAsArchived}
            repeatRequest={repeatRequest}
            outputRequestsArray={outputRequestsArray}
        /></div>
    </div>
}

export default OutputRequests