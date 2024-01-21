onReady();

function onReady(){
console.log('js is working!!!')
}

function handleSubmit(event) {

    event.preventDefault();
        let firstNameElement = document.getElementById('firstnameInput');
        let lastNameElement= document.getElementById('lastnameInput');
        let idElement= document.getElementById('idInput');
        let titleElement= document.getElementById('titleInput');
        let annualSalaryElement= document.getElementById('annualSalaryInput');

        let inputContainer = document.querySelector('tbody');
        
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
    
    };

    function deleteRow(event) {

        event.target.parentElement.parentElement.remove();
    }      