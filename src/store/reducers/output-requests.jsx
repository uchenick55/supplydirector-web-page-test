
const SET_CONST = "myApp/output-requests/SET_CONST"; //константа пока заглушка

export let setConst = () => { // экшн креатор  пока тоже только заглушка
    return {type: SET_CONST}
};

const initialState = {
    outputRequestsArray: [ // исходящие запросы инициализационный стейт
        {idRequest: 1, date: "27.06.2022", name: "Корпус из АБС пластика", qty: 1000, cost: "10 000 ₽ - 220 000 ₽", answers: true, archived: false },
        {idRequest: 2, date: "27.06.2022", name: "Гайка оцинкованная М16", qty: 10000, cost: "10 000 ₽ - 220 000 ₽", answers: false, archived: false },
        {idRequest: 3, date: "27.06.2022", name: "Пульсоксиметр Contec CMS 50D2", qty: 10, cost: "10 000 ₽ - 220 000 ₽", answers: false, archived: false },
    ]
};


export const OutputRequestsReducer = (state = initialState, action) => {
    let stateCopy; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_CONST:
            stateCopy = {
                ...state, // копия всего стейта
                initialisedApp: true, // смена флага инициализации приложения на true
            }
            return stateCopy;
        default:
            return state; // возврат по умолчанию
    }
};

export default OutputRequestsReducer;
