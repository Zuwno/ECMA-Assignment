// Object
const person1 = {
  name: "Phong",
  age: "20",
};

const person2 = {
  ...person1,
  address: "Hà Nội",
  
};

console.log(person1)
console.log(person2)
//  Array
const product = [10, 20 , 30];
const NewProduct = [ 'Mlem',...product , 40 , 50];
console.log("giá trị sản phẩm ban đầu ", product)
console.log("giá trị sản phẩm thay đổi ",NewProduct)