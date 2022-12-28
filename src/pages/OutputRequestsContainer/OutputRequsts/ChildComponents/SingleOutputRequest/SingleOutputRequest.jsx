import React from "react";
import OutputRequestMenu from "./OutputRequestMenu/OutputRequestMenu";

let SingleOutputRequest = ({removeOutputRequest, markAsArchived, repeatRequest}) => {
    return <div>
        <div>"SingleOutputRequest" +
            <OutputRequestMenu
                removeOutputRequest={removeOutputRequest} // колбек удаления outputRequest из стейта
                markAsArchived={markAsArchived}
                repeatRequest={repeatRequest}
            /></div>
    </div>
}

export default SingleOutputRequest