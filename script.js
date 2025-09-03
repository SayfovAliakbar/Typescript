var userName = "Ali";
console.log("Hello my name name is ".concat(userName));
var age = 25;
var temp = -5.7;
var distanse = 1e5;
console.log("Age: ".concat(age, ", Temp: ").concat(temp, ", Distance: ").concat(distanse));
var isActive = true;
var isCompleted = false;
var hasPermission = (10 > 5);
console.log("Active: ".concat(isActive, ", Completed: ").concat(isCompleted, ", Permission: ").concat(hasPermission));
var undefinedVar = undefined;
var nullVar = null;
var emptyValue = null;
console.log("UndefinedVar: ".concat(undefinedVar, ", nullVar: ").concat(nullVar, ", emptyValue: ").concat(emptyValue));
var flexibleVar = "Ali";
flexibleVar = 42;
flexibleVar = true;
console.log(flexibleVar);
var unknownValue = "It's string";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
var a = 5;
if (typeof a === "number") {
    console.log(Math.pow(a, 2));
}
function dispInfo(a, b) {
    console.log("Name: ".concat(a, ", Age: ").concat(b));
}
dispInfo("Ali", 4);
