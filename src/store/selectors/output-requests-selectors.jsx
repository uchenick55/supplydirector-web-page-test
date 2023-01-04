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
    getSortHeaderDirection: (state) => {// получение направления сортировки запросов
        return state.outputRequests.sortHeaderDirection
    },

}

let getArrayFilteredByBtns = createSelector(//  фильтрации по кнопкам
    [
        outReqSelector.getArray, // массив из объектов запросов перед фильтрацией
        outReqSelector.getActiveFiltBtn, // активная кнопка фильтрации для switch/case
        outReqSelector.getArrayFiltBtn // подстановка названий кнопок фильтрации в switch/case
    ],
    (outputRequestsArray, outReqActiveFiltBtn, outReqArrayFiltBtn) => {// то, что return входящие селекторы
        let commonPart2 = (condition) => outputRequestsArray.filter(condition) // общая часть фильтрации
        switch (outReqActiveFiltBtn) {
            case outReqArrayFiltBtn[1]: // экшн фильтрация списка запросов "Без ответов"
                return commonPart2((item) => item.responses !== true)
            case outReqArrayFiltBtn[2]: // экшн фильтрация списка запросов "С ответами"
                return commonPart2((item) => item.responses === true)
            case outReqArrayFiltBtn[4]: // экшн фильтрация списка запросов "Архив"
                return commonPart2((item) => item.archived === true)
            case outReqArrayFiltBtn[3]: // экшн фильтрация списка запросов "Старые" - один год от текущей даты
                let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
                let outputRequestsArray1 = outputRequestsArray.filter((item) => {
                        let dateItem = new Date(item.dataList.date.replace(pattern, "$3-$2-$1")); // отобразить запись даты из стейта в формат, распознаваемый new Date
                        let time = new Date().getTime() - 86400000 * 365; // получить количество миллисекунд с 1970 года - 1 год
                        let dateOld = new Date(time); // преобразовать в дату (1 год от текущей даты)
                        return dateItem < dateOld //вернуть даты из списка старше года
                    }
                )
                return outputRequestsArray1;
            default: // Все запросы
                return outputRequestsArray; // по умолчанию стейт возврашается неизмененным
        }
    })

export let getArrayFilteredBySearchFieldAndButtons = createSelector( // фильтрация по полю поиска после фильтрации по кнопкам
    [
        getArrayFilteredByBtns, // массив после фильтрации по кнопкам
        outReqSelector.getOutReqSearchFieldData, // значение поля поиска по запросам
    ],
    (outputRequestsArray, outReqSearchFieldData) => {// то, что return входящие селекторы
        let outputRequestsArray2 = outputRequestsArray.filter((item) =>
            item.dataList.name.toLowerCase().includes(outReqSearchFieldData.toLowerCase()))
        // поиск по вхождению части слова в поле Название товара по запросам независомо от регистра
        return outputRequestsArray2;
    })

export let getArrFiltSearchBtnsSortHeader = createSelector( // сортировка по заголовкам после фильтрации по кнопками и полю поиска
    [
        getArrayFilteredBySearchFieldAndButtons, // массив после фильтрации по кнопкам и полю поиска
        outReqSelector.getActiveHeader, // активный заголовок сортировки
        outReqSelector.getSortHeaderDirection, // направление сортировки заголовка
        outReqSelector.getArrayHeaders,// массив заголовков для фильтрации
    ],
    (outputRequestsArray, activeOutReqHeader, sortHeaderDirection, outputRequestsArrayHeaders) => {
        // то, что return входящие селекторы
        let commonPart1; // задание общей части
        let commonPart4 = (commonPart1, a, b) => {
            // parseInt - забрать только число
            // dataList... - текущий путь в массиве к объекту
            // .replace(/\s/g, "") - сжать пробелы
            let partA = commonPart1(a); // два элемента для сравнения при сортировке
            let partB = commonPart1(b);
            let compareResult = sortHeaderDirection // если прямая/обратная сортировка
                ? (partA < partB) ? 1 : -1 // прямая сортировка
                : (partA > partB) ? 1 : -1 // обратная сортировка
            return compareResult // возврат 1 или -1 для сортировки
        }
        let commonPart5 = (commonPart1) => {
            let outputRequestsArray3 = outputRequestsArray.sort(// сортируем массив объектов
                (a, b) => {   // сравниваемые элементы
                    return commonPart4(commonPart1, a, b) // упаковываем общую часть сортировки по заголовкам
                });
            return outputRequestsArray3;
        }
        switch (activeOutReqHeader) {
            case outputRequestsArrayHeaders[0]: // экшн сортировка по "Дата"
                let pattern = /(\d{2})\.(\d{2})\.(\d{4})/; // берем текущий паттерн даты
                commonPart1 = (ab) => new Date(ab.dataList.date.replace(pattern, "$3-$2-$1"))
                return commonPart5 (commonPart1) // можно смотреть что возвращается после сортировки
            case outputRequestsArrayHeaders[1]: // экшн сортировка по "Название товара"
                commonPart1 = (ab) => ab.dataList.name //путь к сортируемому элементу
                return commonPart5 (commonPart1)
            case outputRequestsArrayHeaders[2]: // экшн сортировка по "Кол-во"
                commonPart1 = (ab) => parseInt(ab.dataList.qty.replace(/\s/g, ""))//путь к сортируемому элементу со сжиманием пробелов
                return commonPart5 (commonPart1)
            case outputRequestsArrayHeaders[3]: // экшн сортировка по "Стоимость"
                commonPart1 = (ab) => parseInt(ab.dataList.cost.replace(/\s/g, ""))//путь к сортируемому элементу со сжиманием пробелов
                return commonPart5 (commonPart1)
            case outputRequestsArrayHeaders[4]: // экшн сортировка по "Название товара"
                commonPart1 = (ab) => ab.responses //путь к сортируемому элементу
                return commonPart5 (commonPart1)
            default: // Все запросы
                return outputRequestsArray; // по умолчанию стейт возврашается неизмененным
        }
    })

