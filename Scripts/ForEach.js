
let buttonElement = document.querySelector('.js-change');

buttonElement.innerHTML = 'click';
buttonElement.addEventListener('click', () => {
    buttonElement.innerHTML = `clicked`;
});

// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.forEach(function (val, i) {
//     console.log(val + " " + i);
// });

// const add = function () {
//     console.log(2 + 3);
// }

// function runTwice(add) {
//     add();
//     add();
// }

// runTwice(function () {
//     console.log("12b");
// });

// function updateButton() {
//     let str = document.querySelector(".obj");

//     setTimeout(function () {
//         str.innerHTML = `Finished`;
//     }, 1000);

//     str.innerHTML = `Loading....`;
// }

// let timeOutId;

// function cartUpdate() {
//     let s = document.querySelector('.add');

//     s.innerHTML = `Added`;

//     clearTimeout(timeOutId);

//     timeOutId = setTimeout(function () {
//         s.innerHTML = ``;
//     }, 2000);
// }


// const multiply = (a, b) => console.log(a + b);

// multiply(89, 10);
// multiply(89, 10);


// const arr = [1, -3, 5];
// let count = 0;
// arr.forEach(function countPositive(nums) {
//     if (nums > 0) {
//         count++;
//     }
// });

// console.log(count);

// const arr = [1, -3, 5];

// let newArr = arr.map(val => val + 2);

// console.log(newArr);

// const str = ['egg', 'apple', 'egg', 'egg', 'ham'];

// let count = 0;
// let newStr = str.filter((val, i) => {
//     if (val === 'egg' && count < 2) {
//         count++;
//         return false;
//     } else {
//         return true;
//     }
// });

// console.log(newStr);