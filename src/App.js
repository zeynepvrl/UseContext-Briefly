import './App.css';
import AuthContext from './context/auth-context';          //auth-context context yapısının oluşturulduğu, paylaşılacak propsların şekillendirildiği,belirtildiği yer,
import Auth from './Auth';                                 //App.js bu şekillendirilen propslara değer atanılan, işlevlerinin belirlendiği ve context yapısını kullacak komponent için provider edildiği yer 
import { useState } from 'react';                          //Auth.js bu propsların kullanıldığı yer, html etiketleri içersinde örneğin

function App() {
  const [logi, setlogi] = useState(false)
  const authlogin=()=>{
    setlogi(true);
  }
  return (
    <div>
      <AuthContext.Provider value={{status:logi , login:authlogin}}>
        <Auth/>          
      </AuthContext.Provider>
    </div>
  );
}

export default App;
// import ve provider işlemleri index.js de App componentine yapılsaydı, veriler bütün projede doğrudan erişilebilir olurdu
// Şimdilik Context in geçerli olduğu tek component Auth.js
// Auth.j de context i kullanmak için useContext oluşturulur
