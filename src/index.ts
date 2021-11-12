//Primetive type
let id: number = 5;
let myName: string = "Pantira R";
let isPublished: boolean = true;
let x: any = "Hello"

console.log("id : "+typeof(id)+ " " + id)
console.log("myName: "+ typeof(myName)+ " " + myName)
console.log("IsPublished: "+ typeof(isPublished)+ " " +isPublished)
console.log("X: "+typeof(x)+" "+x);

//String Template ${} ==> EL
// ใช้ quote แ Backtick ````````
let age: number = 19
console.log(`My name is ${myName}. I am ${age} years old`)


//Collection Types
let ids: number[];
ids = [1,2,3,4,5];

let arr: any[];
arr = [1,"2",3,true,3.5];

console.log(ids);
console.log(arr);

//Create an array to store your friend's name
let friend: string[];
friend = ["Chatbunta","Tanthai","Patchareeporn","Wilai","Teerapat"]
 
console.log("Myfriends : "+friend)

//ตัวแปรแบบ Array ใน TS/JS จะมีMethod สำหรับ loop (itrate)
ids.forEach(i =>{
    console.log(`ID: ${i}`)
});

console.log("ฉันชื่อ "+myName+" นี่คือเพื่อนของฉัน");
friend.forEach(i =>{
    console.log(`- ${i}`)
});

let salary : number[]=[1000,2000,5000,10000]; //10%
let commission: number[]=[];

salary.forEach((s)=>{
    commission.push(s*0.1);
});
console.log(commission);

//ให้หาโบนัสของแต่ละคนโดย เงินเดือน <= 1000 โบนัส 2 เท่า
//1001-5000 โบนัส 1.5
//5001 - 10000 โบนัส 1.2
//10001 ขึ้นไป โบนัส 1 เท่า
let bonus: number[]=[];
salary.forEach((s)=>{
    if(s <= 1000){
        bonus.push(s*2);
    }
    else if(s <= 5000){
        bonus.push(s*1.5);
    }
    else if(s <= 10000){
        bonus.push(s*1.2);
    }
    else{
        bonus.push(s*1);
    }
});
console.log(bonus);

//Tuple ----> 1 record
let prod1: [number, string, string, number];
prod1 = [1, "Apple","Pack",100];

/*console.log(prod1[0]);
console.log(prod1[1]);
console.log(prod1[2]);
console.log(prod1[3]);*/

prod1.forEach(p=>{
    console.log(p);
});

/*let products = [];
products.push(prod1);
console.log(products);*/

