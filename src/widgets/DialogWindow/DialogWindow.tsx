import Message from "../../entities/Message/Message.tsx";
import style from "./DialogWindow.module.css"
import {FC} from "react";

interface DialogWindowProps {
    messages: string[]
}

const DialogWindow: FC<DialogWindowProps> = ({messages}) => {
    return (
        <div className={style["dialog__window"]}>
            {messages.map((msg, index) => (
                <div key={index}><Message text={msg}/></div>
            ))}
        </div>
    );
};

export default DialogWindow;