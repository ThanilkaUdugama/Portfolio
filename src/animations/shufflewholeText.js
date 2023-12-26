import getRandomText from "../functions/getRandomText";
const delay = ms => new Promise(res => setTimeout(res, ms));
export default async function ShuffleWholeText(setPrevT, setOpacity, DisplayText, Num0fWords, Duration){
    setOpacity(50);
    const TextArray = DisplayText.split(" ");
    let items = getRandomText(DisplayText.length, Num0fWords);
    
    for (let c = 0; c < items.length; c++){
        for (let b =1; b < TextArray.length; b ++){
            let index = TextArray.slice(0,b).join(" ").length;
            items[c] = items[c].substring(0, index) + ' ' + items[c].substring(index + 1);
        }

    }
    items.push(DisplayText)

    for (let m =0; m < items.length; m++){
        setPrevT(items[m])
        await delay(Duration)
    }

    setOpacity(100)
    // setLastT(' ')
    // await delay(10)
    // setPrevT(DisplayText)

    // for (let i =0; i < TextArray.length; i++){
    //     New_text = ''
    // }

    // if(TextIndex < TextArray.length){
    //     setTimeout( async ()=>{
    //         setPrevText(TextArray.slice(0, TextIndex).join(' '));
            
    //         if (TextIndex == TextArray.length - 1){
    //             setLastText(' ')
    //             setPrevText(TextArray.join(' '));
    //         }
    //         else{
    //             setLastText(" " + TextArray[TextIndex])
    //             setTextIndex(index => index + 1);
    //         }


    //     },Duration)
    // }
}