export default function WriteIn(setPrevTextFun, setLastTextFun, setIndexFun, indexRef, DisplayText, Duration){
    
        if(indexRef <= DisplayText.length){
            setTimeout(()=>{
                setPrevTextFun(DisplayText.slice(0,indexRef))
                setLastTextFun(DisplayText[indexRef])
                setIndexFun(index => index + 1)
            },Duration)}


}