function updateScore(){
    document.querySelector('.score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function setHover(box){
    if(!document.querySelector(box).classList.contains('selected'))
    document.querySelector(box).classList.add('hover')
}
function unsetHover(box){
    document.querySelector(box).classList.remove('hover')
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties:0
};

updateScore();

function play(box){
    document.querySelector(box).classList.add('selected');
    document.querySelector(box).innerHTML = 'X';
    unsetHover(box);
    
}