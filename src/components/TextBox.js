import React, { useEffect, useState } from 'react';

const TextBox = (props) => {
    const [suggestedWords, setSuggestedWords] = useState([]);
    const [myVal, setSateValue] = useState("");
    const [isSuggestionLoadReq, setIsSuggesstionLoadReqState] = useState(false);
    useEffect(() => {
        if (myVal.length >= 3 && !isSuggestionLoadReq) {
            fetch("https://api.datamuse.com/sug?s=" + myVal).then((response) => {
                response.json().then((data) => {
                    setSuggestedWords(data);
                })
            }).catch((res) => {

            })
        }
    }, [myVal]);
    const handleTextFieldChange = (e) => {
        setIsSuggesstionLoadReqState(false);
        setSateValue(e.target.value);
        props.handleChange(e);
    }
    const handleAutoCompleteEvent = (value) => {
        setIsSuggesstionLoadReqState(true);
        setSateValue(value);
        setSuggestedWords([]);
    }
    return (<div>
        <label htmlFor={props.id}>{props.label}
            <input type="text" name={props.id} onChange={handleTextFieldChange} value={myVal} /> </label>
        <div>{
            (suggestedWords.length > 0) &&
            <ul>
                {
                    suggestedWords.map((item) => {
                        return (<li key={item.word} onClick={() => handleAutoCompleteEvent(item.word)}>{item.word}</li>)
                    })
                }
            </ul>
        }
        </div>
    </div>);
}
export default TextBox;