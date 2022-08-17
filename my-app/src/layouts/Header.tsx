import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header: React.FC = ()=>{
    const isAuth = useSelector((state: any) => state.userReducer.currentUser);
    const handleLogout = ()=>{
        document.location.href = "/"
    }
    
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
          {isAuth && <li><Link to="/profile" className="nav-link px-2 link-dark">Profile</Link></li>}
        </ul>
  
        <div className="col-md-3 text-end">
        {!isAuth ?
          <Link to="/login"><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>:
          <button type="button" onClick={handleLogout} className="btn btn-outline-primary me-2">Logout</button>}
        </div>
      </header>
    )
}