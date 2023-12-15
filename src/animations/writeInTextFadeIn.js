const delay = ms => new Promise(res => setTimeout(res, ms));

export default function WriteInWordFadeIn(setPrevText, setLastText, DisplayText, TextIndex, setTextIndex){
    const TextArray = DisplayText.split(" "); 
    if(TextIndex < TextArray.length){
        // document.querySelector("#fade-element").classList.remove('fade')
        setTimeout(async ()=>{
            setPrevText(TextArray.slice(0, TextIndex).join(' '));
            
            if (TextIndex == TextArray.length - 1){
                setLastText(' ');
                setPrevText(TextArray.join(' '));
            }
            else{
                setLastText(" " + TextArray[TextIndex]);
                document.querySelector("#fade-element").classList.add('fade')
                setTimeout(()=>{
                    document.querySelector("#fade-element").classList.remove('fade')
                }, 1000)
                setTextIndex(index => index + 1);
            }


        },200)
    }
}