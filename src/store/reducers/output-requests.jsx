const REMOVE_OUT_REQ = "myApp/output-requests/REMOVE_OUT_REQ"; // константа для удаления outputRequest
const SET_ACTIVE_HEADER = "myApp/output-requests/SET_ACTIVE_HEADER"; // константа для удаления outputRequest
const SET_ACTIVE_FILTER_BUTTON = "myApp/output-requests/SET_ACTIVE_FILTER_BUTTON"; // константа для задания активной кнопки фильтрации
const SET_OUT_REC_SEARCH_FIELD_DATA = "myApp/output-requests/OUT_REC_SEARCH_FIELD_DATA"; // константа для задания значения поисковой строки
const SET_SORT_HEADER_DIRECTION = "myApp/output-requests/SET_SORT_HEADER_DIRECTION"; // константа задания направления сортировки
const MARK_AS_ARCHIVED = "myApp/output-requests/MARK_AS_ARCHIVED"; // константа пометки как архивный

//outReqSearchFieldData
export let removeOutReq = (idRequest) => { // экшн креатор для удаления outputRequest
    return {type: REMOVE_OUT_REQ, idRequest}
};
export let setActiveHeaderAC = (activeOutReqHeader) => { // экшн креатор для задания активного заголовка запросов
    return {type: SET_ACTIVE_HEADER, activeOutReqHeader}
};
export let setActiveFiltBtnAC = (outReqActiveFiltBtn) => { // экшн креатор для задания активной кнопки фильтрации
    return {type: SET_ACTIVE_FILTER_BUTTON, outReqActiveFiltBtn}
};
export let setOutReqSearchFieldDataAC = (outReqSearchFieldData) => { // экшн креатор для задания значения поисковой строки
    return {type: SET_OUT_REC_SEARCH_FIELD_DATA, outReqSearchFieldData}
};
export let setSortHeaderDirectionAC = (sortHeaderDirection) => { // экшн креатор для задания направления сортировки
    return {type: SET_SORT_HEADER_DIRECTION, sortHeaderDirection}
};
export let markAsArchivedAC = (idRequest) => { // экшн креатор для отметки/снятия метки архивный
    return {type: MARK_AS_ARCHIVED, idRequest}
};

const initialState = {//инициализационный стейт
    outputRequestsArrayHeaders: [ // массив заголовков запросов
        "Дата", "Название товара", "Кол-во", "Стоимость", "Ответы"
    ],
    activeOutReqHeader: "Дата",
    sortHeaderDirection: true,
    outReqArrayFiltBtn: [ // массив кнопок фильтрации
        "Все запросы", "Без ответов", "С ответами", "Старые", "Архив"
    ],
    outReqActiveFiltBtn: "Все запросы", // активная кнопка фильтрации - пока не используется
    outReqSearchFieldData: "", // значение поисковой строки
    outputRequestsArray: [ // исходящие запросы по умолчанию
        {
            idRequest: 1,
            responses: true,
            archived: false,
            dataList: {
                date: "27.06.2022",
                name: "Корпус из АБС пластика",
                qty: "10 000 шт.",
                cost: "15 000 ₽ - 220 000 ₽"
            },
        },
        {
            idRequest: 2,
            responses: false,
            archived: false,
            dataList: {
                date: "27.06.2021",
                name: "Гайка оцинкованная М16",
                qty: "1 000 шт.",
                cost: "10 000 ₽ - 220 000 ₽",
            },
        },
        {
            idRequest: 3,
            responses: false,
            archived: false,
            dataList: {
                date: "27.06.2020",
                name: "Пульсоксиметр Contec CMS 50D2",
                qty: "10 шт.",
                cost: "20 000 ₽ - 220 000 ₽",
            },
        },
        {
            idRequest: 4,
            responses: true,
            archived: false,
            dataList: {
                date: "27.06.2019",
                name: "Адронный коллайдер",
                qty: "100 шт.",
                cost: "5 000 ₽ - 220 000 ₽",
            },
        },
    ],
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
        case SET_OUT_REC_SEARCH_FIELD_DATA: // экшн для задания значения поисковой строки
            stateCopy = {
                ...state, // копия всего стейта
                outReqSearchFieldData: action.outReqSearchFieldData, // задать активную кнопку фильтрации
            }
            return stateCopy;
        case SET_SORT_HEADER_DIRECTION: // экшн для задания направления сортировки
            stateCopy = {
                ...state, // копия всего стейта
                sortHeaderDirection: action.sortHeaderDirection, // задать направление сортировки
            }
            return stateCopy;
        case MARK_AS_ARCHIVED: // экшн для отметки/снятия метки архивный
            stateCopy = {
                ...state, // копия всего стейта
                outputRequestsArray: [...state.outputRequestsArray.map(item => { // пробегаем весь массив запросов
                    if (item.idRequest === action.idRequest) { // если ID запроса совпадает с ID в котором меняли
                        item.archived = !item.archived // инвертим состояние метки архивв
                    }
                    return item // возврат перебираемых элементов
                })],
            }
            console.log(state, stateCopy);
            return stateCopy;
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default outputRequestsReducer;

