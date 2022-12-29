import {connect} from "react-redux";
import React from "react";
import styles from "./OutReqContainer.module.scss";
import OutputRequests from "./OutputRequsts/OutputRequests";
import {removeOutReq} from "../../store/reducers/output-requests";
import preloader from "../../assets/media/icons/Spin-1s-64px.svg"

class OutReqContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialisedApp: false, // имитация инициализации приложения
        };
    }
    componentDidMount() {

    }

    // здесь мы получаем данные через коннект из стора и передаем в дочерние компоненты
    removeOutputRequest = (idRequest) => { // функция удаления исходящего запроса
        this.props.removeOutReq(idRequest)
    }
    markAsArchived = (idRequest) => { // отметить как запрос как архивный
        alert("Пометить исходящий запрос номер " + idRequest + " как архивный" );
    }
    repeatRequest = (idRequest) => { // повторить исходящий запрос
        alert("повторить запрос номер " + idRequest);

    }
    setOutReqFormData = (outReqSearchFieldData) => { // повторить исходящий запрос
        if (outReqSearchFieldData)
        {console.log(outReqSearchFieldData);}

    }
    render() {
        if (!this.state.initialisedApp) { // если приложение еще не инициализировано
            setTimeout(()=>{this.setState({initialisedApp: true})}, 2000)
            return <img className={styles.preloader} src={preloader} alt="Подождите"/> // показать статус загрузки
        }

        return <div className={styles.container}>
            <OutputRequests
                removeOutputRequest={this.removeOutputRequest}
                markAsArchived={this.markAsArchived}
                repeatRequest={this.repeatRequest}
                outputRequestsArray={this.props.outputRequestsArray}
                outReqArrayHeaders={this.props.outReqArrayHeaders}
                outRecActiveHeader={this.props.outRecActiveHeader}
                setOutReqFormData={this.setOutReqFormData}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        outputRequestsArray: state.outputRequests.outputRequestsArray, // массив исходящих запросов
        outReqArrayHeaders: state.outputRequests.outputRequestsArrayHeaders, // массив заголовков
        outRecActiveHeader: state.outputRequests.outRecActiveHeader, // текущий активный заголовок
    }
}


export default connect(mapStateToProps, {removeOutReq})(OutReqContainer)