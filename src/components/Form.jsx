import React, { useState, useRef } from 'react';
import './Form.css';
import Message from './Message';

function Form () {
    const [countMessage, setCountMessage] = useState(0);
    const [historyMessages, setHistoryMessages] = useState([]);


    const inputName = useRef();
    const inputText = useRef();


    const pushHistoryMeassages = (historyMessages) => {

        const Name = inputName.current.value
        const Text = inputText.current.value


        const message = {
            name: Name,
            text: Text,
            dataTime: new Date
        }

        console.log(message);

        inputText.current.value = null;

        historyMessages.push(message);
        setCountMessage(historyMessages.length);
        setHistoryMessages([...historyMessages]);
    }
    return(
        <div className="Form__box">
            <div className="Box__title">
                Сообщения {countMessage}
            </div>
            <div className="Box__messages">
                {historyMessages.map((message, index) => (
                    <Message 
                        message = {message}
                        key={'message_' + index}
                    />
                ))}
            </div>
            <div className="Box__send">
                <label className="TName">
                    Имя <br/>
                    <input type="text" ref={inputName}/>
                </label>
                <label className="TMessage">
                    Сообщение <br/>
                    <textarea className='textarea' ref={inputText}/>
                </label>
                <button className="button" onClick={() => pushHistoryMeassages(historyMessages)}>Отправить!</button>
            </div>
        </div>
    );
}

export default Form;