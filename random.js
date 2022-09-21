function random(min,max){
    let a=Math.random()*(max-min+1);
    let b=Math.floor(a)+min;
    return b;
}