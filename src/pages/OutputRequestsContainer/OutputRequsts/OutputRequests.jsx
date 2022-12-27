import React from "react";
import OutputRequestsSearchField from "./ChildComponents/OutputRequestsSearchField";
import OutputRequestsFilterButtons from "./ChildComponents/OutputRequestsFilterButtons";
import RenderAllOutputRequests from "./ChildComponents/RenderAllOutputRequests";

let OutputRequests = () => { // список всех подкомпонент для исходящих запросов
    return <div>
        <div>"OutputRequests"</div>
        <div><OutputRequestsSearchField/></div>
        <div><OutputRequestsFilterButtons/></div>
        <div><RenderAllOutputRequests/></div>
    </div>
}

export default OutputRequests