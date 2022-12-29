import React from "react";
import classes from "./customFields.module.css"
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...restProps}) => {
    const isError = meta.touched && meta.error; // объединение наличия ошибки в meta и поле уже трогали
    return (
        <div>
            <div >
                <textarea {...input} // формат задан в redux field validation
                          placeholder={restProps.placeholder} // проброс пропсов с плейсхолдером
                          className={isError?classes.textAreaError:classes.textArea}
                    //границу textarea подсветить красным если ошибка в meta
                />
            </div>
            <div >
                {isError?<span className={classes.textError}>{meta.error}</span>:null}
{/*                если ошибка в meta и поле тронули, то отобразить текс ошибки*/}
            </div>
        </div>
    )
}
export const Input = ({input, meta, ...restProps}) => {
    const isError = meta.touched && meta.error; // объединение наличия ошибки в meta и поле уже трогали
    return (
        <span>
            <span >
                <input {...input} // формат задан в redux field validation
                          placeholder={restProps.placeholder} // проброс пропсов с плейсхолдером
                          className={isError?classes.InputError:classes.Input}
                    //границу login подсветить красным если ошибка в meta
                />
            </span>
            <div >
                {isError?<span className={classes.textError}>{meta.error}</span>:null}
{/*                если ошибка в meta и поле тронули, то отобразить текс ошибки*/}
            </div>
        </span>
    )
}

export const CreateField = (name, component, placeholder, validate ) => {
    return (<div>
        <Field
            name={name}// имя поля формы и возвращаемого свойства объекта после сабмита формы
            component={component}// компонент - кастомная строка с валидацией
            placeholder={placeholder}// текст подсказка при пустом поле
            validate={validate}
        />
    </div>)

}



