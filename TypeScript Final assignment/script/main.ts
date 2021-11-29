
function newuser(){
    let newusername=document.getElementById("homepage") as HTMLDivElement;
    let newlogin=document.getElementById("userdetails") as HTMLDivElement;
    newusername.style.display="none"
    newlogin.style.display="block"
}
function login(){
    let newusername=document.getElementById("homepage") as HTMLDivElement;
    let newlogin=document.getElementById("userdetails") as HTMLDivElement;
    let loginpage=document.getElementById("loginpage")as HTMLDivElement;
    newusername.style.display="none"
    newlogin.style.display="none"
    loginpage.style.display="block"
}
function validuserId(){
    let newusername=document.getElementById("homepage") as HTMLDivElement;
    let newlogin=document.getElementById("userdetails") as HTMLDivElement;
    let loginpage=document.getElementById("loginpage")as HTMLDivElement; 
    let valid=document.getElementById("option") as HTMLDivElement;
    newusername.style.display="none"
    newlogin.style.display="none"
    loginpage.style.display="none"
    valid.style.display="block"

}
function availablecourses(){
    let newusername=document.getElementById("homepage") as HTMLDivElement;
    let newlogin=document.getElementById("userdetails") as HTMLDivElement;
    let loginpage=document.getElementById("loginpage")as HTMLDivElement; 
    let valid=document.getElementById("option") as HTMLDivElement;
    let select=document.getElementById("courses") as HTMLDivElement;
    newusername.style.display="none"
    newlogin.style.display="none"
    loginpage.style.display="none"
    valid.style.display="block"
    select.style.display="block"

}

function enroll(){
    if()

}

let autoincrementId=1000;
class User{
    UserId:number;
    UserName:string;
    UserAge:number;
    UserPhoneNumber:number;
    constructor(userName,userAge,userphoneNumber){
        autoincrementId++;
        this.UserId=autoincrementId;
        this.UserId=autoincrementId;
        this.UserName=userName;
        this.UserAge=userAge;
        this.UserPhoneNumber=userphoneNumber;
    }   
}
class Enroll{
    CourseName:string;
    CourseId:String;
    RequiredDays:number;
    UserID:string;
    constructor(Cname:string,days:number,userid:string){
        autoincrementCourseId++;
        this.CourseName=Cname;
        this.RequiredDays=days;
        this.UserID=userid;
        this.CourseId=autoincrementCourseId.tostring();
    }
   

}
let coursecollection:Array<Enroll>=new Array<Enroll>();
coursecollection.push(new(

let userList:Array<User>=[];

 
function adduser(){
    let userName=document.getElementById("username1")as HTMLInputElement;
    let userAge=document.getElementById("userage1")as HTMLInputElement;
    let userphoneNumber=document.getElementById("userphone1")as HTMLInputElement;
      userlist.push(new User(userName,userAge,userphoneNumber));
    alert("registeration Successful");
    console.log(userlist)

}


