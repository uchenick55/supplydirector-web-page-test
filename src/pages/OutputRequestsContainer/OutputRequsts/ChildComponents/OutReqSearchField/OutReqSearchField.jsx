import React from "react"; // импорт реакта
import {Field, reduxForm, reset} from "redux-form";// reduxForm для ввода новых постов
import styles from './OutReqSearchField.module.css'
import {Input} from "../../../../../common/Validation/customFields";
import search from "../../../../../assets/media/icons/search.jpg"

const OutReqSearchFieldForm = ({handleSubmit, error}) => { // компонента формы
    return (
        <form onSubmit={handleSubmit}/*привязка сабмита формы к внутренней функции reduxForm - handleSubmit*/>
            <div className={styles.loginForm}>
                <div className={styles.imgSearch}><img src={search} alt="search"/></div>
                <div className={styles.fieldSetStyle}>
                    <div>
                        <Field
                            name="outReqSearchFieldData"// имя поля формы и возвращаемого свойства объекта после сабмита формы
                            component={Input}// компонент - ввод
                            placeholder="Поиск по запросам" // текст подсказка при пустом поле
                            validate={[]}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

// оберточная компонента формы, задает имя подстейта "OutReqSearchFieldForm"
let OutReqSearchFieldReduxForm = reduxForm({form: 'OutReqSearchFieldForm'})(OutReqSearchFieldForm)

let OutReqSearchField = ({setOutReqFormData}) => {

    let resetFormFields = () => { // альтернативный вариант сброса формы, можно подключить к сабмиту
        //    dispatch(reset('OutReqSearchFieldForm')) // сброс полей формы после ввода

    }
    let onChange = (formData) => { // функция реакции на сабмит формы с данными от формы formData
            setOutReqFormData(formData.outReqSearchFieldData)
    }
    return (
        <div className={styles.loginCommon}/*стиль*/ >
            <div >
                <div><OutReqSearchFieldReduxForm
                    onChange={onChange}
                />{/*вызов формы логина с отсылкой на локальный обработчик сабмита*/}
                </div>
            </div>
        </div>
    )
}

export default OutReqSearchField
