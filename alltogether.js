# basics
* console.log(x) , console.log(x), console.log(x)  can also be written as
   console.table([ x,y,z ])
* use const and let only and avoid var
* to initialize large number we use bigint
* symbol is a datatype use for uniqueness
* typeof null is object and typeof undefined is undefined
* conversion to number-
  "33" - 33
  "sameer" - NaN
  true - 1
  null - 0
  eg- let str="33"; let converttonum=Number(str); let convertback=String(converttonum)
* conversion to bool
  1 - true
  0 - false
  "" - false
  "xyz" - true
* confusing conversions-
  console.log("02" > 1) ->true
  console.log(null > 0) ->false
  console.log(null >= 0) ->true
  console.log(null == 0) -> false
  console.log("2" === 2) ->false
* primitive data types- string, number, Boolean, null, undefined, symbol, bigint
* reference or non-primitive datatypes- array, objects, functions
* to protect from getting polluted from global scope we can declare function in this  way or IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE) ->
	  (function chai(){
	  console.log(`im on fire`)
	  })();    ->im on fire
		  or 
	  ( (name)=>{
	  console.log(`hehehe` ${name})
	  })(`sameer`);   ->hehehe sameer
* falsy values -> false, 0, -0, 0n, "", null, undefined, NaN
* truthy values-> true, "0", 'false', " ", [], {}, function(){}, 
*
  
# strings
*  str.length- to find length
* to find index of some target- str.indexOf(target)
* to find last apperance index-str.lastIndexOf(targetx2)

* `str.slice(start,end) or "xyz".slice(start,end) - prints index from start to end, not including end. it is similar to substr function but substr takes starting point and length as variables.

* str.replace("word to replace", "word to replace with") eg- const str="hello world"; console.log(str.replace("he","javascript"))

* `to split the string into array- const words=value.split(" [this is delimiter] "); console.log(words); if we add space then is divides on basis of space if comma then comma, if b then b.

