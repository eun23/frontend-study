// ! JS 연산자
// : 수학적 계산을 위한 코드

// - 산술 / 할당 / 비교 / 논리

// ? 산술 연산자
// : 수학적 계산을 수행하는데 사용
// 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)
// 나눗셈-나머지(%), 증가(++), 감소(--)

let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.33333...
console.log(x % y); // 1

// 증감 연산자 (++, --)
// : 숫자에 직접 적용하여 출력할 수 x
console.log("-----증감연산자-----");
console.log(3 - 1); // 2
// console.log(3++); - SyntaxError

// - 후위 연산자
// : x++ (변수 뒤에 연산자를 사용)
// : 해당 브라우저 식에서 바로 값을 변화 x
// : 그 다음에 해당 변수를 불렀을 때 계산
x = 10;
console.log(x++); // 10
console.log(x++); // 11
console.log(x); // 12

// - 전위 연산자
// : --x (변수 앞에 연산자를 사용)
// : 브라우저가 변수를 먼저 증가/감소 시키고 값을 반환
x = 10;
console.log(--x); // 9
console.log(x); // 9

x = 10;
x++; // 10
x++; // 11
--x; // 11
x++; // 11
x; // 12
x++; // 12
++x; // 14
console.log(x);

// ! 할당 연산자
// : 변수에 값을 할당하는 데 사용
// 할당(=), +=, -=, *=, /=, %=
let a = 10; // 10을 a에 할당

// 더하기 후 할당
a += 5; // a = a + 5 >> 15
console.log(a); // 15

// 빼기 후 할당
a -= 2; // a = a - 2
console.log(a); // 13

// 곱셈 후 할당
a *= 2; // a = a * 2;
console.log(a); // 26

// 나누기 후 할당
a /= 2; // a = a / 2;
console.log(a); // 13
