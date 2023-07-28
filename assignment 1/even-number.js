const numOfArray = [12, 34, 45, 23, 6, 78, 54, 90] ; 

// ----> the function will  Generate Multiplication  of any number 10 times  <-----
const evenNumbers = (number) =>{
    let evenNum = [] ;
    for(let i = 0 ; i < number.length; i++){
        
        if(number[i] % 2 == 0 ){
            evenNum.push(number[i])
        }
    }
    return evenNum
}

console.log(evenNumbers(numOfArray));