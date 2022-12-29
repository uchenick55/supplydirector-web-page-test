import React from "react"; // импорт реакта
import {Field, reduxForm, reset} from "redux-form";// reduxForm для ввода новых постов
import styles from './OutReqSearchField.module.css'
import {Input} from "../../../../../common/Validation/customFields"; // валидация введенных данных - здесь не используется
import search from "../../../../../assets/media/icons/search.jpg"

const OutReqSearchFieldForm = ({handleSubmit, error}) => { // компонента формы
    return (
        <form onSubmit={handleSubmit}/*привязка сабмита формы к внутренней функции reduxForm - handleSubmit*/>
            <div className={styles.gridForm}>
                <div className={styles.imgSearch}><img src={search} alt="search"/></div> {/*картинка поиска*/}
                <div className={styles.fieldSetStyle}>
                    <div>
                        <Field
                            name="outReqSearchFieldData"// имя поля формы и возвращаемого свойства объекта после сабмита формы
                            component={Input}// компонент - ввод однострочный
                            placeholder="Поиск по запросам" // текст подсказка при пустом поле
                            validate={[]} // валидации нет
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

    let onChange = (formData) => { // функция реакции на onChange формы с данными от формы formData
            setOutReqFormData(formData.outReqSearchFieldData) // задать в колбек данные при изменении формы
    }
    return (
        <div className={styles.formCommon}/*стиль*/ >
            <div >
                <div><OutReqSearchFieldReduxForm
                    onChange={onChange} // действия при изменении формы
                />
                </div>
            </div>
        </div>
    )
}

export default OutReqSearchField
