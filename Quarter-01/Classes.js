// type Student = {
//     name: string
//     rollNo: number
// }
// type Teacher = {
//     name: string
//     exp: number
// }
// type Both = Student | Teacher;
// type Student = {
//     name: string
//     rollNo: number
// }
// let std1: Student = {
//     name: "Ayaan Merchant",
//     rollNo: 12345
// }
// // multiple student ki information store karni ho toh we use Array
// // Array ke andar multiple object pass kr rahy
// let students: Student[] = [
//     { name: "Ayaan Merchant", rollNo: 12345 },
//     { name: "Fatimah", rollNo: 45678 },
//     { name: "Hussain", rollNo: 46345 }
// ]
// console.log("Name Of Student:",students[1].name)
// console.log("Roll Number Of Student:",students[1].rollNo)
//Array Methods
//shift() And unShift()
//shift() -> remove the 1st Item
//unshift() -> add item on 1st Index
//pop() -> remove the item from last
//push() -> Add item At Last
//splice() -> remove item using index
//slice() -> Array ka duplicate karta hai and also give index ke kaha sa kaha tal duplicate karna hai
// let fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"]
// fruits.shift()
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.unshift("Ayaan")
// console.log(fruits)
// fruits.push("Fatimah")
// console.log(fruits)
//"Slice()" Method
// let fruits1: string[] = ["Apple", "Banana", "Orange", "Grapes", "Mango"]
// let fruitsDuplicate = fruits1.slice()
// fruitsDuplicate.pop()
// console.log(fruitsDuplicate)
// console.log(fruits1)
// let fruits1: string[] = ["Apple", "Banana", "Orange", "Grapes", "Mango"]
// let fruitsDuplicate = fruits1.slice(1,2)
// fruitsDuplicate.pop()
// console.log(fruitsDuplicate)
// Splice()
// let fruits1: string[] = ["Apple", "Banana", "Orange", "Grapes", "Mango"]
// fruits1.splice(2,1, "Ayaan")
// fruits1.splice(2,0,"Fatimah")
// console.log(fruits1)
//Task
// let fruits:string[] = ["Mango", "Apple", "Banana", "Kiwi"]
// fruits.splice(-3,1,"Orange")
// console.log(fruits)
// let fruits1:string[] = ["Mango", "Apple", "Banana", "Kiwi"]
// fruits1.splice(2,0,"Strawberry", "Apricot")
// console.log(fruits1)
// let fruits1:string[] = ["Mango", "Apple", "Banana", "Kiwi"]
// fruits1.splice(0,1)
// fruits1.splice(1,1,"Orange")
// console.log(fruits1)
//Tuples -> Tuples are Imutatable can't edit the tuple
var fruits = ["Apple", "Orange"];
//Loops
var fruits1 = ["Mango", "Apple", "Banana", "Kiwi"];
// for(let a = 0; a<fruits1.length; a++){
//     console.log(`${a+1} - ${fruits1[a]}`);
// }
// for(let fruit in fruits1){
//     console.log(fruits1[fruit]);
// }
// counting 1-10
// for(let i=1; i<=10; i++){
//     console.log(i);
// }
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
