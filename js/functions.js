export function getRandomNumber(num){
    const result = Math.trunc(Math.random()*num)+1;
    return result

}

export function getRandomNumArray(num, res){
    const result = [];

    while (true){
        let randomNum = getRandomNumber(99);
        while (randomNum ===res){
            randomNum = getRandomNumber(99);
        };
        result.push(randomNum);
        if(result.length=== num) break;
    }

    return result
}


export function readyRandomNumbers(array ,res){
    const randomIndexArray = getRandomNumber(array.length-1);
    array[randomIndexArray] = res;
    return array
}


export function calc(expression){
    let result =0;
    eval(`result = ${expression}`)
    return result
}