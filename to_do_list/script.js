const inputBox =document.querySelector('#input_box');
const addBtn =document.querySelector('#btn');
const task = document.querySelector('#list_container');

addBtn.addEventListener('click',()=>{
    if(inputBox.value===''){
        alert('write something!');
    }
    else{
       let li = document.createElement('li');
       
      
       li.innerHTML = inputBox.value;
       task.appendChild(li);
       let span = document.createElement('span');
       span.innerHTML='\u00d7';
       li.appendChild(span);
    }
    inputBox.value='';
    saveData();
})

 task.addEventListener('click', function(e) {
//   console.log(e.target.tagName); its tag CAPITAL N +ame
  
if(e.target.tagName === 'LI'){
    
    e.target.classList.toggle("checked");
    saveData();
  

}else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
    saveData();
}
 },false);
 
 function saveData(){
    localStorage.setItem('data',task.innerHTML);
 }
 function showData(){
    task.innerHTML= localStorage.getItem('data');
 }
 showData();