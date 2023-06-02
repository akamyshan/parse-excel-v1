import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const Home = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <h1>Home</h1>
                <p>
                    Это небольшое приложения для нахождения количества вхождений
                    задач Jira в xls документе.
                </p>
                <p>
                    Для отбора ссылок на задачи Jira используется регулярное
                    выражение `/jira+[\w/.]+[\w-]+[\d]+/gim`
                </p>
                <a href="/parse-excel">Let&lsquo;s go</a>
            </div>
            <Footer />
        </div>
    );
};
