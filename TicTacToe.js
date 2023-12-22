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
    if(document.querySelector(box).classList.contains('selected')) return;

    document.querySelector(box).classList.add('selected');
    document.querySelector(box).innerHTML = 'X';
    unsetHover(box);
    
    let random_num = Math.trunc(Math.random()*9);
    for(let i = 0; i < 50; i++){
        if(random_num === 0 && !document.querySelector('.top_left').classList.contains('selected')){
            document.querySelector('.top_left').classList.add('selected');
            document.querySelector('.top_left').innerHTML = 'O';
            break;
        }
        else if(random_num === 1 && !document.querySelector('.top_center').classList.contains('selected')){
            document.querySelector('.top_center').classList.add('selected');
            document.querySelector('.top_center').innerHTML = 'O';
            break;
        }
        else if(random_num === 2 && !document.querySelector('.top_right').classList.contains('selected')){
            document.querySelector('.top_right').classList.add('selected');
            document.querySelector('.top_right').innerHTML = 'O';
            break;
        }
        else if(random_num === 3 && !document.querySelector('.center_left').classList.contains('selected')){
            document.querySelector('.center_left').classList.add('selected');
            document.querySelector('.center_left').innerHTML = 'O';
            break;
        }
        else if(random_num === 4 && !document.querySelector('.center_center').classList.contains('selected')){
            document.querySelector('.center_center').classList.add('selected');
            document.querySelector('.center_center').innerHTML = 'O';
            break;
        }
        else if(random_num === 5 && !document.querySelector('.center_right').classList.contains('selected')){
            document.querySelector('.center_right').classList.add('selected');
            document.querySelector('.center_right').innerHTML = 'O';
            break;
        }
        else if(random_num === 6 && !document.querySelector('.bottom_left').classList.contains('selected')){
            document.querySelector('.bottom_left').classList.add('selected');
            document.querySelector('.bottom_left').innerHTML = 'O';
            break;
        }
        else if(random_num === 7 && !document.querySelector('.bottom_center').classList.contains('selected')){
            document.querySelector('.bottom_center').classList.add('selected');
            document.querySelector('.bottom_center').innerHTML = 'O';
            break;
        }
        else if(random_num === 8 && !document.querySelector('.bottom_right').classList.contains('selected')){
            document.querySelector('.bottom_right').classList.add('selected');
            document.querySelector('.bottom_right').innerHTML = 'O';
            break;
        }
        random_num = Math.trunc(Math.random()*9);
    }
    
}