import {useStore} from "../../app/store/store.ts";
import style from "./Message.module.css"
import {FC} from "react";
import {message} from "../../shared/types/types.ts";

interface MessageProps {
    text: string
}

const Message: FC<MessageProps> = ({text}) => {
    const {username} = useStore();
    const obj = JSON.parse(text) as message
    const name = obj["username"]
    const msg = obj["message"]

    const isYour = username === name

    return (
        <div className={`${style[isYour ? "your" : "other"]} ${style["message"]}`}>
            {!isYour && <h5 className={style["username"]}>{name}</h5>}
            <p className={style["text"]}>{msg}</p>
        </div>
    )
};

export default Message;