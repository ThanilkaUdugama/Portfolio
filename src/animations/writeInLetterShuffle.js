import getRandomText from "../functions/getRandomText";
const delay = ms => new Promise(res => setTimeout(res, ms));

export default function WriteILetterShuffle(setPrevText, setLastText, DisplayText, TextIndex, setTextIndex, ShuffleWordCount, Delay, Characters){
        setTimeout( async ()=>{
            if(TextIndex < DisplayText.length){
                setPrevText(DisplayText.slice(0, TextIndex))
                const shuffleLetters = getRandomText(1, ShuffleWordCount, Characters);
                shuffleLetters.push(DisplayText[TextIndex])

                for (let index = 0; index < shuffleLetters.length; index++){
                    setLastText(shuffleLetters[index])
                    await delay(Delay);
                }
                
                if (TextIndex == DisplayText.length - 1){
                    setLastText(' ')
                    setPrevText(DisplayText);
                }
                else{
                    setLastText(" " + DisplayText[TextIndex])
                    setTextIndex(index => index + 1);
                }
            }

        },0)
    }