* to trim out extra spaces from the begining and end use- str.trim( )
* str.toUpperCase() and str.toLowerCase() to capital and small
* to convert string to integer - parseInt("digit") & parseFloat("") for float
* instead of normally concatenating strings we can be this--
  let abc="sameer"; let xyz="30"
  console.log("hello i am ${abc} and my balance is ${xyz} million)
  instead of console.log( "i am" + abc + "dbjashbja")
* console.log(xyz.indexOf('a'))  ->1
* console.log(xyz.charAt(2))      ->m
* let xyzz=xyz.substring(0,4)     ->same
* let xyzz=xyz.slice(-7,4)            ->?
* xyz.trim()   -> remove all the spaces present
* let xyzz="sammer is king";
   console.log(xyzz.replace('is','was'))
* console.log(xyzz.includes('king'))   ->true
* console.log(xyzz.split(' '))    ->gives an array of string conssisting of string present in this but dividedby space( ' ' )


# arrays

* arr.push(x)- to push in array, arr.pop( )- to pop from last, arr.shift()- to pop from front, arr.unshift(x)- to push from front
* lenght-> arr.length
* finalarray=arr.concat(secarray); console.log(finalarray) - to concatenate both arrays
* arr.forEach(function)- this call this function for size of array times. similar to forloop, but this expect a function as its argument
* to add in the front of array..its a type of shifting the array to the right-   arr.unshift(digit)
  to remove from the front and all remaining elements gets shiffted to left-   arr.shift()
* arr.includes(9)  ->tells whether 9 is present in the array or not
* arr.indexOf(3)   ->tells the index of 3
* arr.join()   ->converts the array to strings seperated by commas
* arr.slice(1,n)  ->prints the array from index 1 to n-1
* arr.splice(1,4)  ->prints the array from index 1 to 4 and orginal array gets cuts... rather having from 1 to n it will now have 5 to n
* to merge two arrarys-
  let mix=arr1.concat(arr2)   or
  let mix=[...arr1, ...arr2, ...arr3 ] and so on...it will merge all arrays togther
* if you have an array inside of an array inside of an array you can flat it out by ->   let newarr=arr.flat(infinity)  ->this infinity is the depth of arrays
* to convert to array  ->console.log(Array.from("sameer"))   ->['s', 'a', 'm', 'e', 'e', 'r' ]  or
  let x=1,y=2,z=3; console.log(Array.of(x,y,z));   ->[1,2,3]
* 

# classes

* constructor- class animal{
   constructor(name, legcount,speak){
  this.name=name;
  this.legcount=legcount;
  this.speak=speak;
  }
  static mytype(){
  console.log("aniimall")
  }
  speak(){
  console.lof("hi there" + this.speak )
  }
}
let dog=new animal( "doggy" , 4 , "bhowbhow" );
dog.speak();
console.log( animal.mytype( ) )
*  create object- new animal...
* function under class, can only be called ont he object of the class-  speak()
* static methods are associated to class itself not object

# JSON and APIs

* to convert object to string-
  const users='{"name": "sameer", "age": 20, "gender":"male"}'
  console.log(users["0"])  //print sameer
* to convert back to object-
  const user=JSON.parse(users)
   console.log(user["gender"]);  //print male
* to convert object to string-
  const finalstring=JSON.stringify(user)
  console.log(finalstring)
* syntax  -> {
  { },
  { },
  { }
  }
  or can be in array form  -> [
  { },
  { }
  ]
# dates
let x= new Date()
console.log(x.toString());  ->todays date
let y=new Date(2024,6,21,5,3)   or("01-14-2023")
	y.toString()   ->Mon july 21 2024
	y.toLocaleString()   -> Mon july 21 2024 5:03:00 AM
let z= Date.now()  ->current date in miliseconds
let a=new Date();  console.log(a.getMonth()+1)
or a.getDay()
* customize timzezone and etc etc-
  a.toLocaleString('Default' , {weekday:"long" , timeZone: 'etc'})



# math and numbers

  * Math.random(), Math.ceil(2.3)->3, Math.floor(2.3)->2, Math.round(value), Math.ax(5,10,15),Math.pow(value,2), 
  * let a=100; console.log(a.toString())   ->converted to string
  * console.log(a.toFixed(2))  ->100.00
  * console.log(a.toPrecision(3))   ->i/p->123.89   o/p->124
  * let a=4.2; Math.round(4.2)  ->4
    Math.ceil(4.2)  ->5   Math.floor(4.2)  ->4
    Math.min(4,2,5,9,3)   ->2
* to print random numbers bw a min vallue and a max value-
 console.log( Math.floor( Math.random() * (max-min +1 ))+10 )
* math.random gives random numbers between 0 and 1 including both
# objects

const mySyn= symbol("key1")
* obj: {
  key1 : value1,
  key2 : value2,
  key3 : value3'
  [mySyn] : "mykey1"
  }
  Object.keys()- prints all the keys
  Object.values() - prints all the values
  Object.entries()- prints keys with its values
  * to add more properties in an object- 
    let newobj = Object.assign( {}, obj, {newproperty: "newvalue" });
    console.log(newobj)   
* console.log(obj.key1)  or console.log(obj["key1"])  or const {key1 : k}=obj  console.log( k ) ->to access key1 value
* to access symbol in object  ->obj[mySyn]
* to lock your object or didnt want your object to be modified    -> Object.freeze(obj)
* to add function in object  ->
	  obj.greeting=function(){
	  console.log("hellooo");
	  }
	  console.log(obj.greeting());
	* obj.greeting2=function(){
	  console.log(`hellooo, ${this.key1}`);
	  }    ->how to access inner items
	
OBJECTS SINGLETON
* you can nest object inside object inside object...
   const obj1={
   fullname: {
   firstname:"sameer",
   lastname: "gupta"
	   }
   }
   console.log(obj1.fullname.firstname);   ->sameer
* to merge objects   -> const obj3= Object.assign({}, obj1, obj2,obj4)  or
  const obj3= {...obj1, ...obj2, ...obj3 }
* to check if the given value is present in the object or not  ->
  obj1.hasOwnProperty('xyz')  ->it finds xyz in obj1, if present returns true
  
  

# functions

* function syntax
  function funcname(n){    //no need to mention type of n along with it
  ...
  return xyz;
  }
  * declare function-
  let ans=funcname(10)
  console.log(ans);
  * callback function-
    it passes function as argument
    function funcname(a,b,fn){
    }
or
    function funcname(a, b, function(n){return n*n} ) {
    } 
* to pass default value in function ->
  function xyz(user = "sam"){
  return `${user} just logged in`
  }
  console.log(xyz("sameer"))   ->sameer just logged in
  console.log(xyz( ))   ->sam just logged in(in case no argument is paased)
* function calculate( ...num1){
* return num1 }
  console.log(calculate(200,450,560,233))   
   ->[200,450,560,233]
* types of way to define functions->
  function addone(num){
  return num+1
	  }     or
  const addone=function(num){
  return num+1
	  }   ->int his case we cant access function before declaration  like  addone(5) can not be above this function
	

# arrow function
* this keyword is used inside object and also globally but not inside of function
* example for using this keyword inside object->
  const user={
  name : "sameer",
  age : 21,
  welcomm : function(){
  console.log(`${this.username},heyyy`);
		  }
	  }
	user.welcomm()  ->sameer heyyy
	user.name="sam"
	user.welcomm   -> same heyyy
	
* ARROW FUNCTION
	*   const addtwo=(num1,num2) =>{
	  return num1+num2
		  }
		console.log(addtwo(2,4))
	* when we have only one line of code inside arrow function we can write in this way also->
		  const addtwo=(num1,num2)=>(num1+num2)
		  console.log(addtwo(2,4))
	
	  


# asynchronous functions
* javascript is single threaded..
* this async functions behave in a type of multi threaded way.. like.. there are some tasks JS thread needs to wait for so it temporarily do some other tasks in the meantime..
* setTimeout and readfile are 2 examples of an asynchronous functions
	  function xyz(){
	  console.log("hey babydoll") }
	  setTimeout(xyz, 1000);
  this will call the xyz func after one second.
	  readfile("a.txt", xyz);
	this will execute the xyz func after it reads the file, till then it will execute aage ke codes
* syntax for readFile-
	const fs=require("fs");
	fs.readFile("a.txt", "utf-8", function(err, data){
	console.log(err);
	console.log(data);
		data=data+" its me.";
	    fs.writeFile;
	});
* callback hell ex- calling settimeout inside settimeout.
* if remaining code depends on readfile then those codes should be inside the async functions.



# callbacks
this means using function itself as an argument/input.
	eg-
		function square(n) {
		return n * n;
		}
		function cube(n) {
		return n * n * n;
		}
		function sumOfSquares(a, b) {
		let square1 = square(a); 
		let square2 = square(b);
		return square1 + square2;
		}
		function sumOfCube(a, b) {
		let square1 = cube(a);
		let square2 = cube(b);
		return square1 + square2;
		}
		let ans=sumOfCube(1, 2);
		console.log(ans);

both seems to be similar and repeating..
instead of sumofsquare or sumof cubes creating sumofsomtheing function-
		function someofsomething(a,b,fn){
		let square1 = fn(a);
		let square2 = fn(b);
		return square1 + square2;
		}
		let ans sumOfCube(1, 2,square);
		console.log(ans)
# promises
* better way to write async functions..
* you can write your own async function but under the hood other prebuilt async functions.. you just wrap around other async function to create something new..
* ex-
	  const fs=require("fs");
	  function myown(cb){
		fs.readFile("a.txt", "utf-8", function(err, data){
		console.log(err);
		console.log(data);
			data=data + " its me.";
		    fs.writeFile(a.txt, function(){
		    cb();
		    })
		});
		}
		myown(function(){
		console.log("created my own sync")
		})
	in promisified functions you dont take callback function as input..and return a promise when execution completed.
* its just like a class in javascript
* syntax-
	  function promisifiedMyOwnSetTimeout(duration) {
	    const p = new Promise(function(resolve) {
	        setTimeout(resolve, duration);
	    });
	    return p;
	}
	
	// promise
	const ans = promisifiedMyOwnSetTimeout(1000);
	ans.then(function() {
	    console.log("timeout is done");
	});


# conditionals and loops

 * NULLLISH COALESCING OPERATOR ( ?? )->
	let a;
	a=5 ?? 10    ->5
	a=null ?? 10  ->10
	a=undefined ?? 10   ->10
    a=null ?? 10 ?? 5   ->10
*  TERNIARY OPERATOR ( ? )  ->
	condition ? true : false
	eg->
	let a=100;
	a<=80 ? console.log("ok") : console.log("not ok")
* SWITCH(x){
	 case 1:
	 case2:
	 .
	 .
	 .
	 default():
	}
* FOR-OF LOOP
  can be used for arrays, maps but not objects
	  for(const i of arr){
	  console.log(i)
	  }
* FOR-IN LOOP
  can be used in objects, arrays
  syntax with example of obj
	  for(const key in obj1){
	  console.log(key, obj1[key])
	  }
  syntax for array
		for(const key in arr){
		console.log(arr[key])
		}
* FOR-EACH LOOP
  -> array_name.forEach( function(val){
	 console.log(val);
	  } )
  -> arr.forEach( (item,index,arr)=>{
	  console.log(item,index,arr);
	  })
  ->const mycode=[ {lang : "js", full : "javascr"}, {lang:  "", full : ""}, {} ]
	  mycode.forEach((item)=>{console.log(item.lang);
	  })   ->this shows how to acccs each object in an array
* 
# map and filter
* const map= new Map()
	map.set( 'in', "india" )
	
	for(const key of map){
		console.log(key)
		}    or
	for(const [key, value] of map){
		console.log(key,value)
		}
* FILTER
  const arr= [1,2,3,4,5,6]
  const newnums=arr.filter( (num)=>num>4 ) 
  console.log(newnums);   -> [5,6]
	  //agar {num>4} kar rhe ho iske jageh to sath me return use krna prega i.e. {return num>4}
* MAP
	  let x=arr.map((num)=>{return num+10})
	  console.log(x);   ->[11,12,13,14,15,16]
* chaining->
  using multiple filter or maps together
  let x= arr.map(()=>{}).map(()=>{}).filter(()=>{})
* REDUCE
	  let y=arr.reduce(function(acc, currval){
	  console.log(acc, currval) }, 0)
	  console.log(y)   ->21

	 let y=arr.reduce((acc,currval)=>acc+currval, 0)
	 console.log(y)  ->21


# projects

color changer project 1->

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

==bmi calculator project 2->==

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

==local clock project 3->==
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

==guess the number project 4, used method of binary sort->==


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


# Events
 document.getElementById('owl').onclick = function(){
        alert("owl clicked")
    }

attachEvent()
 jQuery - on

// type, timestamp, defaultPrevented
 //target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul");
}, false)

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
    e.stopPropagation()
}, false)
    
