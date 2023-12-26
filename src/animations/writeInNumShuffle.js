import getRandomNumber from "../functions/getRandomNumber";
const delay = ms => new Promise(res => setTimeout(res, ms));

export default function WriteInNumShuffle(setNum, Number, ShuffleNumCount, Delay){
        setTimeout( async ()=>{
            const shuffleNumbers = getRandomNumber(Number.length, ShuffleNumCount);
            shuffleNumbers.push(Number);

            for (let index = 0; index < shuffleNumbers.length; index++){
                setNum(shuffleNumbers[index])
                
                await delay(Delay);
            }

        },0)
    }
