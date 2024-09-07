import {useParams} from "react-router-dom";

const ChatPage = () => {
    const { chatID } = useParams();

    return (
        <div>
            <h1>Chat ID: {chatID}</h1>
        </div>
    );
};

export default ChatPage;