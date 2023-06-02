import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { ParseExcel } from "./Pages/ParseExcel";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/parse-excel-v1/" element={<Home />} />
            <Route
                path="/parse-excel-v1/parse-excel"
                element={<ParseExcel />}
            />
        </Routes>
    );
}

export default App;
