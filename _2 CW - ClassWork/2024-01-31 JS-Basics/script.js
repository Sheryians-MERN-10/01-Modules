//1. keywords vs words
// 'Abhay'/"Abhay"/" " = word(string)
// for = keyword

// 2. lowercase(small letters) vs uppercase(capital letters)
// is every PL is case sensitive by default ?

// var age = 12  //
// 12 = 0101001011001
// a = 97(ascii value)
// A = 65(ascii value)
// 1 = 49(ascii value)

//3. Scope - {}
// Local / Global

//4. compiler(syntax error),  interpreter

//5. variables = container
// let / const / var

// var age;  // declaration
// age = 12; // initialization
// var age = 12;
// keyword  varname assignmental-operator value

// = (assigning valur from its right side to its left side)

// naming convension of variable
// 1. resemblence
// 2. always start with name small,capital,_ and not with number
// 3. variable must be single words entity
// var parent_age = "name"; // snake_case_pattern
// var parentAge = "name"; // camelCasePattern
// var ParentAge = "name"; // PascalCasePattern
// 4. variable name must not be a keyword

// var b = 56; // global variable
// let a = 23; // local variable
// const c = 67; // local variable

// {
//     const a = 23;
//     console.log(a);
//     // a = 56;
//     // console.log(a);
//     var r = 45;
// }
// console.log(a);
// console.log(r);

// Datatypes
// 1. primitive
// number 12/12.2/-22/-22.22
// string "abc", 'abc'
// boolean true/false
// object - null
// undefined - undefined
// symbol -> homework
let a = "b";
console.log(typeof a);

// let a = 56;
// console.log(a);
// a = null;
// console.log(a);
// 2. non-primitive(reference) - object(array,object,function)