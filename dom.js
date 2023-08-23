// let count =0;
// for(count=0; count<=10; count++){
// console.log(count);
// }



// const calculateAge= (num)=>{
//     console.log(2022-num);
// }

// calculateAge(1985);




window.onload = ()=>{
    let localData = localStorage.getItem('todoList');
    console.log(localData);
    
    let toDoArr = JSON.parse(localData);

    toDoArr.forEach((e)=>{
        const item = document.createElement('p');
            toDoItems.appendChild(item);
            item.innerHTML = e;
            item.classList.add('item');
            const btn = document.createElement('button');
            btn.innerText = 'delete';
            btn.classList.add('close');
            item.appendChild(btn);
            document.getElementById('tagname').value = '';
    })

//Deleting todo items//

const btn = document.querySelectorAll('.close');

btn.forEach((button)=>{
    button.onclick =()=>{
        button.parentElement.style.display = 'none';
        toDoArr.splice(button, 1);
        console.log(toDoArr);
    }

});
    
}

let toDoArr = [];

const toDoItems = document.getElementById('todo-items');
    // toDoItems.innerHTML = ''; //resetting the list





//Adding a todolist item//
document.getElementById('btn').addEventListener('click', (e) =>{

    const inputVal = document.getElementById('tagname').value;


    if(inputVal ==''){
        alert('You have not enter any task!!');
        document.getElementById('todo-items').innerHTML = '';
        e.preventDefault();

    } else if (!isNaN(inputVal)) {
        alert('Sorry! you can only add a text!');
        e.preventDefault();

    }  else {
        toDoArr.push(inputVal);
        console.log(toDoArr);
        const item = document.createElement('p');
        toDoItems.appendChild(item);
        item.innerHTML = inputVal;
        item.classList.add('item');
        const btn = document.createElement('button');
        btn.classList.add('close');
        btn.innerText = 'delete';
        item.appendChild(btn);
        document.getElementById('tagname').value = '';
        localStorage.setItem("todoList", JSON.stringify(toDoArr));
    }
     
    e.preventDefault();
});


















