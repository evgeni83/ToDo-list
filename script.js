'use strict';

var formGroup = document.getElementsByTagName('form');
var taskText = document.querySelector('.form-control');
var listItems = document.querySelectorAll('.list-group-item');
var removeButtons = document.querySelectorAll('.remove-btn');
var toDoList = document.querySelector('.list-group');
var listArea = document.querySelector('.list-area');


formGroup[0].addEventListener('submit', function (event) {
  event.preventDefault();

  if (taskText.value) {
    var newListItem = document.createElement('li');
    newListItem.className = "list-group-item";
    newListItem.innerHTML = taskText.value;
    toDoList.appendChild(newListItem);
    
    var newRemoveButton = document.createElement('button');
    newRemoveButton.className = "btn btn-danger btn-sm float-right remove-btn";
    newRemoveButton.innerHTML = "X";
    
    newListItem.appendChild(newRemoveButton);
   
    taskText.value = '';
    
    listItems = document.querySelectorAll('.list-group-item');
    removeButtons = document.querySelectorAll('.remove-btn');  
  };

  if (listItems.length > 0) {
    document.getElementById('list-is-empty').classList.add('d-none');
  };
});

listArea.addEventListener('click', function (event) {
  for (var i = 0; i < listItems.length; i++) {
    if (event.target == removeButtons[i]) {
      event.target.parentNode.remove();
    };
    
    if (event.target == listItems[i]) {
      if (event.target.classList.contains('done')) {
        event.target.classList.remove('done');
      } else {
        event.target.classList.add('done');
      };
    };
  };
  


  listItems = document.querySelectorAll('.list-group-item');
  removeButtons = document.querySelectorAll('.remove-btn');
  
  if (listItems.length == 0) {
    document.getElementById('list-is-empty').classList.remove('d-none');
  };
});

