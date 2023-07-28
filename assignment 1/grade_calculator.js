const examMark =  1000 ; 
// -----> this function will return a grade between 0 to 100 marks <------
const gradeCalculator =  (mark) => {

    if ( mark >= 0 && mark  <= 100){
        if (mark >=90  && mark <= 100) {
            console.log('You got A')
        }
        else if (mark >=80  && mark <= 89) {
            console.log('You got B')
        }
        else if (mark >=70  && mark <= 79) {
            console.log('You got C')
        }
        else if (mark >=60  && mark <= 69) {
            console.log('You got D')
        }
        else {
            console.log('You got F')
        }
    }
    else{
        console.log('please enter any number between  0 to 100 .')
    }
    

}
gradeCalculator(examMark);