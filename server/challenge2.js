function solution(word, query){
    return word.toLowerCase()
    .includes(query.toLowerCase());
}; 
console.log(solution('Ana lava la tina', 'ana'));
console.log(solution('Santiago', 'tiago'));
console.log(solution('Nicolas', 'ana'));