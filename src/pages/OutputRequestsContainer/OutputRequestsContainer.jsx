import {connect} from "react-redux";
import React from "react";
import styles from "./OutputRequestsContainer.module.scss";
import OutputRequests from "./OutputRequsts/OutputRequests";

class OutputRequestsContainer extends React.Component {
    // здесь мы получаем данные через коннект из стора и передаем в дочерние компоненты
    removeOutputRequest = () => {
        alert("delete output Request in container component");
    }
    render() {
        return <div className={styles.container}>
            "OutputRequestsContainer"
            <OutputRequests
                removeOutputRequest={this.removeOutputRequest}
            />
        </div>
    }
}

export default connect(null, null)(OutputRequestsContainer)