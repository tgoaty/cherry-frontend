import React, {FC, useState} from "react";
import {useStore} from "../../app/store/store.ts";
import style from "./SendMessage.module.css"

interface SendMessageProps {
    ws: WebSocket | null
}
const SendMessage: FC<SendMessageProps> = ({ws}) => {
    const {username, setUsername} = useStore()
    const sendMessage = () => {

        if (ws && message) {
            if (!username) {
                setUsername(prompt("Your username"))
            } else {
                const messageData = {
                    username: username,  // Имя пользователя
                    message: message,    // Текст сообщения
                };
                ws.send(JSON.stringify(messageData))
                setMessage('');
            }

        }
    };
    const [message, setMessage] = useState('');
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };
    return (
        <div className={style["send__panel"]}>
            <input className={style["input"]}
                   placeholder="Введите сообщение:"
                type="text"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className={style["button"]} onClick={sendMessage}>Send</button>
        </div>
    );
};

export default SendMessage;