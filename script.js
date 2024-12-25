let products = [
    {
        id: 1,
        name: "Samsung Galaxy S24 Ultra",
        category: "Telefonlar",
        price: 1499.99,
        stock: 100,
    },
    {
        id: 2,
        name: "Apple iPhone 16 Pro Max",
        category: "Telefonlar",
        price: 1399.99,
        stock: 200,
    },
    {
        id: 3,
        name: "BWM X7",
        category: "Mashinalar",
        price: 120000.99,
        stock: 300,
    },
    {
        id: 4,
        name: "Mersedes Benz S600",
        category: "Mashinalar",
        price: 40900.99,
        stock: 400,
    },
    {
        id: 5,
        name: "HP Pavilion 15",
        category: "Kompyuterlar",
        price: 500,
        stock: 500,
    },
];

const getProductById = function (s) {
    for (let i of products) {
        if (s === i.id) {
            return i;
        }
    }
};
const res = getProductById(1);
console.log(res);

const addProductById = function (name, category, price, stock) {
    products.push({ id: products.length + 1, name, category, price, stock });
};
addProductById("Mersedes", "mashina", "65464", "5454");
console.log(products);

function deleteProduct(id) {
    let n = [];

    for (let item of products) {
        if (item.id === id) {
            continue;
        } else {
            n.push(item);
        }
    }
    products = n;
}
deleteProduct(5);
console.log(products);

function searchProduct(n) {
    let arr = [];
    for (let i of products) {
        let search = i.name.includes(n);
        if (search) {
            arr.push(i);
        }
    }
    return arr;
}
const res2 = searchProduct("Sam");
console.log(res2);

function showMenu() {
    let choice;
    do {
        choice = +prompt(`1. Show all.
2. Show with id.
3. Search.
4. Delate all.
`);

        switch (choice) {
            case 1:
                {
                    let str = "";
                    for (let item of products) {
                        str +=
                            item.name +
                            "" +
                            item.price +
                            " " +
                            item.category +
                            " " +
                            item.stock +
                            "\n";
                    }
                    alert(str);
                }
                break;

            case 2:
                {
                    let str = "";
                    for (let item of products) {
                        str +=
                            item.id + " " + item.name + " " + item.price + "\n";
                    }
                    alert(str);
                }
                break;

            case 3:
                {
                    let str = prompt("enter the name:");
                    console.log(str);
                    let res = searchProduct(str);
                    console.log(res);
                    let inp = "";
                    for (let item of products) {
                        str += item.id + " " + item.price + "\n";
                    }
                    alert(inp);
                }
                break;
            case 4:
                {
                    {
                        products.length = 0;
                        alert("All products have been deleted.");
                    }
                }
                break;
        }
    } while (choice !== 5);
}
showMenu();
