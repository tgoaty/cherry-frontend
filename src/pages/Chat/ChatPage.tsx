import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DialogWindow from "../../widgets/DialogWindow/DialogWindow.tsx";
import SendMessage from "../../features/SendMessage/SendMessage.tsx";
import style from  "./ChatPage.module.css"

const ChatPage = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [ws, setWs] = useState<WebSocket | null>(null);

    const {chatID} = useParams();
    useEffect(() => {
        if (!chatID) return;

        const socket = new WebSocket(`ws://localhost:8000/ws/chat/${chatID}`);
        setWs(socket);

        // Обработка входящих сообщений (включая историю)
        socket.onmessage = (event: MessageEvent) => {
            const incomingMessage = event.data;
            setMessages((prevMessages) => [...prevMessages, incomingMessage]);  // Добавляем сообщение в историю
        };

        // Закрываем WebSocket при размонтировании компонента
        return () => {
            socket.close();
        };
    }, [chatID]);

    return (
        <div className={style["chat"]}>
            <h2>Чат: {chatID}</h2>
            <DialogWindow messages={messages}/>
            <SendMessage ws={ws}/>
        </div>
    );
};

export default ChatPage;