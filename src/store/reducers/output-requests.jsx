
const REMOVE_OUT_REQ = "myApp/output-requests/REMOVE_OUT_REQ"; // константа для удаления outputRequest

export let removeOutReq = (idRequest) => { // экшн креатор для удаления outputRequest
    return {type: REMOVE_OUT_REQ, idRequest}
};

const initialState = {//инициализационный стейт
    outputRequestsArrayHeaders: { // массив заголовков запросов
        date: "Дата", name: "Название товара", qty: "Кол-во", cost: "Стоимость", answers: "Ответы"
    },
    outRecActiveHeader: "date",// активный заголовок таблицы запросов - пока не используется
    outRecActiveFilterButton: "Все запросы", // активная кнопка фильтрации - пока не используется
    outputRequestsArray: [ // исходящие запросы по умолчанию
        {idRequest: 1, date: "27.06.2022", name: "Корпус из АБС пластика", qty: "1 000 шт.", cost: "10 000 ₽ - 220 000 ₽", answers: true, archived: false },
        {idRequest: 2, date: "27.06.2022", name: "Гайка оцинкованная М16", qty: "10 000 шт.", cost: "10 000 ₽ - 220 000 ₽", answers: false, archived: false },
        {idRequest: 3, date: "27.06.2022", name: "Пульсоксиметр Contec CMS 50D2", qty: "10 шт.", cost: "10 000 ₽ - 220 000 ₽", answers: false, archived: false },
    ]
};

let outputRequestsReducer = (state = initialState, action) => { // редьюсер исходящих запросов
    let stateCopy; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case REMOVE_OUT_REQ: // экшн для удаления outputRequest
            stateCopy = {
                ...state, // копия всего стейта
                outputRequestsArray: [...state.outputRequestsArray.filter(f=>f.idRequest!==action.idRequest)], // удалить исходящий запрос из стейта
            }
            return stateCopy;
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default outputRequestsReducer;