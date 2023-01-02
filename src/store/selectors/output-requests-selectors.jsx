import {createSelector} from "reselect";

export const outReqSelector = {

    getArray: (state) => { // массив исходящих запросов
        return state.outputRequests.outputRequestsArray
    },
    getArrayHeaders: (state) => {// массив заголовков
        return state.outputRequests.outputRequestsArrayHeaders
    },
    getActiveHeader: (state) => {// активный заголовок фильтрации исходящих запросов
        return state.outputRequests.activeOutReqHeader
    },
    getArrayFiltBtn: (state) => {// массив кнопок фильтрации исходящих запросов
        return state.outputRequests.outReqArrayFiltBtn
    },
    getActiveFiltBtn: (state) => {// активная кнопка фильтрации исходящих запросов
        return state.outputRequests.outReqActiveFiltBtn
    },
    getOutReqSearchFieldData: (state) => {// получение значения поиска по запросам
        return state.outputRequests.outReqSearchFieldData
    },

}

export let getArrayFilteredByBtns = createSelector(
    [
        outReqSelector.getArray, // массив из объектов запросов перед фильтрацией
        outReqSelector.getActiveFiltBtn, // активная кнопка фильтрации для switch/case
        outReqSelector.getArrayFiltBtn // подстановка названий кнопок фильтрации в switch/case
    ],
    (outputRequestsArray, outReqActiveFiltBtn, outReqArrayFiltBtn) => {
        let outputRequestsArray1;
        switch (outReqActiveFiltBtn) {
            case outReqArrayFiltBtn[1]: // экшн фильтрация списка запросов "Ьез ответов"
                outputRequestsArray1 = outputRequestsArray.filter((item) => item.answers !== true)
                return outputRequestsArray1;
            case outReqArrayFiltBtn[2]: // экшн фильтрация списка запросов "С ответами"
                outputRequestsArray1 = outputRequestsArray.filter((item) => item.answers === true)
                return outputRequestsArray1;
            case outReqArrayFiltBtn[3]: // экшн фильтрация списка запросов "Старые" - один год от текущей даты
                let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
                outputRequestsArray1 = outputRequestsArray.filter((item) => {
                    let dateItem = new Date(item.dataList.date.replace(pattern, "$3-$2-$1")); // отобразить запись даты из стейта в формат, распознаваемый new Date
                    let time = new Date().getTime()-86400000*365; // получить количество миллисекунд с 1970 года - 1 год
                    let dateOld = new Date(time); // преобразовать в дату (1 год от текущей даты)
                    return dateItem < dateOld //вернуть даты из списка старше года
                    }
                )
                return outputRequestsArray1;
            case outReqArrayFiltBtn[4]: // экшн фильтрация списка запросов "Архив"
                outputRequestsArray1 = outputRequestsArray.filter((item) => item.archived === true)
                return outputRequestsArray1;
            default: // Все запросы
                return outputRequestsArray; // по умолчанию стейт возврашается неизмененным
        }
    })

export let getArrayFilteredBySearchFieldAndButtons = createSelector(
    [
        getArrayFilteredByBtns, // массив после фильтрации по кнопкам
        outReqSelector.getOutReqSearchFieldData, // значение поля поиска по запросам
    ],
    (outputRequestsArray, outReqSearchFieldData) => {
        let outputRequestsArray2 = outputRequestsArray.filter((item) =>
            item.dataList.name.toLowerCase().includes(outReqSearchFieldData.toLowerCase()))
        // поиск по вхождению части слова в поле Название товара по запросам независомо от регистра
        return outputRequestsArray2;
    })

