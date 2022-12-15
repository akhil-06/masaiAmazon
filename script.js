// async function sum() {
//     console.log("sum");
//     return Promise.resolve(1);
// }

// sum().then(function (result) {
//     console.log(result);
// })

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise is Resolved");
//   }, 5000);
// });

// let promise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise is Resolved");
//   }, 2000);
// });

// //async function
// async function asyncFunc() {
//   try {
//     //wait for the promise for 5 sec
//     let result = await promise;
//     console.log(result);
//     console.log("hello");
//     //wait for 2 sec
//     let result2 = await promise2;
//     console.log(result2);
//     console.log("result2");
//   } catch (error) {
//     console.log(error);
//   }
// }

// asyncFunc();

let url = "https://fakestoreapi.com/products/";

async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    append(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();

function append(data) {

  data.sort(function (a, b) {
    return a.price - b.price;
  });
    

  data = data.filter(function (el) {
    return (
      el.category === "men's clothing" || el.category === "women's clothing"
    );
  });
  data.forEach(function (el) {
    let img = document.createElement("img");
    img.src = el.image;

    let p = document.createElement("p");
    p.innerText = el.title;

    let price = document.createElement("p");
    price.innerText = el.price;

    let div = document.createElement("div");
    div.append(img, p, price);
    container.append(div);
  });
}
