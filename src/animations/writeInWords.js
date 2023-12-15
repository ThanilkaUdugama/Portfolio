const delay = ms => new Promise(res => setTimeout(res, ms));

export default function WriteInWords(setPrevText, setLastText, DisplayText, TextIndex, setTextIndex, Duration){
    const TextArray = DisplayText.split(" "); 
    if(TextIndex < TextArray.length){
        setTimeout( async ()=>{
            setPrevText(TextArray.slice(0, TextIndex).join(' '));
            
            if (TextIndex == TextArray.length - 1){
                setLastText(' ')
                setPrevText(TextArray.join(' '));
            }
            else{
                setLastText(" " + TextArray[TextIndex])
                setTextIndex(index => index + 1);
            }


        },Duration)
    }
}