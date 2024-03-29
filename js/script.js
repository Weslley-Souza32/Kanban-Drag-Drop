const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');
cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragEnd);
});

function dragStart(){
  dropzones.forEach(dropzone =>{
    dropzone.classList.add('highlight');
  });
  this.classList.add('is-dragging');
}

function drag(){
  
}

function dragEnd(){
  dropzones.forEach(dropzone =>{
    dropzone.classList.remove('highlight');
  });
  this.classList.remove('is-dragging');
}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragEnter);
  dropzone.addEventListener('dragover', dragOver);
  dropzone.addEventListener('dragleave', dragLeave);
  dropzone.addEventListener('drop', drop);
});
// no contexto das funções abaixo o this é o dropzone.
function dragEnter(){

}

function dragOver(e){
  e.preventDefault();
  this.classList.add('over');
  //Dragging the card
  const draggingCard = document.querySelector('.is-dragging');
  this.appendChild(draggingCard);
}

function dragLeave(){
  this.classList.remove('over');
}

function drop(){
  this.classList.remove('over');
}