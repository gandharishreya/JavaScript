// print 
console.log("shreya")
// variables
const v=12345
let name="shreya"
var grade="A"
semester = "1"
// table structure
console.table([name, grade, semester, v])
// type of variable 
console.log(typeof null);
console.log(typeof true);
console.log(typeof "edu");

// conversion of datatypes
let s="54ab"
let val=Number(s)
console.log(val);
// non primitive
const hero=["batman", "spiderman", "iron man"];
let myobj={
    name: "shreya",
    id: 23,
    email: "abc@gmail.com",
    isLoggedIn: "false"
}

console.log(myobj);
console.log(hero);

const myFun= function() {
    console.log("hello");
    
}
console.log(myFun);
console.log(typeof myobj);
console.log(typeof myFun);
const d=Symbol("123")
console.log(d);
console.log(typeof d);

// stack(primitive) heap(non-primitive) memory -- stack - copy, heap - reference
console.log(myobj.name);
let user=myobj
console.log(user);

// strings
console.log(`hello ${name} your id is ${v}`);
const game=new String('pubg')
console.log(game);
console.log(game[0]);
console.log(game.__proto__);
console.log(game.toUpperCase());
console.log(game.length);
console.log(game.charAt(3));
console.log(game.indexOf('b'));
const env=new String("environment")
const env1=env.substring(0,4);
console.log(env1);
const env2=env.slice(-11,5);
console.log(env2);
// trim remove white space
const env3=env.trim()
console.log(env.split('-'));
console.log(env.includes("ment"));

// date
let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);

let mytime=Date.now()
console.log(mytime);
console.log(mydate.getMonth()+1);
console.log(mydate.getDay());

// arrays
let myArr=new Array(1,2,3,4,5);
console.log(myArr[1]);
myArr.push(6)
console.log(myArr);
myArr.pop();
myArr.unshift(1)
console.log(myArr);
myArr.shift();
console.log(myArr);
let newArr=myArr.join()
console.log(newArr);
console.log(typeof newArr);
// slice exclude the last int , splice include the last int
const myA1=myArr.slice(1,3)
console.log(myArr);

const myA2=myArr.splice(1,3)
console.log(myArr);

console.log(myA1,' ');

console.log(myA2,' ');

// arrays part 2
const cart=['tom', 'jerry', 'oggy']
const crick=['msd', 'hitman', 'vk']
cart.push(crick)
//console.log(cart);
//cart.concat(crick)
const allfav= cart.concat(crick);
//console.log(allfav);
const allnew=[...crick, ...cart]
console.log(allnew);

// objects
const ab=Symbol("key1")
let myobj1={
    name: "shreya",
    id: 23,
    [ab]:"mykey1",
    email: "abc@gmail.com",
    isLoggedIn: "false",
    "fullname": "ABC XYZ"
}
console.log(myobj1.email);
console.log(myobj1["id"]);
console.log(myobj1["fullname"]);
console.log(myobj1[ab]);
console.log(myobj1);

// objects

const obj1={'a':1, 'b':2}
const obj2={'c':3,'d':4}
const obj3=Object.assign(obj1,obj2);
console.log(obj3);

console.log(Object.keys(myobj1));
console.log(Object.values(myobj1));
console.log(Object.entries(myobj1));

// functions
function addtwo(a,b) {
    console.log(a+b);
    
}
addtwo(3,4)
addtwo(3,"a")
addtwo(3,null)

function addtwo(a,b) {
    return (a+b);
    
}
const result=addtwo(4,6)
console.log(result);

function calculate(...num) {
    return num
    
}
console.log(calculate(200,300,400));

// functions multi -- child loop or function can access parent loop  or function
function one() {
    let username="shreya"
    function two() {
        let web="insta"
    console.log(username);
            
    }
    two()
}
one()

// this keyword
const u={
    username:"shreya",
    price: 999,
    website:"youtube",
    welcomemsg: function(){
        console.log(`${this.username}, welcome`); 
        console.log(this);
        
    }
}
u.welcomemsg();
 u.username="sam";
 u.welcomemsg()
 console.log(this);

//  this in scope is empty object, this in website is window object (globally)

// arrow fuunction
const chai=()=>{
    let username="shreya "
    console.log(this.username);
}
chai()
// {} this braces we need to write return keyword if () this braces no need of return keyword
const addTwo=(n1,n2)=>{
    return n1+n2
}
console.log(addTwo(3,4));

// arrow function with () braces

const arr=(n1,n2,n3)=>(n1+n2+n3)
console.log(arr(1,2,3))

// return object
const arr1=(n1,n2,n3)=>({user:"shreya"})
console.log(arr1(1,2,3))

// immediately invoked function expression (iife)

/*( function arrone() {         // named iife
  console.log('welcome msg');
    
})();
//=> () this braces invoked the function immediately and function in () is scope 

arrow function
(()=>{           //iife
    console.log(`db connected`);
    
})();
((name)=>{                // parameter iife
    console.log(`${name} db connected`);
    
})("shreya");
*/

// global phase, memory phase, execution phase
// nullish coalensing operator (??)
const n=5??11
const b=null??10
console.log(n,b);

// for, while, do while, if, else if, switch
// forof loop
const array=[1,2,3,4,5,6,7]
for (const element of array) {
    console.log(element);
    
}
// map object -- forof loop
const map = new Map();
map.set('In', 'India');
map.set('Aus','Australia');
map.set('US', 'United States');
console.log(map);
for (const [key, value] of map) {
    console.log(key, value);
    
}
//  object -- forin loop
const myob={
    js:"javascript",
    java:"Java",
    cpp:"C++",
    rb:"ruby"
}
for (const key in myob) {
    console.log(key);
    
   console.log(myob[key]);
   
}

// array keys forin loop
const a1=['py','js','ty','cpp']
for (const key in a1) {
    console.log(key);
    console.log(a1[key]);
    
}

// for each loop  -- 1
a1.forEach(function(val){
    console.log(val);
    
})
//2
a1.forEach((val)=>{
    console.log(val);
    
})
//3
function print(){
    console.log("hello");
    
}
a1.forEach(print)

a1.forEach((item, index, a1)=>{
    console.log(item, index, a1);
    
})

// object in array -- foreach
const mycode=[{
    program:"javascript",
    file:"js"
},
{
    program:"python",
    file:"py"
},
{
    program:"java",
    file:"java"
}]
mycode.forEach((item)=>{
console.log(item.program);

})
// filter
const ar=[1,2,3,4,5,6,7]
const newAr=ar.filter((num)=>{
return num>5
})
console.log(newAr);

// map
const ar1=[1,2,3,4,5,6,7]
const newAr1=ar.map((num)=>{
    return num+10
    })
    console.log(newAr1);

    const newA1=ar.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
    console.log(newA1);
    
    // reduce -- acc initial value is 0 
    // arrow func reduce
    const a=[1,2,3,4,5,6,7]
const new1=ar.reduce((acc, curval)=> acc+curval
    ,0)
    console.log(new1);

    // function reduce
    const c=[1,2,3,4,5,6,7]
    const fun=ar.reduce(function (acc, curval){
        console.log(`${acc}, ${curval}`);
         return acc+curval
        },0)
        console.log(fun);
        