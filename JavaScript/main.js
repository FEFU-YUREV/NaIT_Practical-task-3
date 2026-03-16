const tableHeaders = [
    "Бренд", "Модель", "CPU модель", "Ядра", "Потоки", "Буст (ГГц)", "RAM (ГБ)",
    "Хранилище (ГБ)", "GPU", "Экран (дюймы/разрешение/Гц)", "Вес (кг)", "Батарея (Вт⋅ч)",
    "Цена", "Балл производительности", "Год"
];

const renderLaptopTable = (rows) => {
    clearTable("list");
    createTable(rows, "list", tableHeaders);
};

const ensureTableId = () => {
    const table = document.querySelector(".table table");
    if (!table) {
        return null;
    }

    table.id = "list";
    return table;
};

const getFilterForm = () => {
    const brandInput = document.getElementById("brand");
    return brandInput ? brandInput.closest("form") : null;
};

document.addEventListener("DOMContentLoaded", () => {
    const table = ensureTableId();
    const filterForm = getFilterForm();

    if (!table || !filterForm) {
        return;
    }

    const findButton = document.getElementById("find");
    const sortButton = document.getElementById("sort");
    const clearButton = document.getElementById("clearFilter");
    const firstSort = document.getElementById("task_1");
    const secondSort = document.getElementById("task_2");

    renderLaptopTable(laptops);
    updateSortControlsState();

    if (findButton) {
        findButton.addEventListener("click", () => {
            resetSortControls();
            const filtered = filterData(laptops, filterForm);
            renderLaptopTable(filtered);
        });
    }

    if (sortButton) {
        sortButton.addEventListener("click", () => {
            const filtered = filterData(laptops, filterForm);
            const sorted = sortData(filtered);
            renderLaptopTable(sorted);
        });
    }

    if (clearButton) {
        clearButton.addEventListener("click", () => {
            filterForm.reset();
            resetSortControls();
            renderLaptopTable(laptops);
        });
    }

    if (firstSort) {
        firstSort.addEventListener("change", updateSortControlsState);
    }

    if (secondSort) {
        secondSort.addEventListener("change", updateSortControlsState);
    }
});