document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation()
    console.log("google clicked");
}, false)
   
    
document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})
    
removeIt.parentNode.removeChild(removeIt)

# DOM

* to get something from the html document, for eg we want to get all the links from docs -> console.log(document.link)
* to access somthing by their id  -> document.==getElementById==(' '), by class_name-> x.==getElementByClassName==(' ')
* to manipulate something with their id -> document.==getElementById('').innerHTML===""
* x.getElementById('id_name').==getAttribute==('attribute') ->attribute can be id or class or etc =>o/p is attribute_name
* ==seAttribute== to change any attribute->eg- x.setAttribute('attribute', 'attribute_name')
* ==id_name.innerText, id_name.innerContent, id_name.innerHTML== ->
  innertext gives the visible text and innercontent gives thewhole texts, visible and not visible both.
*  ==querySelector==
	   x.querySelector('h2') 
	   x.querySelector(#id_name)
	   x.querySelector(.class_name)
	   ('input[type="password")'
	   ('p : first-child')
	   x.querySelector('ul')
		   const myul=x.querySelector('ul')
		   myul.querySelector('li')
		   const turng=myul.querySelector('li')
		   turng.syle.backgroundColor="green"
	    x.querySelectorAll('li')  ->array jaisa dikhta hai
	    
* ==nodelist and HTML collection== are similar to array not not exactly same.
	* converting HTML collection to array->
	  x.getElementsByClassName('list-item')
	  const y=x.getElementsByClassName('list-item')
	  Array.from(y)
  
* to access first and last child ->
  parent.firstElementChild
  parent.lastElementChild
* to access parent element-> x.parentElement
* x.nextElementSibling

* CREATE ELEMENT IN DOM
  const div=document.createElement('div')
  console.log(div)
  div.className="main"
  div.id="cum"
  div.setAttribute("title", "generated title")
  div.style.backgroundColor="green"
  div.style.padding="12px"
  // div.innerText="sameer is king"
  const addtext=document.createTextNode("sameer is king")
  div.appendChild(addtext)
  document.body.appendChild(div)

* EDIT AND REMOVE ELEMENT IN DOM

<ul class="language">
<li>java</li>

  function addlang(langname){
	  const li=document.createElement('li')
	  li.innerHTML=`${langname}`
	  document.querySelector('.language').appendChild(li)
	  }
	  addlang("python")
optimisedway->
	function optaddlang(langname){
	const li=document.createElement('li')
	li.appendChild(document.createTextNode(langname))
	document.querySelector('.language').apppendChild(li)
}
	optaddlang('golang')

EDIT->
  const seclang=document.querySelector("li : nth-child(2)")
  console.log(seclang)
  const newli=document.createElement('li')
  newli.textContent="hehe"
  seclang.replaceWith(newli)
  edit2->
  const firstlang=document.querySelector("li : first-child")
  firstlang.outerHTML='<li>typescript...'

REMOVE->
 const lastlang=document.querySelector("li : last-child")
lastlang.remove()
