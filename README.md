Это небольшое приложения для нахождения количества вхождений задач Jira в xls документе.

Для отбора ссылок на задачи Jira используется регулярное выражение `/jira+[\w/.]+[\w-]+[\d]+/gim`

Для работы с xls файлами используется библиотека [**SheetJS**](https://github.com/SheetJS/sheetjs/blob/master/README.md)