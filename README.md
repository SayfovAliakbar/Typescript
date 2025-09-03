# TypeScript
## Что такое TypeScript?
TypeScript — это язык программирования, созданный Microsoft, который является надстройкой над JavaScript.

## Основные особенности:
1) Статическая типизация:
В отличие от JavaScript, где типы данных определяются во время выполнения, в TypeScript ты можешь заранее указать, что переменная должна хранить число, строку, объект и т.д.

2) Компиляция в JavaScript:
TypeScript не понимается браузерами напрямую. Его нужно скомпилировать в обычный JavaScript, и уже он выполняется в браузере.

## Примеры:
let userName:string = "Ali"

let age:number = 25
let temp:number = -5.7
let distanse:number = 1e5

let isActive:boolean = true
let isCompleted:boolean = false
let hasPermission:boolean = (10 > 5)

let undefinedVar:undefined = undefined
let nullVar:null = null
let emptyValue:string | null = null

let flexibleVar:any = "Ali"
flexibleVar = 42
flexibleVar = true

let unknownValue:unknown = "It's string"
if(typeof unknownValue === "string"){
	console.log(unknownValue.toUpperCase());
}
let a:unknown = 5
if (typeof a === "number") {
	console.log(Math.pow(a,2));
}

function dispInfo(a:string, b:number):void {
	console.log(`Name: ${a}, Age: ${b}`);
}

