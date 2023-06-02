// import React from "react";
import { writeFile, utils } from "xlsx";

export const DownloadXls = (showResult, fileName) => {
    // Экспорт результата парсинга в файл

    fileName = fileName.split(".")[0]; // Убирается расширение файла, оставляем только имя файла.
    const fileNameXlsx = `result_${fileName}.xlsx`;
    const data = showResult;

    const ws_name = fileName;

    let wb = utils.book_new();
    let ws = utils.aoa_to_sheet(data);

    // add worksheet (ws) to workbook (wb)
    utils.book_append_sheet(wb, ws, ws_name);

    // write workbook
    writeFile(wb, fileNameXlsx);
};
