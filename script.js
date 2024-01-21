let salaryAddTotal = 0;

onReady();

function onReady(){
//console.log('js is working!!!')
}


let countElement = document.querySelector('span');

countElement.textContent = salaryAddTotal;

console.log('Cross our fingers JS works still.');

onReady();

function handleSubmit(event) {


    event.preventDefault();
        let firstNameElement = document.getElementById('firstNameInput');
        let lastNameElement= document.getElementById('lastNameInput');
        let idElement= document.getElementById('idInput');
        let titleElement= document.getElementById('titleInput');
        let annualSalaryElement= document.getElementById('annualSalaryInput');

        let inputContainer = document.querySelector('tbody');
        let salaryContainer = document.querySelector('footer');
        inputContainer.innerHTML += `

 <td>
        ${firstNameElement.value}
        </td>
        <td>
        ${lastNameElement.value}
        </td>
        <td>
        ${idElement.value}
        </td>
        <td>
        ${titleElement.value}
        </td>
        <td>
        ${annualSalaryElement.value}
        </td><td>
  
        <button onClick="deleteRow(event)">Delete</button>
     
       </td>
        `;
    
        firstNameElement.value = '';
        lastNameElement.value = '';
        idElement.value = '';
        titleElement.value = '';
        annualSalaryElement.value = '';
    
        // use a loop to add each row of annual salary 

    };




    function deleteRow(event) {

        event.target.parentElement.parentElement.remove();
    }      