// ! JS 연산자 복습

// prompt 창으로 입력받은 값을 활용한 연산

// 문제 1
// : 원의 넓이를 계산하는 프로그램
// (반지름 * 반지름 * 3.14)

// - PI 상수값을 선언 및 초기화
// - 사용자로부터 반지름을 입력받아(prompt) radius 변수를 초기화
// (prompt 출력 메시지: 반지름을 입력해주세요.)
// - 해당 원의 넓이를 계산하여 area 변수에 할당
// 넓이(area) 값을 콘솔에 출력

const PI = 3.14;
let radius = prompt('반지름을 입력해주세요.');
let area = radius * radius * PI;
console.log(`넓이: ${area}`);

// prompt 창으로 사용자로부터 입력을 받을 경우
// 기본적으로 문자형(string) 타입으로 지정
// >> 정확한 계산을 위해서는 형변환을 명시해야 한다.