// import defaultGreeting, {greetMorning} from "./greet.js";
//lesson 1
//alert("Shraddha Here!")

//lesson 2
// let myName="Shraddha";
// const birthYear=2005;
// console.log(myName);

// let myNum="100";
// Number(myNum);
// console.log(myNum);

//lesson 3
// let a=15, b="15";
// console.log(a==b); //true
// console.log(a===b); //false

// let age=18;
// if(age>=18){
//     console.log("Eligible to vote");
// }
// else{
//     console.log("Not eligible to vote");
// }

// let x=5;
// console.log(x++);
// console.log(x);
// console.log(++x);

//lesson 4
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// let myArray = ["Apple", "Banana", "Cherry"];
// for (let variable of myArray){
//     console.log(variable);
// }

// let myObj = {
//     name: "Bob",
//     age: 30
// };
// for (let key in myObj){
//     console.log(key, ":", myObj[key]);
// }

//lesson 5
// function subtract(a,b){
//     return (a-b);
// }
// console.log(subtract(3,4));

// function isEven(n){
//     return (n%2==0);
// }
// console.log(isEven(44));

// const greet = (name)=>{
//     return (`Hello ${name}`);
// }
// console.log(greet("shraddha"));

// function calculateArea(radius){
//     return (3.14*radius*radius);
// }
// console.log(calculateArea(3));

// function checkNumber(num){
//     if (num>0){
//         console.log("Positive");
//     }
//     else if (num<0){
//         console.log("Negative");
//     }
//     else{
//         console.log("Zero");
//     }
// }

// function calculateGrade(marks){
//     if(marks>=90){
//         return "A";
//     }
//     else if(marks>=75){
//         return "B";
//     }
//     else if(marks>=60){
//         return "C";
//     }
//     else if(marks>=40){
//         return "D";
//     }
//     else if(marks<40){
//         return "F";
//     }
// }

// console.log(calculateGrade(95));
// console.log(calculateGrade(80));

//lesson6
// nums=[10,20,30,40];
// nums.push(50);
// console.log(nums);

// nums.shift();
// console.log(nums);

// console.log(nums.indexOf(30));

// double=nums.map(num=>num*num);
// console.log(double);

// filtered=nums.filter(num=>num>25);
// console.log(filtered);

//lesson 7
// let student={
//     name: "Shraddha",
//     age: 19,
//     grade: "14th"
// };

// console.log(student);

// student.subject="Math";
// console.log(student);

// delete student.age;
// console.log(student);

// student.greet=function(){
//     console.log(`Hello I am ${student.name}`);
// }

// student.greet();

// let book={
//     title:"abc",
//     pages:300
// };
// console.log(Object.keys(book));
// console.log(Object.values(book));

//lesson 8
// let books=[
//     {title:"abc",author:"def",year:2000},
//     {title:"ghi",author:"jkl",year:2005},
//     {title:"lmn",author:"pqr",year:2010}
// ];
// console.log(books);

// books.push({title:"uvw",author:"xyz",year:2015});
// console.log(books);

// let titles=books.map(s=>s.title);
// console.log(titles);

// let filtered=books.filter(s=>s.year>=2010);
// console.log(filtered);

// let authorPqr=books.find(s=>s.author=="pqr");
// console.log(authorPqr);

//lesson 9
// let x=10;       //global scope

// function test(){
//     let y=20;       //function/local scope

//     if(true){
//         let z=30;       //block scope
//         console.log(z);
//     }
//     console.log(z);     //not defined
// }

// console.log(x);
// console.log(y);     //not defined

//lesson 10

//callback function
// function greet(name, callback){
//     console.log("Hello "+name);
//     callback();
// }

// function sayBye(){
//     console.log("Goodbye!");
// }

// greet("Riya",sayBye);

//higher order function
// function operate(a,b,operation){        //higher order
//     return operation(a,b);
// }

// const add=(x,y)=>x+y;       //callback
// const multiply=(x,y)=>x*y;  //callback

// console.log(operate(3,4,add));
// console.log(operate(3,4,multiply));

