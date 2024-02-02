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
// let a = "b";
// console.log(typeof a);

// let a = 56;
// console.log(a);
// a = null;
// console.log(a);
// 2. non-primitive(reference) - object(array,object,function)

// operators
// 1. Arithmetic Operators
// +,-,*,/,%, **(binary)
// ++,-- (unary- increment/decrement)

// shorthand operators
// +=,-=,*=,/=,%=,**= (compound assignment operators)
// let a = 2;
// a = a + 3;
// a += 3;

// a = a**3
// a **= 3;
// console.log(a);

// let a = 12;
// res = ++a + a-- - --a + a-- + a + a++;
//res -  13 + 13 - 11 +  11 + 10 + 10 = 46
// a  - 13, 12, 11, 10, 11
// console.log(res, a);

// let a = 4;
// let b = 3;
// let res = a ** b;
// console.log(res);

// 2. Assignment Operators =
// 3. Comparison Operators (always return boolean value)
// > < >= <= == === != !==
// console.log("a" > "b"); // 97 > 98
// console.log("A" > "b"); // 65 > 98
// console.log("JohnD" > "Johnd"); // 68 > 100
// in string(word) comparision it always compares the first not equal character

// console.log(12 < 12);
// console.log(12 <= 12);
// console.log(12 = 12);
// console.log(12 >= 12);
// console.log(12 == "12");
// console.log(12 != "12");
// console.log(12 === "12");
// console.log(12 !== "12");

// 4. Logical Operators (returns a/c to datatype comparision)
// &&, || (binary)
// ! (unary) // always return boolean value

// falsy values  0, "", null, undefined, NaN, false

// console.log(!true);
// console.log(!!true);
// console.log(!!"john"); // converting any datatype into boolean

// console.log(null || "john");
// console.log(null && "john");

// let a = 35;
// console.log(a > 20);
// console.log(a % 2 === 0);
// console.log(a > 20 || a % 2 === 0);
// end of operators