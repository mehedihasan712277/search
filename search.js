let product = [
    {
        Id: 1,
        Name: "Mehedi",
        CG: 3.4
    },
    {
        Id: 4,
        Name: "Mim",
        CG: 3.13
    },
    {
        Id: 7,
        Name: "Sabbir",
        CG: 3.13
    }
]

function match(search) {
    let matched;
    let checked = new RegExp(search, "i");
    for (const ele of product) {
        if (checked.test(ele.Name)) {
            return ele;
        } else {
            return "Not found";
        }
    }
}
console.log(match("MEHEDI"));