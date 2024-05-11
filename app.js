const submit = document.querySelector('.add_button');
const budgetType = document.querySelector('.add_type').value;
const budgetDescription = document.querySelector('.add_description').value;
const budgetValue = document.querySelector('.add_value').value;

submit.addEventListener('click', function () {
    if (budgetType.val === "+") {
        alert("Addition sign");
    } else {
        alert("subtracion sign");
    }
    console.log("subtracion");
})  