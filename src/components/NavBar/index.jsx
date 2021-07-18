import { Link } from 'react-router-dom';
import './index.css';

function NavBar(props){
    const list = props.list;
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark color">
        <div className="container-fluid">
          <a className="navbar-brand textcolor si" href="/">QuizTaker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {list.map((litem)=>{
                    return (
                        <li className="nav-item">
                            <Link className="nav-link textcolor ho" to={litem.url}>{litem.name}</Link>
                        </li>
                    );
                })}
            </ul>
            <span className="navbar-text">
                <a className="nav-link textcolor ho" href="/">LogOut</a>
            </span>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;