import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/components/header.scss";

export default function Header() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("email");

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("senha");
        navigate("/AT-Desenvolvimento-Web-com-React/signin");
    };

    return (
        <header className="header">
            <div className="header__logo">
                <h1>{t("app_title")}</h1>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to="/AT-Desenvolvimento-Web-com-React/" className="header__nav-link">
                            {t("home")}
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/AT-Desenvolvimento-Web-com-React/settings" className="header__nav-link">
                            {t("settings")}
                        </Link>
                    </li>
                    {isAuthenticated && (
                        <li className="header__nav-item">
                            <button className="header__nav-link header__logout-btn" onClick={handleLogout}>
                                {t("logout")}
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
