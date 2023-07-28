const multiplicationNumber =  5 ; 

// ----> the function will  Generate Multiplication  of any number 10 times  <-----
const multiplicationCal = (number) =>{
    let res = 0 ; 
    for(let i = 1 ; i <= 10 ; i++){
        
        res = i * number ;
        const table = `${i} x ${number} = ${res} `
         console.log(table)

    }
    
}

multiplicationCal(multiplicationNumber);