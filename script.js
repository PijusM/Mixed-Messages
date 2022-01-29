const generatenumber = () =>{
    return Math.floor(Math.random() * 6);
}

const adjectives = ["boundless", "important", "poisoned", "slippery", "goofy"];
const nouns = ["governor", "glock", "pancake", "sock", "powder"];
const verbs = ["allow", "regret", "guide", "persuade", "convince"];
const verbs2 = ["shut up", "attack", "belong to an anonymous person", "chat with a door", "burn your nose off"];

const determinesentence = () =>{
    return `You should not let a ${adjectives[generatenumber()]} ${nouns[generatenumber()]} ${verbs[generatenumber()]} you to ${verbs2[generatenumber()]}.`
}
