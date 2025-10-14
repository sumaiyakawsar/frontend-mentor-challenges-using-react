import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import avatar from "../images/avatar.jpg";

export default function ChatHeader() {
    return (
        <div className="chat-header">
            <div className="chat-header__left">
                <IoIosArrowBack role="button" className="chat-header__back" />

                <img src={avatar} alt="Samuel Green" className="chat-header__left-img" />

                <div className="chat-user">
                    <h4>Samuel Green</h4>
                    <p>Available to walk</p>
                </div>
            </div>


            <BiDotsVerticalRounded role="button" className="chat-header__menu" />



        </div>
    )
}
