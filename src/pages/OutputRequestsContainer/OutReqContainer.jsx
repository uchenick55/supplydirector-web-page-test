import {connect} from "react-redux";
import React from "react";
import styles from "./OutReqContainer.module.scss";
import OutputRequests from "./OutputRequsts/OutputRequests";
import {removeOutReq, setActiveFiltBtnAC, setActiveHeaderAC} from "../../store/reducers/output-requests";
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
    setActiveHeadarer = (value) => { // установить активный заголовок
        if (value) {
            this.props.setActiveHeaderAC(value)
        }
    }
    setActiveFiltBtn = (value) => { // установить активную кнопку фильтрации
        if (value) {
            this.props.setActiveFiltBtnAC(value)
        }
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
                outReqArrayFiltBtn={this.props.outReqArrayFiltBtn}// массив кнопок фильтрации исходящих запросов
                outReqActiveFiltBtn={this.props.outReqActiveFiltBtn}// активная кнопка фильтрации исходящих запросов
                setActiveFiltBtn={this.setActiveFiltBtn} // задание активной кнопки фильтрации
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        outputRequestsArray: state.outputRequests.outputRequestsArray, // массив исходящих запросов
        outReqArrayHeaders: state.outputRequests.outputRequestsArrayHeaders, // массив заголовков
        activeOutReqHeader: state.outputRequests.activeOutReqHeader,// активный заголовок фильтрации исходящих запросов
        outReqArrayFiltBtn: state.outputRequests.outReqArrayFiltBtn, // массив кнопок фильтрации исходящих запросов
        outReqActiveFiltBtn: state.outputRequests.outReqActiveFiltBtn, // активная кнопка фильтрации исходящих запросов
    }
}


export default connect(mapStateToProps, {removeOutReq, setActiveHeaderAC, setActiveFiltBtnAC})(OutReqContainer)