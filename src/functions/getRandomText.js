import { CHARACTORS } from "../data/Characters";
export default function getRandomText(length, numOfWords, characters=CHARACTORS) {
    let words = []
    const charactersLength = characters.length;
    for (let j = 0; j < numOfWords; j++){
        let current_word = '';
    for ( let i = 0; i < length; i++ ) {
        current_word += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    words.push(current_word)
    }

    return words;
}