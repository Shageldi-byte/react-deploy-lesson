import "./App.css";
import AnotherComp from "./component/AnotherComp";
import ChangeColor from "./component/ChangeColor";
import Login from "./component/Login";
import Profile from "./component/Profile";
import i18n from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [chats, setChats] = useState([]);
  // const [input,setInput]=useState('');
  const {t} = useTranslation();
  
  useEffect(() => {
    changeLanguage(window.localStorage.getItem('language'))
    // function onConnect() {
    //   setIsConnected(true);
    // }

    // function onDisconnect() {
    //   setIsConnected(false);
    // }

    // function onChat(value) {
    //   setChats(previous => [...previous, value]);
    // }

    // socket.on('connect', onConnect);
    // socket.on('disconnect', onDisconnect);
    // socket.on('onChat', onChat);

    // return () => {
    //   socket.off('connect', onConnect);
    //   socket.off('disconnect', onDisconnect);
    //   socket.off('onChat', onChat);
    // };
  }, []);


  function changeLanguage(lng){
    i18n.changeLanguage(lng);
    window.localStorage.setItem('language',lng)
  }

  // function sendToChat(){
  //   socket.emit('onChat',{
  //     message: input,
  //     username: 'shageldi'
  //   })
  // }
  return (
    <div className="App">
      <button onClick={()=>changeLanguage('en')}>EN</button>
      <button onClick={()=>changeLanguage('ru')}>RU</button>
      <button onClick={()=>changeLanguage('tm')}>TM</button>
      <AnotherComp/>
      <ChangeColor/>
      <Login/>
      <Profile/>
      <h2>{t('hello')}</h2>
        {/* <h4>{isConnected?'Connected':'Disconnected'}</h4>
        <input value={input} onChange={e=>setInput(e.target.value)} type={'text'} placeholder={'Chat'}/>
        <button onClick={sendToChat}>Send</button>
        {
          chats.map((item,i)=>{
            return(
              <div>
                <h2>Username: {item.username}</h2>
                <p>Message: {item.message}</p>
                <hr/>
              </div>
            )
          })
        } */}
    </div>
  );
}

export default App;
