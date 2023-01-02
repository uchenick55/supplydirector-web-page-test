const REMOVE_OUT_REQ = "myApp/output-requests/REMOVE_OUT_REQ"; // константа для удаления outputRequest
const SET_ACTIVE_HEADER = "myApp/output-requests/SET_ACTIVE_HEADER"; // константа для удаления outputRequest
const SET_ACTIVE_FILTER_BUTTON = "myApp/output-requests/SET_ACTIVE_FILTER_BUTTON"; // константа для задания активной кнопки фильтрации

export let removeOutReq = (idRequest) => { // экшн креатор для удаления outputRequest
    return {type: REMOVE_OUT_REQ, idRequest}
};
export let setActiveHeaderAC = (activeOutReqHeader) => { // экшн креатор для задания активного заголовка запросов
    return {type: SET_ACTIVE_HEADER, activeOutReqHeader}
};
export let setActiveFiltBtnAC = (outReqActiveFiltBtn) => { // экшн креатор для задания активной кнопки фильтрации
    return {type: SET_ACTIVE_FILTER_BUTTON, outReqActiveFiltBtn}
};

const initialState = {//инициализационный стейт
    outputRequestsArrayHeaders: [ // массив заголовков запросов
        "Дата", "Название товара", "Кол-во", "Стоимость", "Ответы", ""
    ],
    activeOutReqHeader: "Дата",
    outReqArrayFiltBtn: [ // массив кнопок фильтрации
        "Все запросы", "Без ответов", "С ответами", "Старые", "Архив"
    ],
    outReqActiveFiltBtn: "Все запросы", // активная кнопка фильтрации - пока не используется
    outputRequestsArray: [ // исходящие запросы по умолчанию
        {
            idRequest: 1,
            dataList: {
                date: "27.06.2022",
                name: "Корпус из АБС пластика",
                qty: "1 000 шт.",
                cost: "10 000 ₽ - 220 000 ₽"
            },
            answers: true,
            archived: false
        },
        {
            idRequest: 2,
            dataList: {
                date: "27.06.2021",
                name: "Гайка оцинкованная М16",
                qty: "10 000 шт.",
                cost: "10 000 ₽ - 220 000 ₽",
            },
            answers: false,
            archived: true
        },
        {
            idRequest: 3,
            dataList: {
                date: "27.06.2020",
                name: "Пульсоксиметр Contec CMS 50D2",
                qty: "10 шт.",
                cost: "10 000 ₽ - 220 000 ₽",
            },
            answers: false,
            archived: false
        },
    ]
};

let outputRequestsReducer = (state = initialState, action) => { // редьюсер исходящих запросов
    let stateCopy; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case REMOVE_OUT_REQ: // экшн для удаления outputRequest
            stateCopy = {
                ...state, // копия всего стейта
                outputRequestsArray: [...state.outputRequestsArray.filter(f => f.idRequest !== action.idRequest)], // удалить исходящий запрос из стейта
            }
            return stateCopy;
        case SET_ACTIVE_HEADER: // экшн для задания активного заголовка запросов
            stateCopy = {
                ...state, // копия всего стейта
                activeOutReqHeader: action.activeOutReqHeader, // задать активный заголовок запросов
            }
            return stateCopy;
        case SET_ACTIVE_FILTER_BUTTON: // экшн для задания активной кнопки фильтрации
            stateCopy = {
                ...state, // копия всего стейта
                outReqActiveFiltBtn: action.outReqActiveFiltBtn, // задать активную кнопку фильтрации
            }
            return stateCopy;
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default outputRequestsReducer;