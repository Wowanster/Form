"strict mode";

//input value is true
let input = document.querySelectorAll(".input");
for (let inp of input) {
 inp.addEventListener("blur", function (event) {
    if (event.target.value !== "") {
      event.target.labels[0].classList.add("input--active");
    } else {
      event.target.labels[0].classList.remove("input--active");
    }
  });
}


//scroll on click
document.addEventListener("click", function (event) {
  let anhors = event.target.hash;
  if (anhors != undefined && anhors != "") {
    event.preventDefault();
    document.querySelector(anhors).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

//scroll block
function onEntry(entry) {
  entry.forEach(function (change) {
    if (change.isIntersecting) {
      change.target.classList.add("form--show");
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let section = document.querySelectorAll(".form__block");
for (let elm of section) {
  observer.observe(elm);
}

//form validation
let form = document.querySelector(".form");
let Country=document.querySelector("#Country");

//country add telephone number
Country.onchange=function(){
  if(Country.value==='Afghanistan'){
    var maskOptions = {
      mask: '+{38}(000)000-00-00'
    };
  }
  else if(Country.value==='Albania'){
    var maskOptions = {
      mask: '+{23}(000)000-00-00'
    };
    
    // new IMask(elements, {
    //   mask: '+{355}(0)000-00-00',
    // });
  }
  // else if(Country.value==='Algeria'){
  //   // new IMask(elements, {
  //   //   mask: '+{213}(0)000-00-00',
  //   // });
  // }
  // else if(Country.value==='Andorra'){
  // //   new IMask(elements, {
  // //     mask: '+{376}(0)000-00-00',
  // //  });
  // }
  // else{
  //   // new IMask(elements, {
  //   //   mask: '+{0}(000)000-00-00',
  //   // });
  // }
  var mask = IMask(element, maskOptions);
}


var element = document.getElementById('Phone');

// var maskOptions = {
//   mask: '+{38}(000)000-00-00'
// };
// var mask = IMask(element, maskOptions);



form.addEventListener("submit", formSend);

  async function formSend(event){
  event.preventDefault();
  err= addEror();
  let formData = new FormData(form);

  if (err === 0) {
    let response=await fetch('send.php',{
      method:'POST',
      body: formData
    });
   if(response.ok){
    let result = await response.json();
    alert(result.message);
   }
   else{
     alert("Ошибка");
   }
  }
}


let inputText = document.querySelectorAll(".input__text");
let checkbox=document.querySelector(".checkbox");
let check=document.querySelector(".checkbox__label");
let FirstName=document.querySelector("#FirstName");
let SecondName=document.querySelector("#SecondName");
let password=document.querySelector("#password");
let ConfirmPassword=document.querySelector("#ConfirmPassword");
let email=document.querySelector("#email");


 let addEror = () => {
  let err=0;
  if(!FirstName.value){
    addMessage(0,'Fill in the field');
    err++;
  }
  if (FirstName.value.length>0 && FirstName.value.length<=2) {
    addMessage(0,'The name must be more than 2 characters');
    err++;
  }
  if(!SecondName.value){
    addMessage(1,'Fill in the field');
    err++;
  }
  if (SecondName.value.length>0 && SecondName.value.length<=2) {
    addMessage(1,'The name must be more than 2 characters');
    err++;
  }
  if(!Country.value){
    addMessage(2,'Fill in the field');
    err++;
  }
  if(!Phone.value){
    addMessage(3,'Fill in the field');
    err++;
  }
  if(!password.value){
    addMessage(4,'Fill in the field');
    err++;
  }
  if(!password.value.match(passwordPattern)){
    addMessage(4,'Password must have 1 letter, 1 number and one symbol');
    err++;
  }
  if(!ConfirmPassword.value){
    addMessage(5,'Fill in the field');
    err++;
  }
  if(password.value!==ConfirmPassword.value){
    addMessage(5,'Password does not match');
    err++;
  }
  if(!email.value){
    addMessage(6,'Fill in the field');
  }
  if(!email.value.match(emailPattern)){
    addMessage(6,'Email is not correct');
    err++;
  }
  if(!checkbox.checked){
    check.classList.add('checkbox--error');
    setTimeout(function(){
      check.classList.remove('checkbox--error');},4000);
      err++;
  }
  return err;
};
let passwordPattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{3,15}$/;
let emailPattern=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

let addMessage=function(index,text){
  section[index].lastElementChild.classList.add('input--error');
  section[index].lastElementChild.textContent=text;
  setTimeout(function(){
    section[index].lastElementChild.classList.remove('input--error');},4000);
}




