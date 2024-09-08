import * as React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./ConnectChatForm.module.css"

const ConnectChatForm = () => {
    const navigator = useNavigate()
    const [chatName, setChatName] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chatName.trim()) {
            connectToChat()
        }
    }
    const connectToChat = () => {
        navigator(`/chat/${chatName}`)
    }
    return (
        <form className={styles["form"]} onSubmit={handleSubmit}>
            <h2>Присоедиться к чату</h2>
            <div className={styles["form__item"]}>
                <label className={styles["label"]} htmlFor="chatMame">Название:</label>
                <input className={styles["input"]}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChatName(e.target.value)}
                       type="text"
                       name="chatName"
                       id="chatName"
                       placeholder="Мой чат"
                       value={chatName}
                />
            </div>
            <button className={styles["button"]} type="submit">Присоединиться</button>
        </form>
    );
};

export default ConnectChatForm;