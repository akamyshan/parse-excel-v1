import "./Styles/Header.css";

function Header() {
    return (
        <header>
            <img
                src="/src/assets/favicon_filter.png"
                width="50"
                height="50"
                alt="logo"
            ></img>
            <a href="/parse-excel-v1/" className="header-link" alt="Home">
                Home
            </a>
            <a
                href="/parse-excel-v1/parse-excel"
                className="header-link"
                alt="ParseExcel"
            >
                ParseExcel
            </a>
            <span className="empty"></span>
            <nav>
                <a
                    href="https://github.com/akamyshan/parse-excel-v1"
                    className="header-link github-link"
                    alt="GitHub link"
                >
                    <img
                        src="/src/assets/github-mark.png"
                        width="20"
                        height="20"
                        alt="GitHub logo"
                    ></img>
                    GitHub
                </a>
            </nav>
        </header>
    );
}

export { Header };
