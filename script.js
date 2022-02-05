const generatenumber = () =>{
    return Math.floor(Math.random() * 5);
}

const adjectives = ["well-made", "chubby", "irritating", "slippery", "goofy"];
const nouns = ["governor", "glock", "pancake", "sock", "powder"];
const verbs = ["allow", "prevent", "guide", "persuade", "convince"];
const verbs2 = ["shut up", "attack", "belong to an anonymous person", "chat with a door", "burn your nose off"];

const determinesentence = () =>{
    document.getElementById("resultt").innerHTML = `You should not let a ${adjectives[generatenumber()]} ${nouns[generatenumber()]} ${verbs[generatenumber()]} you to ${verbs2[generatenumber()]}.`;
    const button = document.querySelector('button');
    button.disabled = true;
}
const disabledcolor = () =>{
    document.getElementById("button").style.color = "#BABABA";
    document.getElementById("button").style.opacity = 0.5;
    document.getElementById("button").style.backgroundColor = "#7a7a7a";
    document.getElementById("button").classList.add("disabled");
    return false
}


