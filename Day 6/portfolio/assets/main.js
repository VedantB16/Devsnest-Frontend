const span = document.querySelector("#dynamic")
console.log(span)

const phrases = ["Software Engineer...", "Web Developer...", "Problem Solver..."]


let letterIndex = 0
let phraseIndex = 0
const typeSpeed = 100
const eraseSpeed = 100

function printLetters(phrase){

    if (letterIndex<phrase.length){
        span.textContent+=phrase.charAt(letterIndex)
        letterIndex++;
        setTimeout(function(){
            printLetters(phrase);
        },typeSpeed)
    }
    else{
        //phrase has been typed now clear the content
        clearContent();
    }

}

function clearContent(){
    if (letterIndex>-1){
        let updatedPhrase = "";
        for (let index=0; index<letterIndex; index++){
            updatedPhrase += phrases[phraseIndex].charAt(index);
        }
        span.textContent = updatedPhrase;
        letterIndex-=1;
        setTimeout(clearContent, eraseSpeed)
    }
    else {
        phraseIndex = (phraseIndex+1)%phrases.length;
        letterIndex = 0
        printLetters(phrases[phraseIndex])
    }

}

printLetters(phrases[phraseIndex])