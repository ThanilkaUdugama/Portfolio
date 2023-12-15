import getRandomText from "../functions/getRandomText";
const delay = ms => new Promise(res => setTimeout(res, ms));
export default function WriteInWordShuffle(setPrevText, setLastText, DisplayText, TextIndex, setTextIndex, ShuffleWordCount, Delay, error=1){
    const TextArray = DisplayText.split(" ")
    console.log(TextArray)
    if(TextIndex < TextArray.length){
        setTimeout( async ()=>{
            setPrevText(TextArray.slice(0, TextIndex).join(" "))
            const shuffleLetters = getRandomText(TextArray[TextIndex].length, ShuffleWordCount);
            shuffleLetters.push(TextArray[TextIndex])

            for (let index = 0; index < shuffleLetters.length; index++){
                setLastText(" "+shuffleLetters[index])
                await delay(Delay);
            }
            
            if (TextIndex == TextArray.length-error){
                setLastText(' ')
                setPrevText(TextArray.join(" "));
            }
            else{
                setLastText(" " + TextArray[TextIndex])
                setTextIndex(index => index + 1);
            }


        },0)
    }
}