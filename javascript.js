

const characterSelection = document.querySelectorAll('.playerChar'); //This creates an array like node list of all elements with the .playerChar class that can now be accessed
const opponentSelection = document.querySelectorAll('.opponent');
const playerName = document.querySelector('#playerName');
const opponentName = document.querySelector('#opponentName');
const battle = document.querySelector('#fight')
const battleResult = document.querySelector('#battleResult');

let playerCharacter;
let opponent;
let wins = 0;
let losses = 0;

characterSelection.forEach(character => {
    character.addEventListener('click', () => {

        battleResult.textContent = '';
        playerCharacter = character.id;
        
        if (playerCharacter === 'allvar') {
            playerName.textContent = 'Allvar von Attor. Sorcerer Supreme and next in line for the Crimson Throne'
        } else if (playerCharacter === 'thirnok') {
            playerName.textContent = 'Thirnok the Sturdy, the immovable object. Slayer of many terrible things (I guess)'
        } else {
            playerName.textContent = '' //safeguard agains loops probably unnecessary. 
        }

        return playerCharacter;

    });
});

opponentSelection.forEach(opponentChar => {
    opponentChar.addEventListener('click', () => {

        battleResult.textContent = '';
        opponent = opponentChar.id;

        if (opponent === 'bullen') {
            opponentName.textContent = 'Bullen the Uhappy (but yet adorable)'
        } else if (opponent === 'archon') {
            opponentName.textContent = 'Hound Archon'
        } else {
            opponentName.textContent = '' //safeguard agains loops probably unnecessary. 
        }
        
        return opponent;
    });
});

battle.addEventListener('click', () => {
    playRound(playerCharacter, opponent)
    playerName.textContent = '';
    opponentName.textContent = '';
});

function playRound (playerCharacter, opponent) {

    if (playerCharacter === 'allvar' && opponent !== 'bullen') { 
        battleResult.textContent = `Fire. Lightning. Glitter and demons. In a terrifying display of sorcerous might the Hound Archon is utterly destroyed by the mighty Allvar von Attor`;
        wins ++;
    } else if (opponent === 'bullen') {

        battleResult.textContent = `No one can stand against the grumpy adorableness of this cute(?) cat. ${playerCharacter.toUpperCase()} is consumed by cuteness overload.`;
        losses ++;
    } else if (playerCharacter === 'thirnok') {
        battleResult.textContent = 'The clash of sword against a heavy shield. The sound of an axe meeting flesh. The Hound Arhcon is no match for Thirnok\'s might.';
        wins ++;
    } 
    else {
        console.log(`Error handling`); //just avoiding infinite loops, delete later
    }    
};