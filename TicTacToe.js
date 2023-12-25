let grid = [document.querySelector('.top_left'),
            document.querySelector('.top_center'),
            document.querySelector('.top_right'),
            document.querySelector('.center_left'),
            document.querySelector('.center_center'),
            document.querySelector('.center_right'),
            document.querySelector('.bottom_left'),
            document.querySelector('.bottom_center'),
            document.querySelector('.bottom_right')];

function updateScore(){
    document.querySelector('.score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function setHover(box){
    if(! document.querySelector(box).classList.contains('selected'))
    document.querySelector(box).classList.add('hover');
}
function unsetHover(box){
    if(document.querySelector(box).classList.contains('hover'))
        document.querySelector(box).classList.remove('hover'); 
}
function remove(array1, box_index){
    let array2 = [];
    let i = 0;
    array1.forEach(element => {
        if(!(element === array1[box_index])){
            array2[i] = element;
            i++;
        }
    });
    return array2;
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties:0
};


updateScore();



function play(box_index){
    if(grid[box_index].classList.contains('selected')) return;

    grid[box_index].classList.add('selected');
    grid[box_index].innerHTML = 'X';
    unsetHover(grid[box_index]);
    console.log(grid);
    grid = remove(grid, box_index)
    console.log(grid);
    
    let random_num = Math.trunc(Math.random()*9);
    for(let i = 0; i < 50; i++){
        if(!grid[random_num].classList.contains('selected')){
            grid[random_num].classList.add('selected');
            grid[random_num].innerHTML = 'O';
            break;
        }
        random_num = Math.trunc(Math.random()*9);
    }
    
}