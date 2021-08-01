import { taskCreatorToPay, taskCreatorToBuy, taskCreatorToDeliver, taskCreatorToReceive } from './classes.js';
let taskOnePay;
taskOnePay = new taskCreatorToPay('Mario', 600, 'Plumbing work');
console.log(taskOnePay.return());
const form = document.querySelector("#form");
const select = document.querySelector('select');
const amount = document.querySelector('#amount');
const description = document.querySelector('#description');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let task = {};
    if (select.value === "To pay") {
        task = new taskCreatorToPay(select.value, amount.valueAsNumber, description.value);
    }
    if (select.value === "To Receive") {
        task = new taskCreatorToReceive(select.value, amount.valueAsNumber, description.value);
    }
    if (select.value === "To buy") {
        task = new taskCreatorToBuy(select.value, amount.valueAsNumber, description.value);
    }
    if (select.value === "To deliver") {
        task = new taskCreatorToDeliver(select.value, amount.valueAsNumber, description.value);
    }
    console.log(task);
});
