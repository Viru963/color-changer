const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click',(carryEvent)=>{
       if(carryEvent.target.id === 'grey'){
        body.style.backgroundColor="Grey";
        document.getElementById('change').innerHTML=' Grey Color'; 
       }else if(carryEvent.target.id==='white'){
        body.style.backgroundColor='white';
        document.getElementById('change').innerHTML=' White Color';
       }else if(carryEvent.target.id === 'blue'){
        body.style.backgroundColor='Blue';
        document.getElementById('change').innerHTML=' Blue Color';
       }else{
        body.style.backgroundColor= "yellow" ; 
        document.getElementById('change').innerHTML=' Yellow Color';
       };  
    });
});