import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="inner">
        <div className="logo">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#2b6cb0"/><path d="M6 12h12M6 8h12M6 16h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>курсы и штуки</span>
        </div>

        <nav className="nav">
          <Link to="/">главная</Link>
          <Link to="/courses">курсы</Link>
          <Link to="/profile">профиль</Link>
        </nav>

        <div className="header-right">
          {user ? (
            <>
              <span className="small">привет, <b>{user.login}</b></span>
              <button className="btn ghost" onClick={onLogout}>выйти</button>
            </>
          ) : (
            <Link to="/login" className="btn">войти</Link>
          )}
        </div>
      </div>
    </header>
  );
}