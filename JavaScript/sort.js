/*формируем массив для сортировки по двум уровням вида 
  [
    {column: номер столбца, по которому осуществляется сортировка, 
     direction: порядок сортировки (true по убыванию, false по возрастанию)
    }, 
    ...
   ]
*/
const createSortArr = (data) => {
    let sortArr = [];
    
    const sortSelects = data.getElementsByTagName('select');
    
    for (const item of sortSelects) {   
       // получаем номер выбранной опции
        const keySort = item.value;
        // в случае, если выбрана опция Нет, заканчиваем формировать массив
        if (keySort == 0) {
            break;
        }
        // получаем порядок сортировки очередного уровня
        // имя флажка сформировано как имя поля SELECT и слова Desc
        const desc = document.getElementById(item.id + 'Desc').checked;
        // очередной элемент массива - по какому столбцу и в каком порядке сортировать 
        sortArr.push(
          {column: keySort - 1, 
           direction: desc}
        ); 
    }
    return sortArr; 
};

// сохраняем исходный порядок строк до первой сортировки
let initTableRows = {};

// сброс сортировки
const resetSort = (idTable, data, dataForm) => {
    // сбрасываем флажки формы сортировки
    dataForm.reset();

    // формируем поля сортировки как при загрузке страницы
    const sortSelects = dataForm.getElementsByTagName('select');
    for (const item of sortSelects) {
        item.innerHTML = "";
    }
    setSortSelects(data[0], dataForm);

    // восстанавливаем на странице таблицу до сортировки
    if (initTableRows[idTable]) {
        let table = document.getElementById(idTable);

        clearTable(idTable);
        table.append(initTableRows[idTable].header.cloneNode(true));

        let tbody = document.createElement('tbody');
        initTableRows[idTable].rows.forEach(item => {
            tbody.append(item.cloneNode(true));
        });
        table.append(tbody);

        delete initTableRows[idTable];
    }
}

const sortTable = (idTable, formData) => {
    //находим нужную таблицу
    let table = document.getElementById(idTable);
    
    // формируем управляющий массив для сортировки
    const sortArr = createSortArr(formData);
    
    // сортировать таблицу не нужно, во всех полях выбрана опция Нет
    // восстанавливаем порядок строк до сортировки
    if (sortArr.length === 0) {
        if (initTableRows[idTable]) {
            clearTable(idTable);
            table.append(initTableRows[idTable].header.cloneNode(true));

            let tbody = document.createElement('tbody');
            initTableRows[idTable].rows.forEach(item => {
                tbody.append(item.cloneNode(true));
            });
            table.append(tbody);

            delete initTableRows[idTable];
        }
        return false;
    }

    // преобразуем строки таблицы в массив 
    let rowData = Array.from(table.rows);
    
    // удаляем элемент с заголовками таблицы
    const headerRow = rowData.shift();

    // запоминаем начальное состояние таблицы до сортировки
    if (!initTableRows[idTable]) {
        initTableRows[idTable] = {
            header: headerRow.cloneNode(true),
            rows: rowData.map(item => item.cloneNode(true))
        };
    }

    // определяем, какие столбцы нужно сравнивать как числа
    const numericColumns = new Set();
    Array.from(headerRow.cells).forEach((cell, index) => {
        if (cell.innerHTML === "Год" || cell.innerHTML === "Высота") {
            numericColumns.add(index);
        }
    });
    
    //сортируем данные по всем уровням сортировки
    rowData.sort((first, second) => {
        for (let { column, direction } of sortArr) {
           const firstCell = first.cells[column].innerHTML;
           const secondCell = second.cells[column].innerHTML;
           let comparison = 0;

           // для Год и Высота сравниваем как числа, остальные как строки
           if (numericColumns.has(column)) {
               comparison = Number(firstCell) - Number(secondCell);
           } else {
               comparison = firstCell.localeCompare(secondCell);
           }
		      
           // учитываем направление сортировки
           if (comparison !== 0) {
             return (direction ? -comparison : comparison);
          }
        }
        return 0; 
    });
    
    //выводим отсортированную таблицу на страницу
    clearTable(idTable);
    table.append(headerRow);
	
	let tbody = document.createElement('tbody');
    rowData.forEach(item => {
        tbody.append(item);
    });
	table.append(tbody);
}
