const input = document.querySelector('input');
const ulist = document.querySelector('ul');
const Form = document.querySelector('form');






function ToDoList(task){
    let li = document.createElement('li');
    let newtask;

    if(task.name){
        newtask=task.name;
    }else{newtask=task};


    if(task.checked){
        ulist.classList.add("checked");
    }

    li.innerHTML=newtask;

    let Checkbtn = document.createElement('div');
    let dltbtn = document.createElement('div');

    let checkicon = document.createElement('i');
    let dlticon = document.createElement('i');

    checkicon.classList.add("fas","fa-check-square");
    dlticon.classList.add("fas","fa-trash");

    Checkbtn.append(checkicon);
    dltbtn.append(dlticon);

    li.append(Checkbtn,dltbtn);

    ulist.append(li);

    checkicon.addEventListener('click',function(){
        li.classList.toggle("checked");
        updatelocalstorage();
    });


    dlticon.addEventListener('click',function(){
        li.remove();
        updatelocalstorage();
    });

 }
 



 Form.addEventListener('submit',function(e){
    e.preventDefault();
    let newtask = input.value
    ToDoList(newtask);
    input.innerHTML="";
    updatelocalstorage();

});



function updatelocalstorage(){
    let list=[];
    const ulist = document.querySelectorAll('li');
    ulist.forEach((task)=>{
        list.push({
            name: task.innerHTML,
            checked: task.classList.contains("checked"),
        });
    });
    localStorage.setItem("list",JSON.stringify(list));
}

let list=JSON.parse(localStorage.getItem("list"));


list.forEach((item)=>{
    ToDoList(item);
});
