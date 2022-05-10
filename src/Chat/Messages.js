function Messages({mess}) {

  if (mess !== "") {
    let mbox = [];
    let mboxc = JSON.parse(mess);

    for (let i = 0; i < mboxc.length; i++) {
      mbox.push(
        <div className="message" id={i}>
          <p className="un">{mboxc[i].username}:</p>
          <p className="ms">{mboxc[i].message}</p>
        </div>
      );
    }
    return mbox;
  }
  return "";
  
}

export default Messages;