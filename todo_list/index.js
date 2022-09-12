let  input = document.querySelector('.form-todo #input');
let submit = document.querySelector('#btn');

let addList = document.querySelector('.addList');

let finalList = document.querySelector('.final-list');

let ls = localStorage.getItem('todo');
let todo  = ls ? JSON.parse(ls):[];
submit.addEventListener('click', (e) =>{
    e.preventDefault();
    
    if(input.value !== ""){
        todo.push(input.value);
        localStorage.setItem('todo', JSON.stringify(todo));
        location.reload();
        input.value = "";
    }
    
});



todo.map( (item, index)=>{
    let newTask = document.createElement('div');
    // 
    // 
        newList = newTask.innerHTML = `
        <div class="editPart render">
            <input type="text" id="editInput"/>
            
                <img src="./save4.png" class="editBtn ebtn" onclick="save()" />
                <img src="./cross.png" class="editBtn" onclick="cancle()" />
            
        </div>
        <div class="addList container">
            <div class="task">${item}</div>
            <div class="action-btn" >
                <img src="./edit.png" alt="" class="icon editIcon" onclick="edit(${index})">
                <img src="./delete.png" alt="" class="icon editIcon" onclick="del(${index})">
            </div>
            
        </div>
            
        `
        newTask.classList.add('main1')
        finalList.append(newTask)
})

function del(idx){
    let rest = todo.filter( (data, index)=>{
        return idx!==index;
    })

    localStorage.setItem('todo', JSON.stringify(rest));
    location.reload();
}

let editPart = document.querySelector(".editPart")
function edit(idx){
    
    editPart.children[0].value = todo[idx];
    // console.log(editPart.children[0].value);
    editPart.classList.remove('render')
    document.querySelector(".ebtn").alt = todo[idx];
    // console.log(x);
}
     
function save()
{
    let idx = todo.indexOf(editPart.children[1].alt);
    // console.log();
    todo[idx] = editPart.children[0].value;
    localStorage.setItem('todo', JSON.stringify(todo));
    location.reload();

}

function cancle()
{
    editPart.classList.add('render')
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> search part   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




let search = document.querySelector('#search');

search.addEventListener('keyup', (e) =>{
    let searchInput = search.value;
    let finalListChild = finalList.children;
    for(let i=0;i<finalListChild.length;i++)
    {
        let eTask = finalListChild[i].children[1].innerText
        // console.log(eTask);
        if(eTask)
        {
            if(eTask.toUpperCase().indexOf(searchInput.toUpperCase())>-1)
            {
                finalListChild[i].style.display = "";
            }
            else{
                finalListChild[i].style.display = "none"
            }
        }

    }

})