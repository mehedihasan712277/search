//version 1.0----------------------------------------

// let txt = "I am Mehedi";
// let x = txt.split(" ");
// function myF() {
//     let item = "mitu";
//     for (let i = 0; i < x.length; i++) {
//         if (x[i].toLowerCase() == item.toLowerCase()) {
//             console.log("ok");
//         } else {
//             console.log("not ok");
//         }
//     }
// }
// myF()

//version 1.1----------------------------------------

// let x = document.getElementById("txt").innerHTML;
// let y = x.replace(/[^\w\s]|_/g, "");
// let a = y.replace(/\n/g, "");
// // y = x.replace(/ /g, "");
// let z = a.split(" ");
// console.log(z);

// function myF() {
//     let item = document.getElementById("input").value;
//     console.log(item);
//     document.getElementById("display").innerHTML = "not ok"
//     for (let i = 0; i < z.length; i++) {
//         if (z[i].toLowerCase() == item.toLowerCase()) {
//             document.getElementById("display").innerHTML = z[i];
//             break;
//         }
//     }
// }


//version 1.2-------------------------------------------


let x = document.getElementById("txt").innerHTML;
let y = x.replace(/[^\w\s]|_/g, "");
let a = y.replace(/\n/g, "");
let z = a.split(" ");
console.log(z);

function myF() {
    let item = document.getElementById("input").value;
    let output = [];
    console.log(item);
    document.getElementById("display").innerHTML = "not ok"
    for (let i = 0; i < z.length; i++) {
        if (z[i].toLowerCase().includes(item.toLowerCase())) {
            output.push(z[i]);
        }
    }
    if (output.length != 0) {
        document.getElementById("display").innerHTML = output.join(",");
    } else {
        document.getElementById("display").innerHTML = "Not Found";
    }
}

function vanish() {
    document.getElementById("display").innerHTML = "";
}