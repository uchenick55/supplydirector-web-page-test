import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {UserReducer} from "./reducers/user";
import OutputRequestsReducer from "./reducers/output-requests";
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    user: UserReducer,
    outputRequests: OutputRequestsReducer,
    form: formReducer, // стейт от redux-form

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // подключение redux dev tools

const store = createStore(rootReducer, composeEnhancers(  // задание всего стора в константу
    applyMiddleware(thunk)
));

window.store = store; // возможность смотреть стор через консоль

export default store

