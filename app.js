const table = document.getElementById("table");
const iB1 = document.getElementById("Student_Name");
const iB2 = document.getElementById("Student_id");
const iB3 = document.getElementById("Email-Id");
const iB4 = document.getElementById("mobile");
const searchForm = document.querySelector('form');



// function add()
// {
//    <button  onclick="add()" type="button">Submit</button>  ==>changes in Html to use this function 
//     var row = table.insertRow(table.rows.length);

//     console.log(table.rows.length);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     cell1.innerHTML=iB1.value;
//     cell2.innerHTML=iB2.value;
//     cell3.innerHTML=iB3.value;
//     cell4.innerHTML=iB4.value;
// }


searchForm.addEventListener('submit', (e) => {
    


    
    e.preventDefault();
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell0 = row.insertCell(4);   //Delete Button;
    var cell00 = row.insertCell(5);   //EDIT bUTTON
    cell1.innerHTML = iB1.value;
    cell2.innerHTML = iB2.value;
    cell3.innerHTML = iB3.value;
    cell4.innerHTML = iB4.value;
    
    cell0.innerHTML = `<button onclick="del(this)" type="button" class="button"> Delete</button>`;
    cell00.innerHTML = `<button onclick="edit(this)" type="button" class="button"> Edit</button>`;
    cell0.classList.add('noborder');
    cell00.classList.add('noborder');
        
   
    iB1.value = '';
    iB2.value = '';
    iB3.value = '';
    iB4.value = '';

    saveData();

    
});

function del(o)
{   
     // Get the parent row of the clicked button 
    var p = o.parentNode.parentNode;
    
    var x= confirm("are you sure");
    

    if (x == true) {
          //Removing the node
    p.parentNode.removeChild(p);
    } 


    //Saving the state to local storage
    saveData();
    
}


function edit(o) { 
            
            // Get the parent row of the clicked button 
            let row = o.parentNode.parentNode; 
            
            // Get the cells within the row 
            let nameCell = row.cells[0]; 
            let IDCell = row.cells[1]; 
            let emailCell = row.cells[2]; 
            let mobileCell = row.cells[3]; 
            
            // Prompt the user to enter updated values 
            let nameInput = 
                prompt("Enter the updated name:", 
                    nameCell.innerHTML); 
            let IDinput = 
                prompt("Enter the updated Student_id:", 
                    IDCell.innerHTML); 
            let emailInput = 
                prompt("Enter the updated mobile details:", 
                    emailCell.innerHTML 
                ); 
            let mobileInput = 
                prompt("Enter the updated address:", 
                    mobileCell.innerHTML 
                ); 
            
            // Update the cell contents with the new values 
            nameCell.innerHTML = nameInput; 
            IDCell.innerHTML = IDinput; 
            emailCell.innerHTML = emailInput; 
    mobileCell.innerHTML = mobileInput; 
    
    //Saving the State to local Storage
    saveData();
   
} 
        

function lettersOnly(input)
{   
    //Regular expression For Name field to accept only characters
    var regex = /[^a-z]/gi;

    input.value = input.value.replace(regex, "");
}


function saveData()
{
    localStorage.setItem("d", table.innerHTML);
}

function showData()
{
    table.innerHTML = localStorage.getItem("d");

}
  showData();
