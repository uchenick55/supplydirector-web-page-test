import {connect} from "react-redux";
import React from "react";
import styles from "./OutputRequestsContainer.module.scss";
import OutputRequests from "./OutputRequsts/OutputRequests";

class OutputRequestsContainer extends React.Component {
    // здесь мы получаем данные через коннект из стора и передаем в дочерние компоненты
    removeOutputRequest = () => { // функция удаления исходящего запроса
        alert("delete output Request from OutputRequestsContainer");
    }
    markAsArchived = () => { // отметить как запрос как архивный
        alert("mark as archived from OutputRequestsContainer");
    }
    repeatRequest = () => { // повторить исходящий запрос
        alert("repeat request from OutputRequestsContainer");

    }
    render() {
        return <div className={styles.container}>
            "OutputRequestsContainer"
            <OutputRequests
                removeOutputRequest={this.removeOutputRequest}
                markAsArchived={this.markAsArchived}
                repeatRequest={this.repeatRequest}
            />
        </div>
    }
}

export default connect(null, null)(OutputRequestsContainer)