import "./Styles/Footer.css";
import githubMarkUrl from "/src/assets/github-mark.png";

function Footer() {
    return (
        <footer>
            <ul>
                <li>© {new Date().getFullYear()} akamyshan</li>
                <li>
                    <a
                        href="https://github.com/akamyshan/parse-excel-v1"
                        className="footer-link"
                        alt="GitHub link"
                    >
                        <img
                            src={githubMarkUrl}
                            width="20"
                            height="20"
                            alt="GitHub logo"
                        ></img>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export { Footer };
