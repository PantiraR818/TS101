//Q1 สร้าง Tuple ของนศ [id,name,mid,final,project,grade]
//                      1,"pantira",20,30,35,""
//แสดง Output :<id>:<name>, Total: <mid+final+project>,Grade: <grade>
//Grad 4,3.5,3,2.5,2,1.5,1,0
//FileName : Pantira_Q1.ts

let stu : [string, string, number, number, number,number];
stu = [ "1001", "Pantira", 42, 21, 20, 0];


stu.forEach(p=>{
    console.log(p)
});