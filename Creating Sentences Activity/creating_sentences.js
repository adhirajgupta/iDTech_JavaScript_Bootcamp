let words= ["This","is","JavaScript","Bootcamp!"]

function createSentence(x){
    var sentence = ""

    for(let i of x){
        sentence+= i+" ";
    }
    return sentence
}

console.log(createSentence(words))