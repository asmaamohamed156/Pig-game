var score,roundScore,activePlayer,diceDom,gamePlaying,previousDice;
init();
 
//document.querySelector('#current-' + activePlayer).textContent=dice;

//var x=document.querySelector('#score-0').textContent;


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        // random number from 1 to 6
        var dice=Math.floor(Math.random()*6)+1; 
        //display the result 
        diceDom=document.querySelector('.dice');

        diceDom.style.display='block';
        diceDom.src='dot-' + dice +'.png';

        previousDice=dice;
        if(dice===6&&previousDice===6){
            scores[activePlayer]=0;
            document.querySelector('#score-'+activePlayer).textContent='0';
            nextPlayer();
        }
        else if(dice!==1){
            //add the score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent=roundScore;
        }
        else{ 
            //it's the other player turn        
            // if active player=1 make it 0 if =0 make it 1
            nextPlayer();
        }
    }
   

});

 
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //add current score to global score
        scores[activePlayer]+=roundScore;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

        var input=document.querySelector('.winningInput').value;
        var winningScore;
        //if there is value in input field
        if(input){
           winningScore=input;
        }
        else{
            winningScore=100;
        }

        if(scores[activePlayer]>=winningScore){
            document.querySelector('#name-'+activePlayer).textContent="Winner!";
            diceDom.style.display='none';
            gamePlaying=false;
        }
        else{
            nextPlayer();
        }
    }
    
   

});
// init not a function call so not use ()
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
    activePlayer === 0 ? activePlayer= 1 : activePlayer= 0;
    roundScore=0;
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';  
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDom.style.display='none';
}
function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}