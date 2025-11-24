import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div className="container">
      <div className="card" style={{padding:28}}>
        <h1>добро пожаловать</h1>
        <p className="small">очень крутое описание</p>
        <div style={{marginTop:18, display:'flex', gap:12}}>
          <Link to="/courses"><button className="btn">посмотреть курсы</button></Link>
          <Link to="/profile"><button className="btn ghost">профиль</button></Link>
        </div>
      </div>
    </div>
  );
}