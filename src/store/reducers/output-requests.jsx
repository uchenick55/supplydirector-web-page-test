
const SET_CONST = "myApp/output-requests/SET_CONST"; //константа пока заглушка

export let setConst = () => { // экшн креатор  пока тоже только заглушка
    return {type: SET_CONST}
};

const initialState = {
    const:null // тоже пока заглушка под обработчик

};

export const OutputRequestsReducer = (state = initialState, action) => {
    let stateCopy; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_CONST:
            stateCopy = {
                ...state, // копия всего стейта
                initialisedApp: true, // смена флага инициализации приложения на true
            }
        default:
            return state; // возврат по умолчанию
    }
};

export default OutputRequestsReducer;
