// o(n^2) dictated by the number of loops, we iterate over the length of strings twice.
// Each loop runs n times so this would be the same as  n * n = n^2
function smelly(n: string) : number{
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        for (let j = 0; j < n.length; i++){
            sum += n.charCodeAt(i);
        }

    }
    return sum;
}


// Same priciple applies this would be an example of o(n^3) or n * n * n since we have three loops. Basically matrix multiplication
function smellyThree(n: string) : number{
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        for (let j = 0; j < n.length; i++){
            for (let k = 0; k < n.length; k++) {
              sum += n.charCodeAt(i);
            }
        }

    }
    return sum;
}
