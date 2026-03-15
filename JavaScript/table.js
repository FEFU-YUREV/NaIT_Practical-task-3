const createTable = (data, idTable, headers = []) => {
    const table = document.getElementById(idTable);
    const header = data.length > 0 ? Object.keys(data[0]) : headers;
   
    /* создание шапки таблицы */
    const headerRow = createHeaderRow(header);
    table.append(headerRow);
	
    if (data.length === 0) return;

    /* создание тела таблицы */
	  const bodyRows = createBodyRows(data);
    table.append(bodyRows);
};

const createHeaderRow = (headers) => {
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerHTML = header;
        tr.append(th);
    });
    return tr;
};

const createBodyRows = (data) => {
    const tbody = document.createElement('tbody');

    data.forEach(item => {
        const tr = document.createElement('tr');

        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.innerHTML = value;
            tr.append(td);
        });

        tbody.append(tr);
    });

    return tbody;
};

const clearTable = (idTable) => {
	const table = document.getElementById(idTable);
	if (!table) return;
	table.innerHTML = ''
}
