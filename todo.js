const input=document.querySelector('#input');
const listContainer=document.querySelector('#list-container');

document.querySelector('#submit').addEventListener("click",()=>{
    if(input.value===''){
        alert("You must write something !!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        input.value="";
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
        saveData();
    }
});
listContainer.addEventListener("click",function(e){
     if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
     }
     if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
     }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()