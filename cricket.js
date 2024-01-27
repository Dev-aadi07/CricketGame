
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
            return 'YOU WON.';
        } else if (compMove === 'Stump'){
            return `You Lost`;
        } else {
            return `It's a tie`;
        }

    } else if (userMove === `Ball`){
        if (compMove === 'Stump'){
            return `YOU WON.`;
        } else if (compMove === 'Bat'){
            return `You Lost`;
        } else {
            return `It's a tie`;
        }
    } else {
        if (compMove === 'Bat'){
            return 'YOU WON.';
        } else if (compMove === 'Ball'){
            return 'You Lost';
        } else {
            return `It's a tie`;
        }
    }
}

function showResult(userMove, compMove, result){
    alert(`You have chosen ${userMove}. Computer has chosen ${compMove} and ${result}.`);
}
