let variable: any = "hello";
// console.log(variable);

type personType = { name: string, age: number, hobby?: string }

let person: personType = {
    name: " Linkon",
    age: 12,
    hobby: "codding"
}

let person2: personType = {
    name: "per2",
    age: 12,
    // hobby: "dashed"
}

const arr: number[] = [30, 20, 36, 24];
const arr2: any[] = [30, 20, 36, 24, "sting"];
const arr3: (number | string)[] = [30, 20, 36, 24, "sting", "abc"];

const arrObj: personType[] = [
    {
        name: "Linkon",
        age: 25,
    },
    {
        name: "Kinkon",
        age: 26
    }
]

// function
const greeting = (name: string): void => {
    console.log(`hello 000 ${name}`);
}

greeting("bla bla")

const add = (a:number, b:number) : number => {
    return a+b
}

console.log(add(10,12));

const introduce = ( {name,age} : personType) : void =>{
    console.log(`Hello mr/ms ${name} and im ${age}`);
}

introduce({name:"linkon ",age:22});

const getArr = <T> (arr : T[]): T[] => {
// const getArr = <T> (arr : T[]): T[] => {
    return arr;
}

getArr<string>(["hle","hi"])
getArr<number>([12,2])


