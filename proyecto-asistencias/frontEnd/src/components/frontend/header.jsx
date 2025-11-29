import "../../assets/css/elements/divs.scss";

const Header = ({ title, username, usuarioIcon, iconUsername, logoutIcon }) => {
    return (
        <header>
            <div className={"header-div"}>
                {username && //Traer el nombre del usuario desde el backend
                    <img src={usuarioIcon} alt="user icon" className="header-user-icon" />
                }
                {/* El título de cada página se traerá de forma dinámica */}
                <h5 className="header-text">{title}</h5>
                {username &&
                    <div className="header-user-div">
                    <img src={iconUsername} alt="username icon" className="header-username-icon" />
                        <span className="header-user-text">Hola, {username}</span>
                        <button className="logout-button">
                        {/* Implementar función de logout desde el backend */}
                        <img src={logoutIcon} alt="logout icon" className="header-logout-icon" />
                        </button>
                    </div>
                }
            </div>
        </header>
    );
}

export default Header;