//example
// function sayHi(){
//     console.log("Hi");
// }

// function run(fn){
//     console.log("before");
//     fn();
//     console.log("after");
// }
// run(sayHi);

//example 2
// function myCalculator(a,b,fn){
//     return(fn(a,b));
// }

// const subtract=(x,y)=>x-y;

// console.log(myCalculator(5,6,subtract));

//lesson 11

// //reduce=>
// const nums=[1,2,3,4];
// const sum=nums.reduce((acc,curr)=>      //acc=accumulator and starts from 0 & curr=current array element
// acc+curr,0);
// console.log(sum);

// const arr=[2,3,4];
// const product=arr.reduce((acc,curr)=>acc*curr,1);
// console.log(product);

// //find=>
// const numbers=[3,8,15,24];
// const found=numbers.find(num=>num>10);
// console.log(found);

// const arr=[10,45,67,32];
// const found=arr.find(num=>num>50);
// console.log(found);

// //findIndex=>
// const index=numbers.findIndex(num=>num>10);
// console.log(index);

// //some=>
// const hasEven=numbers.some(num=>num%2==0);
// console.log(hasEven);

// //every=>
// const allPositive=numbers.every(num=>num>0);
// console.log(allPositive);

// //sort=>xzx
// const vals=[100,50,3];
// vals.sort();
// console.log(vals);      //wrong output

// //for correct sorting:
// vals.sort((a,b)=>a-b);
// console.log("Ascending: "+vals);
// vals.sort((a,b)=>b-a);
// console.log("Descending: "+vals);

// const vals=[5,1,100,50];
// vals.sort((a,b)=>b-a);
// console.log("Descending: "+vals);

// //splice=>
// let arr=[1,2,3,4];
// arr.splice(1,2);    //deletes 2 elements from index 1
// console.log(arr);

// //slice=>
// let arr2=[10,20,30,40];
// let sliced=arr2.slice(1,3);     //deletes elements from index 1 to 3 where 3 is exclusive
// console.log(sliced);

//lesson 12
// let car={
//     make:'Toyota',
//     model:'Camry',
//     year: 2020
// };

// car.details=function(){
//     return this.make+" "+this.model+" "+this.year;
// }

// console.log(car);
// console.log(car.details());

// let profile={
//     name:"Shraddha",
//     age:20,
//     address:{
//         city:"Pune",
//         pincode:411038
//     }
// };

// console.log(profile.address.city);

//lesson 13
// const user={        //object destructuring
//     name:"Riya",
//     age:20
// };
// const{name,age}=user;
// console.log(name);
// console.log(age);

// const colors=['red','blue','green'];        //array destructuring
// const[first,second]=colors;
// console.log(first);
// console.log(second);

// const nums=[1,2,3];     //spread operator
// const morenums=[...nums,4,5,6];
// console.log(morenums);

// const updated={...user,city:"Pune"};
// console.log(updated);

// const [a,b, ...rest]=[1,2,3,4,5];       //rest operator
// console.log(rest);

// function sum(...nums){
//     return nums.reduce((a,b)=>a+b,0);
// }
// console.log(sum(1,2,3,4));

// const address={
//     city:"Pune",
//     pincode:411038
// };
// const {city,pincode}=address;
// console.log(city);
// console.log(pincode);

// const abc=[1,2];
// const def=[3,4];
// const combine=[...abc,...def];
// console.log(combine);

// function multiply(...nums){
//     return nums.reduce((a,b)=>a*b,1);
// }
// console.log(multiply(1,2,3,4,5));

// lesson 15 dom (1)
// let button=document.getElementById("button");
// let div=document.getElementById("box");
// button.addEventListener("click",function(){
//     div.innerText="Hello There!";
//     div.style.color="red";
// });

// let form=document.getElementById("myForm");
// let msg=document.getElementById("msg");

//FORM 1
// form.addEventListener("submit",function(event){
//     event.preventDefault();         //prevents form from refreshing page
//     let username=document.getElementById("username").value;
//     let password=document.getElementById("password").value;
//     // let email=document.getElementById("email").value;

