import {connect} from "react-redux";
import React from "react";
import styles from "./OutputRequestsContainer.module.scss";

class OutputRequestsContainer extends React.Component {
    render() {
        return <div className={styles.container}>
Часть контента
        </div>
    }
}

export default connect(null, null)(OutputRequestsContainer)