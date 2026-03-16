const laptops = [
    {
        brand: "Apple", model: "MacBook Pro M4 13", cpu: "Apple M4", cores: 10, threads: 10,
        boost: 4.4, ram: 16, storage: 512, gpu: "M4 10-core GPU", screen: "14.2/3024x1964/120",
        weight: 1.55, battery: 72.4, price: "$1599", score: 85, year: 2024
    },
    {
        brand: "ASUS", model: "ROG Zephyrus G14", cpu: "AMD Ryzen 9 8945HS", cores: 8, threads: 16,
        boost: 5.2, ram: 32, storage: 1024, gpu: "RTX 4070 90W", screen: "14/2880x1800/120",
        weight: 1.5, battery: 73, price: "$2099", score: 88, year: 2024
    },
    {
        brand: "Apple", model: "MacBook Air M4 13", cpu: "Apple M4", cores: 10, threads: 10,
        boost: 4.4, ram: 16, storage: 512, gpu: "M4 8-core GPU", screen: "13.6/2560x1664/60",
        weight: 1.24, battery: 53.8, price: "$1199", score: 82, year: 2025
    },
    {
        brand: "Huawei", model: "MateBook X Pro Ultra", cpu: "Intel Core Ultra 9 185H", cores: 16, threads: 22,
        boost: 5.1, ram: 32, storage: 2048, gpu: "Intel Arc Graphics", screen: "14.2/3120x2080/120",
        weight: 0.98, battery: 70, price: "$2199", score: 80, year: 2024
    },
    {
        brand: "MSI", model: "Stealth 16 AI Studio", cpu: "Intel Core Ultra 9 185H", cores: 16, threads: 22,
        boost: 5.1, ram: 32, storage: 1024, gpu: "RTX 4070 105W", screen: "16/2560x1600/240",
        weight: 1.99, battery: 99.9, price: "$2799", score: 86, year: 2024
    },
    {
        brand: "HP", model: "Spectre x360 14", cpu: "Intel Core Ultra 7 155H", cores: 16, threads: 22,
        boost: 4.8, ram: 32, storage: 2048, gpu: "Intel Arc Graphics", screen: "14/2880x1800/120",
        weight: 1.45, battery: 68, price: "$1899", score: 75, year: 2024
    },
    {
        brand: "Lenovo", model: "ThinkPad X1 Carbon Gen 12", cpu: "Intel Core Ultra 7 155H", cores: 16, threads: 22,
        boost: 4.8, ram: 32, storage: 1024, gpu: "Intel Arc Graphics", screen: "14/2880x1800/120",
        weight: 1.08, battery: 57, price: "$2299", score: 78, year: 2024
    },
    {
        brand: "Dell", model: "XPS 13 9340", cpu: "Intel Core Ultra 7 155H", cores: 16, threads: 22,
        boost: 4.8, ram: 32, storage: 1024, gpu: "Intel Arc Graphics", screen: "13.4/2560x1600/120",
        weight: 1.17, battery: 55, price: "$1799", score: 76, year: 2024
    },
    {
        brand: "Microsoft", model: "Surface Laptop Studio 2", cpu: "Intel Core i7-13700H", cores: 14, threads: 20,
        boost: 5.0, ram: 32, storage: 1024, gpu: "RTX 4060 80W", screen: "14.4/2400x1600/120",
        weight: 1.98, battery: 58, price: "$2800", score: 84, year: 2023
    },
    {
        brand: "Razer", model: "Blade 14", cpu: "AMD Ryzen AI 9 365", cores: 10, threads: 20,
        boost: 5.0, ram: 32, storage: 1024, gpu: "RTX 5070 140W", screen: "14/2560x1440/240",
        weight: 1.8, battery: 68.1, price: "$2999", score: 90, year: 2025
    },
    {
        brand: "ASUS", model: "ROG Zephyrus G16", cpu: "Intel Core Ultra 9 275HX", cores: 24, threads: 32,
        boost: 5.8, ram: 32, storage: 1024, gpu: "RTX 5080 155W", screen: "16/2560x1600/240",
        weight: 1.85, battery: 90, price: "$3899", score: 95, year: 2025
    },
    {
        brand: "HP", model: "Omen Max 16", cpu: "Intel Core Ultra 9 275HX", cores: 24, threads: 32,
        boost: 5.8, ram: 32, storage: 2048, gpu: "RTX 5080 155W", screen: "16/3840x2400/120",
        weight: 2.3, battery: 83, price: "$3159", score: 93, year: 2025
    },
    {
        brand: "Lenovo", model: "Legion 7i Gen 9", cpu: "Intel Core i9-14900HX", cores: 24, threads: 32,
        boost: 5.8, ram: 32, storage: 1024, gpu: "RTX 4080 175W", screen: "16/2560x1600/240",
        weight: 2.4, battery: 99.9, price: "$2899", score: 91, year: 2024
    },
    {
        brand: "MSI", model: "Raider 18 HX", cpu: "Intel Core i9-14900HX", cores: 24, threads: 32,
        boost: 5.8, ram: 64, storage: 2048, gpu: "RTX 4090 175W", screen: "18/2560x1600/240",
        weight: 3.1, battery: 99.9, price: "$4299", score: 97, year: 2024
    },
    {
        brand: "Alienware", model: "Area-51m R2", cpu: "Intel Core i9-14900HX", cores: 24, threads: 32,
        boost: 5.8, ram: 64, storage: 2048, gpu: "RTX 4090 175W", screen: "17.3/2560x1440/360",
        weight: 4.1, battery: 87, price: "$4999", score: 96, year: 2024
    },
    {
        brand: "Acer", model: "Predator Triton 16", cpu: "Intel Core i9-13900H", cores: 14, threads: 20,
        boost: 5.4, ram: 32, storage: 1024, gpu: "RTX 4070 140W", screen: "16/2560x1600/165",
        weight: 2.1, battery: 89.9, price: "$2399", score: 87, year: 2023
    },
    {
        brand: "Gigabyte", model: "Aorus 17X", cpu: "Intel Core i9-13900HX", cores: 24, threads: 32,
        boost: 5.8, ram: 32, storage: 1024, gpu: "RTX 4080 175W", screen: "17.3/2560x1440/240",
        weight: 2.8, battery: 99, price: "$3199", score: 92, year: 2023
    },
    {
        brand: "Apple", model: "MacBook Pro M4 Pro 16", cpu: "Apple M4 Pro", cores: 14, threads: 14,
        boost: 4.5, ram: 24, storage: 512, gpu: "M4 Pro 20-core GPU", screen: "16.2/3456x2234/120",
        weight: 2.15, battery: 100, price: "$2499", score: 89, year: 2024
    },
    {
        brand: "Framework", model: "Laptop 16", cpu: "AMD Ryzen 7 7840HS", cores: 8, threads: 16,
        boost: 5.1, ram: 32, storage: 1024, gpu: "AMD Radeon RX 7700S", screen: "16/2560x1600/165",
        weight: 2.4, battery: 85, price: "$2399", score: 81, year: 2024
    },
    {
        brand: "Origin", model: "EON17-X", cpu: "Intel Core i9-13900K", cores: 24, threads: 32,
        boost: 5.8, ram: 64, storage: 2048, gpu: "RTX 4090 175W", screen: "17.3/3840x2160/120",
        weight: 4.5, battery: 92, price: "$5999", score: 98, year: 2023
    },
    {
        brand: "Samsung", model: "Galaxy Book4 Ultra", cpu: "Intel Core Ultra 9 185H", cores: 16, threads: 22,
        boost: 5.1, ram: 32, storage: 1024, gpu: "RTX 4070 120W", screen: "16/2880x1800/120",
        weight: 1.8, battery: 76, price: "$2799", score: 85, year: 2024
    },
    {
        brand: "LG", model: "Gram Style 16", cpu: "Intel Core Ultra 7 155H", cores: 16, threads: 22,
        boost: 4.8, ram: 32, storage: 1024, gpu: "Intel Arc Graphics", screen: "16/3200x2000/90",
        weight: 1.28, battery: 77, price: "$1899", score: 74, year: 2024
    },
    {
        brand: "Schenker", model: "XMG Ultra 17", cpu: "Intel Core i9-13900HX", cores: 24, threads: 32,
        boost: 5.8, ram: 64, storage: 2048, gpu: "RTX 4090 175W", screen: "17.3/2560x1440/240",
        weight: 3.2, battery: 97, price: "$4599", score: 96, year: 2023
    },
    {
        brand: "Eurocom", model: "Sky X9E3", cpu: "Intel Core i9-13900K", cores: 24, threads: 32,
        boost: 5.8, ram: 128, storage: 4096, gpu: "RTX 4090 175W", screen: "17.3/3840x2160/144",
        weight: 5.1, battery: 89, price: "$7999", score: 99, year: 2023
    },
    {
        brand: "System76", model: "Serval WS", cpu: "Intel Core i9-13900HX", cores: 24, threads: 32,
        boost: 5.8, ram: 64, storage: 2048, gpu: "RTX 4080 175W", screen: "17.3/1920x1080/144",
        weight: 3.8, battery: 73, price: "$3999", score: 90, year: 2023
    }
];
