const sortFields = [
    "brand", "model", "cpu", "cores", "threads", "boost", "ram", "storage",
    "gpu", "screen", "weight", "battery", "price", "score", "year"
];

const numericSortFields = new Set([
    "cores", "threads", "boost", "ram", "storage", "weight", "battery", "price", "score", "year"
]);

const sortControls = [
    { selectId: "task_1", descId: "yes_or_no_1" },
    { selectId: "task_2", descId: "yes_or_no_2" },
    { selectId: "task_3", descId: "yes_or_no_3" }
];

const parseSortPrice = (value) => {
    if (typeof value === "number") {
        return value;
    }

    const normalized = String(value).replace(/[^\d.,-]/g, "").replace(",", ".");
    const num = Number(normalized);
    return Number.isFinite(num) ? num : NaN;
};

const normalizeSortValue = (field, value) => {
    if (field === "price") {
        return parseSortPrice(value);
    }

    if (numericSortFields.has(field)) {
        return Number(value);
    }

    return String(value);
};

const createSortArr = () => {
    const result = [];

    for (const control of sortControls) {
        const select = document.getElementById(control.selectId);
        const desc = document.getElementById(control.descId);

        if (!select || !desc) {
            continue;
        }

        const keySort = Number(select.value);
        if (keySort === 0) {
            break;
        }

        result.push({
            column: keySort - 1,
            direction: desc.checked
        });
    }

    return result;
};

const sortData = (data) => {
    const sortArr = createSortArr();
    if (sortArr.length === 0) {
        return [...data];
    }

    return [...data].sort((first, second) => {
        for (const { column, direction } of sortArr) {
            const field = sortFields[column];
            const left = normalizeSortValue(field, first[field]);
            const right = normalizeSortValue(field, second[field]);

            let comparison = 0;
            if (numericSortFields.has(field)) {
                comparison = left - right;
            } else {
                comparison = left.localeCompare(right, "ru", { sensitivity: "base", numeric: true });
            }

            if (comparison !== 0) {
                return direction ? -comparison : comparison;
            }
        }

        return 0;
    });
};

const resetSortControls = () => {
    for (const control of sortControls) {
        const select = document.getElementById(control.selectId);
        const desc = document.getElementById(control.descId);

        if (select) {
            select.value = "0";
        }

        if (desc) {
            desc.checked = false;
        }
    }

    updateSortControlsState();
};

const updateSortControlsState = () => {
    const first = document.getElementById("task_1");
    const second = document.getElementById("task_2");
    const third = document.getElementById("task_3");

    if (!first || !second || !third) {
        return;
    }

    second.disabled = Number(first.value) === 0;
    if (second.disabled) {
        second.value = "0";
    }

    third.disabled = second.disabled || Number(second.value) === 0;
    if (third.disabled) {
        third.value = "0";
    }
};
