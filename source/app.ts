import { taskCreatorToPay,taskCreatorToBuy,taskCreatorToDeliver } from './classes.js'

import {userInfo} from './interfaces.js'
let taskOnePay : userInfo;
 taskOnePay = new taskCreatorToPay('Mario' , 600 ,'Plumbing work');
console.log(taskOnePay.return())

const form  = document.querySelector("#form") as HTMLFormElement ;
const select = document.querySelector('select') as HTMLSelectElement;
const amount = document.querySelector('#amount')as HTMLInputElement;
const description = document.querySelector('#description')as HTMLInputElement;

form.addEventListener('submit',(e : Event)=>{
    e.preventDefault();
   let task= {};
    if(select.value === "To pay"){
     task = new taskCreatorToPay(select.value,amount.valueAsNumber,description.value)
   }
if(select.value === "To buy"){
     task = new taskCreatorToBuy(select.value,amount.valueAsNumber,description.value)
}
if(select.value === "To deliver"){
     task = new taskCreatorToDeliver(select.value,amount.valueAsNumber,description.value)
}
    console.log(task)
})