
let score = {
    Win: 0,
    Lost: 0,
    Tie: 0,
};


function generateCompChoice(){
    let compInput = Math.random()*3;
    if (compInput >0 && compInput <=1){
        return 'Bat';
    } else if (compInput >1 && compInput <=2){
        return 'Ball';
    } else {
        return 'Stump';
    }
}

function getResult(userMove, compMove){
    if (userMove === `Bat`){
        if (compMove === 'Ball'){
            score.Win++;
            return 'YOU WON.';
        } else if (compMove === 'Stump'){
            score.Lost++;
            return `You Lost`;
        } else {
            score.Tie++;
            return `It's a tie`;
        }

    } else if (userMove === `Ball`){
        if (compMove === 'Stump'){
            score.Win++;
            return `YOU WON.`;
        } else if (compMove === 'Bat'){
            score.Lost++;
            return `You Lost`;
        } else {
            score.Tie++;
            return `It's a tie`;
        }
    } else {
        if (compMove === 'Bat'){
            score.Win++;
            return 'YOU WON.';
        } else if (compMove === 'Ball'){
            score.Lost++;
            return 'You Lost';
        } else {
            score.Tie++;
            return `It's a tie`;
        }
    }
}

function showResult(userMove, compMove, result){
    alert(`You have chosen ${userMove}. Computer has chosen ${compMove} 

    ${result}
    
    Won: ${score.Win}, Lost: ${score.Lost}, Tie: ${score.Tie} `);
}
