import React, { useEffect,useState } from 'react';
import TextBox from "./TextBox";
import TextArea from "./TextArea";
import Date from "./Date";
 
const Form = (props) => {
    let [formElement,setFormElmState] =useState(null);
   
    useEffect(() => {
        parseElement();
    }, []);
    const parseElement = () => {
        console.log(props.type);
        switch (props.type) {
            case "textbox":
                formElement = (<TextBox {...props} ></TextBox>)
                break;
            case "textarea":
                formElement = (<TextArea {...props} ></TextArea>)
                break;
            case "date":
                formElement = (<Date {...props} ></Date>)
                break;
            default:
                formElement = (<TextBox {...props} ></TextBox>)
                break;
        }
        setFormElmState(formElement);
    }

    return (
        <React.Fragment>
            {formElement}
        </React.Fragment>
    );
}
export default Form;