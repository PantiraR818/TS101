//Primetive type
let id = 5;
let myName = "Pantira R";
let isPublished = true;
let x = "Hello";
console.log("id : " + typeof (id) + " " + id);
console.log("myName: " + typeof (myName) + " " + myName);
console.log("IsPublished: " + typeof (isPublished) + " " + isPublished);
console.log("X: " + typeof (x) + " " + x);
//String Template ${} ==> EL
// ใช้ quote แ Backtick ````````
let age = 19;
console.log(`My name is ${myName}. I am ${age} years old`);
//Collection Types
let ids;
ids = [1, 2, 3, 4, 5];
let arr;
arr = [1, "2", 3, true, 3.5];
console.log(ids);
console.log(arr);
//Create an array to store your friend's name
let friend;
friend = ["Chatbunta", "Tanthai", "Patchareeporn", "Wilai", "Teerapat"];
console.log("Myfriends : " + friend);
//ตัวแปรแบบ Array ใน TS/JS จะมีMethod สำหรับ loop (itrate)
ids.forEach(i => {
    console.log(`ID: ${i}`);
});
console.log("ฉันชื่อ " + myName + " นี่คือเพื่อนของฉัน");
friend.forEach(i => {
    console.log(`- ${i}`);
});
let salary = [1000, 2000, 5000, 10000]; //10%
let commission = [];
salary.forEach((s) => {
    commission.push(s * 0.1);
});
console.log(commission);
//ให้หาโบนัสของแต่ละคนโดย เงินเดือน <= 1000 โบนัส 2 เท่า
//1001-5000 โบนัส 1.5
//5001 - 10000 โบนัส 1.2
//10001 ขึ้นไป โบนัส 1 เท่า
let bonus = [];
salary.forEach((s) => {
    if (s <= 1000) {
        bonus.push(s * 2);
    }
    else if (s <= 5000) {
        bonus.push(s * 1.5);
    }
    else if (s <= 10000) {
        bonus.push(s * 1.2);
    }
    else {
        bonus.push(s * 1);
    }
});
console.log(bonus);
//Tuple ----> 1 record
let prod1;
prod1 = [1, "Apple", "Pack", 100];
/*console.log(prod1[0]);
console.log(prod1[1]);
console.log(prod1[2]);
console.log(prod1[3]);*/
prod1.forEach(p => {
    console.log(p);
});
/*let products = [];
products.push(prod1);
console.log(products);*/
let products;
products = [
    [1, "Grape", "pcs", 35],
    [2, "Banana", "psc", 15],
    [3, "Apple", "psc", 19],
    [4, "Orange", "psc", 12],
    [5, "Kiwi", "psc", 85]
];
products.forEach(p => {
    console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]}`);
});
let student;
student = [
    ["1001", "Pantira", 20, 50, 0],
    ["1002", "Chatbunta", 19, 49, 0],
    ["1003", "Patchareeporn", 20, 50, 0],
    ["1004", "Teerapat", 15, 45, 0],
    ["1005", "Chalermchai", 20, 50, 0]
];
//ให้update คะแนนรวม แสดงรหัส ชื่อ และคะแนนรวม
//แสดงผลเป็น ID: Name , Total : xx
student.forEach(p => {
    p[4] = p[2] + p[3];
    console.log(`${p[0]} : ${p[1]}, Total : ${p[4]}`);
});
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 5] = "Left";
    Direction1[Direction1["Right"] = 7] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.clear();
console.log(Direction1.Left);
console.log(Direction2.Left);
//สร้าง pdf
//Set paper (siza,orientation)
//
var PaperSize;
(function (PaperSize) {
    PaperSize[PaperSize["A4"] = 1] = "A4";
    PaperSize[PaperSize["A5"] = 2] = "A5";
    PaperSize[PaperSize["A6"] = 3] = "A6";
})(PaperSize || (PaperSize = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Portrait"] = 1] = "Portrait";
    Orientation[Orientation["Landscape"] = 2] = "Landscape";
})(Orientation || (Orientation = {}));
console.log(PaperSize);
let Pantira = {
    id: 63309010017, name: "Pantira", tel: "091-875-1987", line_id: "ployly818"
};
console.log(Pantira.id);
/*let Pantira : Student;
Pantira.id = 63309010017;
Pantira.name = "Pantira" ,
Pantira.tel = "091-87519-87"*/
//Union Type
let sid;
sid = 63309010017,
    console.clear();
console.log(typeof (sid));
sid = "555";
console.log(typeof (sid));
//Function
//addnumber จะreturnเป็น typeอะไรก็ได้
//function addNumber(x,y){
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 3));
//console.log(addNumber(1,"3"));
function showLog(m) {
    console.log(m);
}
showLog(123);
showLog("456");
//const  ค่าคงที่ 
const addNum = (a, b) => { return a + b; };
const subNum = (x, y) => x - y;
console.log(addNumber(5, 7));
console.log(subNum(5, 7));
//สร้างobj จาก Interface Huma, implement move(),eat()ด้วย
const students = {
    id: 123,
    name: "Pantira",
    age: 19,
    tel: "091-87519-87",
    //Function as a property
    move: function () {
        return "Running";
    },
    eat: function () {
        return "Cocoa";
    }
};
const grandmom = {
    id: 9,
    name: " Pao",
    age: 60,
    move: function () {
        return "Crawling";
    },
    eat: function () {
        return "rice";
    }
};
//Pantira R.
const boxer = {
    id: 3,
    name: " Tim",
    age: 22,
    move: function () {
        return "Walking";
    },
    eat: function () {
        return "sandwich";
    }
};
const pilot = {
    id: 789,
    name: " Johnson",
    age: 22,
    move: function () {
        return "Walking";
    },
    eat: function () {
        return "crackers";
    }
};
console.log(students.eat());
console.log(grandmom.eat());
console.log(boxer.eat());
console.log(pilot.eat());
//Class
class Driver {
    //arg-constructor
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move() {
        return `${this.name} moves by driving.`;
    }
    eat() {
        return `${this.name} eats rice.`;
    }
}
console.clear();
const d1 = new Driver(101, "Jakrit", 20);
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
function getArray(items) {
    return new Array().concat(items);
}
let n1 = [1, 2, 3, 4];
let n2 = ["ploy", "mild", "Fah", "Som"];
console.log(getArray([n1, n2]));