//     // if(username==="" || email===""){
//     //     msg.innerText="All fields are required!";
//     // }
//     // else{
//     //     msg.innerText=`Welcome ${username}!`;
//     // }
//     if (username==="admin" && password==="1234"){
//         msg.innerText="Login successful!"
//     }
//     else{
//         msg.innerText="Invalid credentials!"
//     }
// });

//FORM 2
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let name=document.getElementById("name").value;
//     let age=document.getElementById("age").value;
//     let email=document.getElementById("email").value;
    
//     if(name==="" || age==="" || email===""){
//         msg.innerText="All fields are required!";
//     }

//     else if(age<18){
//         msg.innerText="You must be at least 18 to register!";
//     }

//     else{
//         msg.innerText="Registration Successful!";
//     }
// });

//FORM 3
// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let password=document.getElementById("password").value;
//     let cpassword=document.getElementById("cpassword").value;

//     if(password!==cpassword){
//         msg.innerText="Passwords do not match!";
//     }
//     else{
//         msg.innerText="Account created successfully!";
//     }
// });

//lesson 16
// object chaining
// const student={
//     name:"Rahul",
//     profile:{
//         email:"rahul@gmail.com"
//     }
// };
// console.log(student.profile?.email);
// console.log(student.profile?.phone);
// console.log(student.contact?.address);

// with functions
// const user={
//     sayHi:()=>console.log("hi")
// };
// user.sayHi?.();
// user.sayBye?.();

//JSON & localStorage
// const person={
//     name:"Riya",
//     age:20
// };

// const jsonstring=JSON.stringify(person);
// console.log(jsonstring);
// const backtoobject=JSON.parse(jsonstring);
// console.log(backtoobject);

// localStorage.setItem("username",JSON.stringify(person.name));
// const pname=localStorage.getItem("username");
// console.log(pname);

//lesson 17
//callback

// function fetchdata(callback){
//     setTimeout(()=>{
//         console.log("Data fetched!");
//         callback();
//     },2000);
// }

// fetchdata(()=>{
//     console.log("Callback function executed!");
// });

//lesson 18
//promise
// let myPromise=new Promise(function(resolve,reject){
//     let success=true;

//     setTimeout(()=>{
//         if(success){
//             resolve("Operation successful!");
//         }
//         else{
//             reject("Operation failed!");
//         }
//     },2000);
// });

// myPromise
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// });

// function fetchDataWithPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const dataFetched=false;
//             if(dataFetched){
//                 resolve("Data fetched successfully!");
//             }
//             else{
//                 reject("Failed to fetch data!");
//             }
//         },3000);
//     });
// }

// fetchDataWithPromise()
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error);
// });

// function checkWeather(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const isSunny=true;
//             if(isSunny){
//                 resolve("Its a sunny day!");
//             }
//             else{
//                 reject("Its a cloudy day!");
//             }
//         },2000);
//     });
// };

// checkWeather()
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error);
// })

//promise chaining

// function firsttask(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("First task done!");
//             resolve();
//         },1000);
//     });
// }

// function secondTask(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Second task done!");
//             resolve();
//         },1000);
//     });
// }

// firsttask()
// .then(()=>{
//     return secondTask();
// })
// .then(()=>{
//     console.log("All tasks completed!");
// })
// .catch((error)=>{
//     console.log(error);
// });

// function orderFood(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Pizza is ready!");
//         },2000);
//     });
// }

// orderFood()
// .then((message)=>{
//     console.log(message);
// })

//lesson 19

// function loadDogImage(){
//     const statusPara=document.getElementById("status");
//     const dogImage=document.getElementById("dogImage");
//     dogImage.style.opacity=0;
//     statusPara.innerText="Loading..."
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response)=>response.json())
//     .then((data)=>{
//         console.log(data);
//         dogImage.src=data.message;
//         dogImage.onload=()=>{
//             dogImage.style.opacity=1;
//             statusPara.innerText="Here's your dog!";
//         };
//     })
//     .catch((error)=>{
//         console.log("Error: ",error);
//         statusPara.innerText="Failed to load dog!"
//     });
// }


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((Response)=>Response.json())
// .then((data)=>{
//     console.log(data[0].title);
// })

