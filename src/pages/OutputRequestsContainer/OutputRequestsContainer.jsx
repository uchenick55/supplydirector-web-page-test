import {connect} from "react-redux";
import React from "react";
import styles from "./OutputRequestsContainer.module.scss";
import OutputRequests from "./OutputRequsts/OutputRequests";

class OutputRequestsContainer extends React.Component {
    // здесь мы получаем данные через коннект из стора и передаем в дочерние компоненты
    render() {
        return <div className={styles.container}>
            "OutputRequestsContainer"
            <OutputRequests/>
        </div>
    }
}

export default connect(null, null)(OutputRequestsContainer)