// Destructoring Object
// const person = {
//     name: "Phong",
//     age: 20,
//     address: {
//         city: "Hà Nội",
//         state: "Việt nam",
//     },

// };

// function ShowInfo( {name, age , address: {city, state}} = person)
// {
//     console.log(`${name} ${age} Tuổi sống tại ${city} ${state}`)
// }
// ShowInfo(person);

// Destructoring Array
// Khởi tạo function
function state(abc) {
    // gán giá trị value là abc 
  let value = abc;
  // tạo function chưa value ban đầu
  function getValue() {
    return value;
  }
  // tạo function value mới
  function newValue(newValue) {
    // gán value mới vào vị trí value cũ
    value = newValue;
  }
  
  return [getValue, newValue];
}
const [count, setCount] = state(50);
console.log(count());
setCount(100);
console.log(count());
