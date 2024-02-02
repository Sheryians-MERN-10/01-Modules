// ----------   JS - OPERAOTRS

// 1. Arithemetic Operators
// +, -, *, /, %, ** (binary operator)
// ++, -- (unary operator -> increment/decrement)

let res;
let a = 12;
// res = a++;
// res = ++a;
// res = --a;
// res = a--;

res = ++a + a++ - a-- + --a + a;
// res -> 13 + 13  - 14  +  12  - 12
// a   -> 12   13    14     13   12

// console.log(a);
// console.log(res);

// 2. ASSIGNMENT OPERATORS
// +=,-=,*=,/=,%=,**= (compound assignment operators)

// a = b
// a += b
// a -= b
// a *= b
// a /= b
// a %= b
// a **= b


// 3. Comparison Operator (always return boolean value)
// > < >= <= == === != !==

// console.log(12 > 5);
// console.log(12 == '12');
// console.log(12 === '12');
// console.log(12 != 12);
// console.log(12 !== '12');

// 4. Logical Operators (returns a/c to datatypes comparison)
// examples of logical operator are:
//  && ||   (binary)
// !    (unary) -> always return boolean value

// console.log(!true);

// falsy value:     0, "" , null, undefined, NaN, false
// truthy value:  any non-falsy value

// console.log(true);
// console.log(!true);
// console.log(!!true);

// console.log(0);
// console.log(!0);
// console.log(!!0);

// console.log(!!12);  // converting any datatype into boolean

// console.log(undefined);
// console.log(null);
// console.log(!null);
// console.log(!!null);

// console.log(false || true);
// console.log(false && true);
// console.log(false && true);

// console.log(12 && 16);
// console.log(12 || 16);

// console.log(12 && '16');
// console.log(12 || '16');

// console.log(null || '12');
// console.log('12' || null);

// console.log(null && '12');
// console.log('12' && null);

// console.log(null && 'ayu');
// console.log('ayu' && null);


let c = 33;
// console.log(c > 20);
// console.log(c % 2 === 0);
// console.log(c > 20 || c % 2 === 0);
// console.log(c > 20 && c % 2 === 0);

// console.log(c > 20 && c % 2 === 0);

let res2 = c > 15;
// res2 && console.log(c);
res2 || console.log(c);

