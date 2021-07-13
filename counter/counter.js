
            let Display = document.querySelector('.Display');
            let lowercount = document.querySelector('.Lower-count');
            let addcount = document.querySelector('.Add-count');
            let count = 0;
            
            updateDisplay();

addcount.addEventListener("click",()=>{
    count ++
    if(count > 50){
       if(count = 50){
           count = 0;
       }
       }
    updateDisplay();
}) ;

lowercount.addEventListener("click",()=>{
    count--; 

updateDisplay();
});

function updateDisplay(){
    Display.innerHTML = count;
};





