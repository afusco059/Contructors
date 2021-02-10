function dog(ownersName, dogsName, color) {
    this.ownersName = ownersName;
    this.dogsName = dogsName;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new dog("Tom", "J", "Blue");
console.log(terrier.ownersName + " has a dog named " + terrier.dogsName + " and it has blue fur")

let retriever = new dog("Jerry", "Hanna", "yellow");
console.log(retriever.ownersName + " has a dog named " + retriever.dogsName + " and its fur is yellow")

document.getElementById("tom").innerHTML = terrier.ownersName + " has a dog named " + terrier.dogsName + " and it has blue fur";

document.getElementById("jerry").innerHTML = retriever.ownersName + " has a dog named " + retriever.dogsName + " and its fur is yellow";

