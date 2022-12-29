import {connect} from "react-redux";
import React from "react";
import styles from "./OutReqContainer.module.scss";
import OutputRequests from "./OutputRequsts/OutputRequests";

class OutReqContainer extends React.Component {
    // здесь мы получаем данные через коннект из стора и передаем в дочерние компоненты
    removeOutputRequest = (idRequest) => { // функция удаления исходящего запроса
        alert("Удаление исходящего запроса номер " + idRequest);
    }
    markAsArchived = (idRequest) => { // отметить как запрос как архивный
        alert("Пометить исходящий запрос номер " + idRequest + " как архивный" );
    }
    repeatRequest = (idRequest) => { // повторить исходящий запрос
        alert("повторить запрос номер " + idRequest);

    }
    render() {
        return <div className={styles.container}>
            <OutputRequests
                removeOutputRequest={this.removeOutputRequest}
                markAsArchived={this.markAsArchived}
                repeatRequest={this.repeatRequest}
                outputRequestsArray={this.props.outputRequestsArray}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        outputRequestsArray: state.outputRequests.outputRequestsArray,
    }
}


export default connect(mapStateToProps, null)(OutReqContainer)