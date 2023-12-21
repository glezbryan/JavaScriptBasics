let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties:0
};
updateScore();


function updateScore(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function getBotChoice(){
    var random_num = (Math.random()*3);
    if(random_num > 2)
        return 'Rock';
    else if(random_num > 1)
        return 'Paper';
    else
        return 'Scissors';
}

function playGame(User){
    bot = getBotChoice();
    result = '';
    switch (User) {
        case 'Rock':
            if(bot == 'Rock')
                result = `It's a tie!`;
            else if(bot == 'Paper')
                result =`You lose...`;
            else 
                result =   `You win!`;
            break;
        case 'Paper':
            if(bot == 'Rock')
                result = `You win!`;
            else if(bot == 'Paper')
                result = `It's a tie!`;
            else 
                result = `You lose...`;
            break;
        case 'Scissors':
            if(bot == 'Rock')
                result = `You lose...`;
            else if(bot == 'Paper')
                result = `You win!`;
            else 
                result = `It's a tie!`;
            break;

        default:
            return `ERROR: Invalid parameters`
            break;
    }

    if(result === `You win!`)
        score.wins++;
    else if(result === `You lose...`)
        score.losses++;
    else
        score.ties++;

    localStorage.setItem('score', JSON.stringify(score))

    updateScore();
    document.querySelector('.js-result')
        .innerHTML = result;
    document.querySelector('.js-moves')
        .innerHTML = `You <img src="images/${User}-emoji.png" class="move-icon">  <img src="images/${bot}-emoji.png" class="move-icon"> Bot`
}