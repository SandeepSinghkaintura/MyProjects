const createNotesBtn = document.querySelector('.btn');
const notesContainer = document.querySelector('.notes_container');
let notes = document.querySelectorAll('.input_box')

createNotesBtn.addEventListener('click', ()=>{
   let inputBox = document.createElement( 'p' );
   let img = document.createElement('img');
   inputBox.className='input_box';
   inputBox.setAttribute('contenteditable','true');
   img.src= 'https://cdn-icons-png.flaticon.com/128/3221/3221897.png';
   notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click',(e)=>{
   if(e.target.tagName === 'IMG'){
      e.target.parentElement.remove();
   }
})