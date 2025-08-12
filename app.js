let tg = window.Telegram.WebApp;
tg.expand();

const productsAndroid = [
    { title: "Софт 1", desc: "Без описания", img: "" },
    { title: "Софт 2", desc: "Без описания", img: "" },
    { title: "Софт 3", desc: "Без описания", img: "" },
    { title: "Софт 4", desc: "Без описания", img: "" },
    { title: "Софт 5", desc: "Без описания", img: "" },
    { title: "Софт 6", desc: "Без описания", img: "" }
];

const productsIOS = [
    { title: "Софт 1", desc: "Без описания", img: "" },
    { title: "Софт 2", desc: "Без описания", img: "" },
    { title: "Софт 3", desc: "Без описания", img: "" }
];

function renderProducts(listId, products) {
    const container = document.getElementById(listId);
    products.forEach(p => {
        const item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `
            <img src="${p.img}" alt="${p.title}">
            <div class="title">${p.title}</div>
            <div class="desc">${p.desc}</div>
            <div class="stars">★★★★★</div>
            <div class="btn-group">
                <button onclick="buyProduct('${p.title}')">Купить</button>
                <button onclick="moreProduct('${p.title}')">Подробнее</button>
            </div>
        `;
        container.appendChild(item);
    });
}

function buyProduct(title) {
    tg.openTelegramLink("https://t.me/xekcao");
}

function moreProduct(title) {
    tg.openTelegramLink("https://t.me/xekcao");
}

renderProducts("android-list", productsAndroid);
renderProducts("ios-list", productsIOS);
