
export const getOutputRequestsArray = (state) => { // массив исходящих запросов
    return state.outputRequests.outputRequestsArray
}
export const getOutReqArrayHeaders = (state) => {// массив заголовков
    return state.outputRequests.outputRequestsArrayHeaders
}
export const getActiveOutReqHeader = (state) => {// активный заголовок фильтрации исходящих запросов
    return state.outputRequests.activeOutReqHeader
}
export const getOutReqArrayFiltBtn = (state) => {// массив кнопок фильтрации исходящих запросов
    return state.outputRequests.outReqArrayFiltBtn
}
export const getOutReqActiveFiltBtn = (state) => {// активная кнопка фильтрации исходящих запросов
    return state.outputRequests.outReqActiveFiltBtn
}
