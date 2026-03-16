const correspond = {
    brand: "brand",
    model: "model_input",
    cpu: "CPU",
    cores: ["kernel_min", "kernel_max"],
    threads: ["threads_min", "threads_max"],
    boost: ["boost_min", "boost_max"],
    ram: ["RAM_min", "RAM_max"],
    storage: ["storage_min", "storage_max"],
    gpu: "GPU",
    screen: "screen",
    weight: ["weight_min", "weight_max"],
    battery: ["battery_min", "battery_max"],
    price: ["price_min", "price_max"],
    score: ["performance", "performance_max"],
    year: ["year_min", "year_max"]
};

const numericDefaults = {
    kernel_min: -Infinity,
    kernel_max: Infinity,
    threads_min: -Infinity,
    threads_max: Infinity,
    boost_min: -Infinity,
    boost_max: Infinity,
    RAM_min: -Infinity,
    RAM_max: Infinity,
    storage_min: -Infinity,
    storage_max: Infinity,
    weight_min: -Infinity,
    weight_max: Infinity,
    battery_min: -Infinity,
    battery_max: Infinity,
    price_min: -Infinity,
    price_max: Infinity,
    performance: -Infinity,
    performance_max: Infinity,
    year_min: -Infinity,
    year_max: Infinity
};

const parseNumberInput = (value, fallback) => {
    const normalized = value.trim().replace(",", ".");
    if (normalized === "") {
        return fallback;
    }

    const num = Number(normalized);
    return Number.isFinite(num) ? num : fallback;
};

const parsePriceValue = (value) => {
    if (typeof value === "number") {
        return value;
    }

    const normalized = String(value).replace(/[^\d.,-]/g, "").replace(",", ".");
    const num = Number(normalized);
    return Number.isFinite(num) ? num : NaN;
};

const dataFilter = (dataForm) => {
    const dictFilter = {};

    for (const item of dataForm.elements) {
        if (!item.id) {
            continue;
        }

        if (Object.prototype.hasOwnProperty.call(numericDefaults, item.id)) {
            dictFilter[item.id] = parseNumberInput(item.value, numericDefaults[item.id]);
        } else {
            dictFilter[item.id] = item.value.trim().toLowerCase();
        }
    }

    return dictFilter;
};

const filterData = (data, dataForm) => {
    const datafilter = dataFilter(dataForm);

    return data.filter((item) => {
        let result = true;

        Object.entries(item).forEach(([key, val]) => {
            if (!result) {
                return;
            }

            if (typeof correspond[key] === "string") {
                const filterValue = datafilter[correspond[key]] || "";
                result = String(val).toLowerCase().includes(filterValue);
                return;
            }

            const [fromKey, toKey] = correspond[key];
            const low = datafilter[fromKey];
            const high = datafilter[toKey];
            const value = key === "price" ? parsePriceValue(val) : Number(val);

            result = value >= low && value <= high;
        });

        return result;
    });
};

const filterTable = (data, idTable, dataForm) => {
    const tableFilter = filterData(data, dataForm);

    clearTable(idTable);
    createTable(tableFilter, idTable, Object.keys(data[0]));

    return tableFilter;
};

const clearFilter = (data, idTable, dataForm) => {
    dataForm.reset();
    clearTable(idTable);
    createTable(data, idTable);
};
