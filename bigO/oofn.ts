// The code snippet below is o(n) because in order to add the unicode values of each letter we need to iterate through each letter and it will grow with the input

function sum_char_codes(n: string) : number{
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        sum = sum + n.charCodeAt(i);
    }
    return sum;

}

console.log(sum_char_codes("Dan"))

// This code snippet is o(2N) but in Big-O notation, constants are ignored. So its still o(n).

function o(n :string ): number{
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        sum += n.charCodeAt(i);
    }
    for (let i = 0; i < n.length; i++){
        sum += n.charCodeAt(i);
    }

    return sum;
}

// Big-O side notes
// Growth with input
// Constants are dropped
// Worst case is usually the way we measure
