document.addEventListener("DOMContentLoaded", function(){
    const squares=document.querySelectorAll('#board div');
    let thisPlayer='X';
    //Initializing array to keep game state
    const stateofgame= Array(9).fill(null); 
    const status= document.getElementById("status")
    squares.forEach((square, index) => {
        square.classList.add("square");
        square.addEventListener('click',function(){
            if(!stateofgame[index]){
                stateofgame[index]=thisPlayer;
                square.textContent= thisPlayer;
                square.classList.add(thisPlayer);
        
                if(checkthewinner()){
                    status.textContent = `Congratulations! ${thisPlayer} is the Winner!`;
                    status.classList.add("you-won");
                }else{
                    thisPlayer= thisPlayer==='X'?'O':'X';
                }
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
        });
    });
    function checkthewinner(){
        const winningSequences=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        return winningSequences.some((seq) => {
            return(
                stateofgame[seq[0]]== thisPlayer &&
                stateofgame[seq[1]]== thisPlayer &&
                stateofgame[seq[2]]== thisPlayer 
            );
        });
    }
    function restartGame(){
        stateofgame.fill(null);
        squares.forEach((square)=> {
            square.textContent="";
            square.classList.remove('X','O','hover');
        });
        thisPlayer='X';
        status.textContent="Move your mouse over a square and click to play an X or an O."
        status.classList.remove("you-won");
    }
    NewGameButton.addEventListener("click",restartGame);

});

