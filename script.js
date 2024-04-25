const buttons = document.getElementsByClassName('HTMLbutton');
console.log(buttons);

// Convert the collection to an array
const buttonArray = Array.from(buttons);

buttonArray.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
         //console.log(e);
         console.log(e.target);
         if(e.target.id=='grey-btn'){
            document.body.style.backgroundColor='grey'
         }
         if(e.target.id=='red-btn'){
            document.body.style.backgroundColor='red'
         }
         if(e.target.id=='blue-btn'){
            document.body.style.backgroundColor='lightblue'
         }
         if(e.target.id=='yellow-btn'){
            document.body.style.backgroundColor='yellow'
         }
         if(e.target.id=='purple-btn'){
            document.body.style.backgroundColor='purple'
         }
    });
});

    
