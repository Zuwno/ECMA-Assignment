const product = [
  { id: "1", name: "Name 1", address: "Ha Noi 1" },
  { id: "2", name: "Name 2", address: "Ha Noi 2" },
  { id: "3", name: "Name 3", address: "Ha Noi 3" },
];

// const showProduct = function(data)
// {
// let result = "";
// for (let i = 0; i < data.length ; i++  )
// {
// result += `<div> ${data[i].name} </div>`
// }
// return result;
// }

// For...in
// const showProduct = function(data)
// {
// let result = "";
// for (let i in data  )
// {
// result += `<div> ${data[i].name} </div>`
// }
// return result;
// }

// For...of
// const showProduct = function(data)
// {
//     if (!Array.isArray(data)) {
//         return "";

//     }
// let result = "";

// for (let item of data  )
// {
// result += `<div> ${item.name} </div>`
// }
// return result;
// }

// ForEach
const showProduct = (data) => 
{
    if(!Array.isArray(data))
    {
        return "";
    }
    let result ="";
    data.forEach((item,index) => ( result += `<div> ${item.name} - ${index} </div>`))
    return result;
}

const app = document.querySelector("#app");
if (app) {
  app.innerHTML = showProduct(product);
}
