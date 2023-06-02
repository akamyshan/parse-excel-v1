// import { render } from "@testing-library/react";
import React, { useState } from "react";
import { read, utils } from "xlsx";
import { DownloadXls } from "../Components/DownloadXls";

import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { ShowTable } from "../Components/ShowTable";

export const ParseExcel = () => {
    const [fileName, setFileName] = useState();
    const [showResult, setShowResult] = useState();
    const regexp = /jira+[\w/.]+[\w-]+[\d]+/gim;

    let resultParse = [];

    const handelFile = async (e) => {
        const file = e.target.files[0];
        setFileName(file.name);

        const data = await file.arrayBuffer();
        const workbook = read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        const jData = utils.sheet_to_json(worksheet, {
            header: 1,
            defval: "",
        });

        for (let i = 1; i < jData.length; i++) {
            if (jData[i][0].match(regexp)) {
                resultParse.push(jData[i][0].match(regexp));
            }
        }
        // 1. Если несколько тасок в одной строке,
        // то сохранять не массивом в массиве,
        // а отдельными элементами массива.
        // flat(Infinity) - если нужно бесонечную вложенность "поднять"
        resultParse = resultParse.flat();

        // 2. подсчитать количество повторов

        let countItems = resultParse.reduce((result, item) => {
            if (typeof result[item] !== "undefined") {
                result[item]++;
            } else result[item] = 1;
            return result;
        }, {});

        console.log("countItems = ", countItems);

        // Преобразуем обьект countItems в массив массивов
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#polyfill
        console.log(
            "Object.entries(countItems) = ",
            Object.entries(countItems)
        );

        setShowResult(Object.entries(countItems).sort((a, b) => b[1] - a[1]));
    };

    return (
        <div>
            <Header />
            <div className="content">
                <h1>ParseExcel</h1>
                {fileName && (
                    <p>
                        FileName: <span>{fileName}</span>
                    </p>
                )}
                <input
                    type="file"
                    name="file"
                    id="file"
                    className="inputfile"
                    onChange={(e) => handelFile(e)}
                />
                <label htmlFor="file">Choose a file</label>

                {showResult && (
                    <div>
                        <ShowTable row={showResult} />
                        <p>Count = {showResult.length}</p>
                        <button
                            onClick={() => DownloadXls(showResult, fileName)}
                        >
                            Download me
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};
