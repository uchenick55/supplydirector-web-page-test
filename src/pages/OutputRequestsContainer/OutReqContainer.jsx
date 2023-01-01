import {connect} from "react-redux";
import React from "react";
import styles from "./OutReqContainer.module.scss";
import OutputRequests from "./OutputRequsts/OutputRequests";
import {removeOutReq, setActiveHeaderAC} from "../../store/reducers/output-requests";
import preloader from "../../assets/media/icons/Spin-1s-64px.svg"

class OutReqContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialisedApp: false, // имитация инициализации приложения
        };
    }

    // здесь мы получаем данные через коннект из стора и передаем в дочерние компоненты
    removeOutputRequest = (idRequest) => { // функция удаления исходящего запроса
        this.props.removeOutReq(idRequest)
    }
    markAsArchived = (idRequest) => { // отметить как запрос как архивный
        alert("Пометить исходящий запрос номер " + idRequest + " как архивный");
    }
    repeatRequest = (idRequest) => { // повторить исходящий запрос
        alert("повторить запрос номер " + idRequest);

    }
    setOutReqFormData = (outReqSearchFieldData) => { // ввод в поисковой строке отображается в консоли
        if (outReqSearchFieldData) {
            console.log(outReqSearchFieldData);
        }
    }
    setActiveHeadarer = (value) => {
        if (value) {
            this.props.setActiveHeaderAC(value)
        }

        /*
                console.alert("мы дошли до container и сетаем " + value)
        */
    }


    render() {
        if (!this.state.initialisedApp) { // если приложение еще не инициализировано
            setTimeout(() => {
                this.setState({initialisedApp: true})
            }, 1000) // задержка
            return <img className={styles.preloader} src={preloader} alt="Подождите"/> // показать статус загрузки
        }

        return <div className={styles.container}>
            <OutputRequests
                removeOutputRequest={this.removeOutputRequest} // колбек удаления исходящих запросов
                markAsArchived={this.markAsArchived} // отметить как архивный, привел к контейнерному из обработчика
                repeatRequest={this.repeatRequest} // повторить запрос - привел к контейнерному компонету
                outputRequestsArray={this.props.outputRequestsArray} // весь массив исходящих запросов
                outReqArrayHeaders={this.props.outReqArrayHeaders} // массив заголовков из стейта
                setOutReqFormData={this.setOutReqFormData}// ввод в поисковой строке, пока поднял в контейнерную компоненту и вывел в консоль
                activeOutReqHeader={this.props.activeOutReqHeader} // активный заголовок фильтрации исходящих запросов
                setActiveHeadarer={this.setActiveHeadarer} // установить активный заголовок запросов для фильтрации
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        outputRequestsArray: state.outputRequests.outputRequestsArray, // массив исходящих запросов
        outReqArrayHeaders: state.outputRequests.outputRequestsArrayHeaders, // массив заголовков
        activeOutReqHeader: state.outputRequests.activeOutReqHeader,// активный заголовок фильтрации исходящих запросов
    }
}


export default connect(mapStateToProps, {removeOutReq, setActiveHeaderAC})(OutReqContainer)