// async function example(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data=await response.json();
//         console.log(data[0].title);

//     }
//     catch(error){
//         console.log("Error: ",error);
//     }
// }
// example();

//lesson 20
//same dog code with async-await


// async function loadDogImage() {
//     const statusPara=document.getElementById('status');
//     const dogImage=document.getElementById("dogImage");
//     dogImage.style.opacity=0;
//     statusPara.innerText="Loading...";

//     try{
//         const response=await fetch('https://dog.ceo/api/breeds/image/random');
//         const data=await response.json();

//         dogImage.src=data.message;

//         dogImage.onload=()=>{
//             dogImage.style.opacity=1;
//             statusPara.innerText="Here's your dog!";
//         };
//     }

//     catch(error){
//         console.log("Error: ",error);
//         statusPara.innerText="Failed to load dog!";
//     }
// }
// loadDogImage();
// const button=document.getElementById("newDogButton");
// button.addEventListener("click",loadDogImage);

//lesson 21
async function loadDog() {
    const dogStatus=document.getElementById('dogStatus');
    const dogImage=document.getElementById("dogImage");
    const dogFact=document.getElementById("dogFact");
    dogFact.innerText="";
    dogStatus.innerText="Dog is loading...";

    try{
        const dogPromiseImage=fetch('https://dog.ceo/api/breeds/image/random');
        const dogPromiseFact=fetch('https://dogapi.dog/api/v2/facts');

        const [dogResponseImage,dogResponseFact] =await Promise.all([dogPromiseImage,dogPromiseFact]);

        const dogDataImage=await dogResponseImage.json();
        dogImage.src=dogDataImage.message;

        const dogDataFact=await dogResponseFact.json();

        dogImage.onload=()=>{
            dogImage.style.opacity=1;
            dogFact.innerText=dogDataFact.data[0].attributes.body;
            dogStatus.innerText="Here's your dog!";
        };
    }
    catch(error){
        console.log("Error: ",error);
        dogStatus.innerText="Failed to load dog!";
    }
}

async function loadCat(){
    const catStatus=document.getElementById('catStatus');
    const catImage=document.getElementById("catImage");
    const catFact=document.getElementById('catFact');
    catFact.innerText="";
    catStatus.innerText="Cat is loading...";

    try{
        const catPromiseImage=fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg');
        const catPromiseFact=fetch('https://catfact.ninja/fact');

        const [catResponseImage, catResponseFact]=await Promise.all([catPromiseImage,catPromiseFact]);

        const catDataImage=await catResponseImage.json();
        catImage.src=catDataImage[0].url;

        const catDataFact=await catResponseFact.json();

        catImage.onload=()=>{
            catImage.style.opacity=1;
            catFact.innerText=catDataFact.fact;
            catStatus.innerText="Here's your cat!";
        };
    }
    catch(error){
        console.log("Error: ",error);
        catStatus.innerText="Failed to load cat!";
    }
}

loadDog();
loadCat();

const dogButton=document.getElementById("newDogButton");
dogButton.addEventListener("click",loadDog);
const catButton=document.getElementById("newCatButton");
catButton.addEventListener("click",loadCat);

//lesson 22
//event loop
// console.log("1");
// setTimeout(()=>{
//     console.log("2");
// },0);
// Promise.resolve().then(()=>{
//     console.log("3");
// });
// console.log("4");

//es6 features
// function introduce({name,age,hobby}){
//     const achobby=hobby??"dancing";
//     console.log(`Hi, my name is ${name}, I am ${age} years old and my hobby is ${achobby}!`);
// }

// introduce({name:"Shraddha", age:19, hobby:"learning JS"});
// introduce({name:"Anushka",age:19});

// console.log(defaultGreeting("Riya"));
// console.log(greetMorning("Ava"));

