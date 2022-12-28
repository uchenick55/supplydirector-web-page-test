import React from "react";
import OutputRequestMenu from "./OutputRequestMenu/OutputRequestMenu";

let SingleOutputRequest = ({removeOutputRequest}) => {
    return <div>
        <div>"SingleOutputRequest" +
            <OutputRequestMenu
                removeOutputRequest={removeOutputRequest} // колбек удаления outputRequest из стейта
            /></div>
    </div>
}

export default SingleOutputRequest