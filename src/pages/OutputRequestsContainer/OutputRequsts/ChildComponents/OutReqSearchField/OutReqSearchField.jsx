import React from "react"; // импорт реакта
import {Field, reduxForm, reset} from "redux-form";// reduxForm для ввода новых постов
import classes from './OutReqSearchField.module.css'
import styles from '../../../../../common/Validation/customFields.module.css'
import {Input} from "../../../../../common/Validation/customFields";
import {email, Required} from "../../../../../common/Validation/validationField";

const LoginForm = ({handleSubmit, error}) => { // компонента формы
    return (
        <form onSubmit={handleSubmit}/*привязка сабмита формы к внутренней функции reduxForm - handleSubmit*/>
                <div className={classes.legendStyle}>Войдите в аккаунт</div>
                <div className={classes.fieldSetStyle}>
                    <div>
                        <Field
                            name="email"// имя поля формы и возвращаемого свойства объекта после сабмита формы
                            component={Input}// компонент - ввод
                            placeholder="Поиск по запросам" // текст подсказка при пустом поле
                            validate={[]}
                        />
                    </div>
                </div>
        </form>
    )
}

// оберточная компонента формы, задает имя подстейта "LoginForm"
let LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

let OutReqSearchField = () => {

    let resetFormFields = () => { // альтернативный вариант сброса формы, можно подключить к сабмиту
    //    dispatch(reset('loginForm')) // сброс полей формы после ввода

    }
    let onSubmit = (formData) => { // функция реакции на сабмит формы с данными от формы formData
//        postLogin(formData.email, formData.password, rememberme, formData.captcha)//вызов postLoginThunkCreator выше из LoginContainer
//        resetFormFields() // сбросить поля формы после отправки данных полей
    }
    return (
        <div className={classes.loginCommon}/*стиль*/ >
            <div className={classes.loginForm}>
                <div><LoginReduxForm
                    onSubmit={onSubmit}
                />{/*вызов формы логина с отсылкой на локальный обработчик сабмита*/}
                </div>
            </div>
        </div>
    )
}

export default OutReqSearchField


// import React from "react";
//
// let OutReqSearchField = () => {
//     // компонента поля поиска среди исходящих запросов - планирую на redux-form
//     return "OutReqSearchField"
// }
//
// export default OutReqSearchField