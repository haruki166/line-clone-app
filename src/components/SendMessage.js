import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { create } from "@mui/material/styles/createTransitions";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SendMessage = () => {
  const [message, setMessage] = useState();

  const sendMessage = (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser; //今ログインしているユーザーの情報（uid,photoURL）を持ってくる

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), //エンターを押した時の時間を取得することができる
    });

    setMessage("");
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            type="text"
            placeholder="メッセージを入力してください"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
