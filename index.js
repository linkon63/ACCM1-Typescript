"use strict";
var variable = "hello";
var person = {
    name: " Linkon",
    age: 12,
    hobby: "codding"
};
var person2 = {
    name: "per2",
    age: 12,
    // hobby: "dashed"
};
var arr = [30, 20, 36, 24];
var arr2 = [30, 20, 36, 24, "sting"];
var arr3 = [30, 20, 36, 24, "sting", "abc"];
var arrObj = [
    {
        name: "Linkon",
        age: 25,
    },
    {
        name: "Kinkon",
        age: 26
    }
];
// function
var greeting = function (name) {
    console.log("hello 000 " + name);
};
greeting("bla bla");
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 12));
var introduce = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello mr/ms " + name + " and im " + age);
};
introduce({ name: "linkon ", age: 22 });
var getArr = function (arr) {
    // const getArr = <T> (arr : T[]): T[] => {
    return arr;
};
getArr(["hle", "hi"]);
getArr([12, 2]);