let products : [number, string, string, number][]
products = [
    [1,"Grape","pcs",35],
    [2,"Banana","psc",15],
    [3,"Apple","psc",19],
    [4,"Orange","psc",12],
    [5,"Kiwi","psc",85]
];
products.forEach(p=>{
    console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]}`)
});

let student : [string, string, number, number, number][];

student = [
    ["1001", "Pantira", 20, 50, 0],
    ["1002", "Chatbunta", 19, 49, 0],
    ["1003", "Patchareeporn", 20, 50, 0],
    ["1004", "Teerapat", 15, 45, 0],
    ["1005", "Chalermchai", 20, 50, 0]
];
//ให้update คะแนนรวม แสดงรหัส ชื่อ และคะแนนรวม
//แสดงผลเป็น ID: Name , Total : xx

student.forEach(p=>{
    p[4]=p[2]+p[3];   
    console.log(`${p[0]} : ${p[1]}, Total : ${p[4]}`);
});

//Enum
enum Direction1{
    Up=1,
    Down=3,
    Left=5,
    Right=7
}

enum Direction2{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
}
console.clear();
console.log(Direction1.Left);
console.log(Direction2.Left);

//สร้าง pdf
//Set paper (siza,orientation)
//

enum PaperSize{
    A4 = 1,
    A5 = 2,
    A6 = 3
}
enum Orientation{
    Portrait = 1,
    Landscape = 2
}

console.log(PaperSize);


//Defined Type
type Student = {
    id: number,
    name: string,
    tel: string
    line_id : string // optional มีหรือไม่ก็ได้
}

let Pantira : Student = {
    id:63309010017, name: "Pantira" , tel:"091-875-1987",line_id: "ployly818"
}
console.log(Pantira.id);
/*let Pantira : Student;
Pantira.id = 63309010017;
Pantira.name = "Pantira" ,
Pantira.tel = "091-87519-87"*/

//Union Type
let sid : number | string
sid = 63309010017,
console.clear();
console.log(typeof(sid));

sid = "555";
console.log(typeof(sid));

//Function
//addnumber จะreturnเป็น typeอะไรก็ได้
//function addNumber(x,y){
function addNumber(x: number,y: number): number{
    return x+y;
}
console.log(addNumber(1,3));
//console.log(addNumber(1,"3"));

function showLog(m: number | string): void{
    console.log(m);
}
showLog(123);
showLog("456");

//InterFace func. โครงเปล่าฟังก์ชั่น ที่ยังไม่ได้กำหนดการทำงานไว้
interface MathFunc{
    (x: number,y: number) : number
}
//const  ค่าคงที่ 
const addNum : MathFunc = (a, b): number => {return a+b};
const subNum : MathFunc = (x, y): number => x - y;

console.log(addNumber(5,7));
console.log(subNum(5,7));

//Interface Classes 
interface Human{
    id: number,
    name: string,
    age: number,
    tel?: string,
    move():string,
    eat(): string
}

//สร้างobj จาก Interface Huma, implement move(),eat()ด้วย
const students : Human = {
    id: 123,
    name: "Pantira",
    age: 19,
    tel: "091-87519-87",
    //Function as a property
    move: function() : string{
        return "Running";
    },
    eat: function() : string{
        return "Cocoa";
    }
}
const grandmom : Human = {
    id: 9,
    name: " Pao",
    age: 60,
    move: function():string{
        return "Crawling";
    },
    eat: function():string{
        return "rice";
    }
}
//Pantira R.
const boxer : Human = {
    id: 3,
    name: " Tim",
    age: 22,
    move: function():string{
        return "Walking";
    },
    eat: function():string{
        return "sandwich";
    }
}
const pilot : Human = {
    id: 789,
    name: " Johnson",
    age: 22,
    move: function():string{
        return "Walking";
    },
    eat: function():string{
        return "crackers";
    }
}
console.log(students.eat());
console.log(grandmom.eat());
console.log(boxer.eat());
console.log(pilot.eat());

//Class
class Driver implements Human{
    id:number;
    name:string;
    age:number;

    //arg-constructor
    constructor(id:number, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move(){
        return `${this.name} moves by driving.`;
    }
    eat(){
        return `${this.name} eats rice.`;
    }
}

console.clear();
const d1 = new Driver(101,"Jakrit",20);
console.log(d1.move());
console.log(d1.eat());


//Q1 สร้าง Tuple ของนศ [id,name,mid,final,project,grade]
//                      1,"pantira",20,30,35,""
//แสดง Output :<id>:<name>, Total: <mid+final+project>,Grade: <grade>
//Grad 4,3.5,3,2.5,2,1.5,1,0
//FileName : Pantira_Q1.ts
//
// Q2การบ้าน implement 1 อาชีพ จาก Human 
//แสดงการ implement move(),eat()
//แสดงการสร้าง object
//Filename: Pantira_Q2.ts

//กำหนดส่ง ศุกร์หน้า 19/11/64


//Generic //ยังไม่ทราบtype ตอนสร้าง Func
function getArray<T>(items:T[]): T[]{
    return new Array().concat(items);
}
let n1 = [1,2,3,4]
let n2 =["ploy","mild","Fah","Som"]

console.log(getArray([n1,n2]))



