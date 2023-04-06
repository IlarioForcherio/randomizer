//VARIABLES
let userInput = document.querySelector('.inputItem');
const plusButton = document.querySelector('.button');
let itemsArray = [];
let randomNumber = Math.floor(Math.random() * 10);
const randomButton = document.querySelector('.random');
const clearButton = document.querySelector('.clear');
const main = document.querySelector('main')
const ul = document.querySelector('ul')
let randomItem = document.querySelector('.randomItem');
const loader = document.querySelector('.loader');

//ADD ITEMS BUTTON

plusButton.addEventListener('click', function(){
    
    const li = document.createElement("li");
    const a =  document.createElement('a');
    const div = document.createElement('div');
   //push input value into an array 
    itemsArray.push(userInput.value);
   
      
       li.classList.add("d-flex","justify-content-between")
      
       ul.appendChild(li);
      
       li.appendChild(div);
       div.innerHTML = userInput.value
       li.appendChild(a);
      
       a.classList.add("delete","text-center");
       a.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
      

   // delete button
    a.addEventListener('click', function() {
        const li = this.parentNode;
        li.remove();
      });

     
});



//RANDOM EVENT

randomButton.addEventListener('click', function(){
    main.classList.add("d-flex","justify-content-center","align-items-center");
    loader.classList.remove('d-none');
    ul.classList.add('d-none');
    let randomNumber = Math.floor(Math.random() * itemsArray.length);
    
    
    setTimeout(function() {
        loader.classList.add('d-none');
        randomItem.innerHTML = `${itemsArray[randomNumber]}`
      }, 1000);
     // console.log(itemsArray)
    


});

//CLEAR EVENT

clearButton.addEventListener('click', function(){
    ul.innerHTML = '';
    userInput.value = '';
    itemsArray = [];
    randomItem.innerHTML = '';
    ul.classList.remove('d-none');
    main.classList.remove("d-flex","justify-content-center","align-items-center");
    
   
    
} );












 


