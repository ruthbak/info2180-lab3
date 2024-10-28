document.addEventListener("DOMContentLoaded", function(){
    const squares=document.querySelectorAll('#board div');
    let thisPlayer='X';
    //Initializing array to keep game state
    const stateofgame= Array(9).fill(null); 
    squares.forEach(square => {
        square.classList.add("square");
        square.addEventListener('click',function(){
            if(!stateofgame[index]){
                stateofgame[index]=thisPlayer;
                square.textContent= thisPlayer;
                square.classList.add(thisPlayer);
                thisPlayer= thisPlayer==='X'?'O':'X';
            }
        });
        //Changes the look of the square whenever a user moves their mouse over a square 
        square.addEventListener("mouseover", function(){
            if(!stateofgame[index]){
                square.classList.add("hover");
            }
        });
        //Return square to the original style when the user's mouse leaves the square
        square.addEventListener("mouseout", function(){
            square.classList.remove("hover");
        })
    });

});

