//1.


//2a.data in react flows only downwards, making it unidirectional.

//2b.


//3.the perpouse of lifting state up is to share the state with other componets 
// by sending it to a common parent because state and other things can not 
// pass on to siblings in react because of its unidirectional data flow.


//4.


//5. browsers can bot read JSX because the can only comprehend up to ES5.


//6. key is an attubute that is put on iteams that are maped though to signify any
// changes. 


//7. props are sets of data that is pased on to a new componet so they can have 
// access to it. state is where you can store the current property of what you are 
// doing.


//8. what is happening is that babel is converting the newer way of writing
// code in order for it to be read in the browser. 

// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )
 
// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })

//9.
const names = ["james", 'joseph', 'diamond', 'gillian']
function properNames(names) {

    const capName = names.map((item) => {
        if (item[0] != toUpperCase(tem[0])){
            return toUpperCase(tem[0])
        }
    })
    return capName
}
console.log(properNames(names))

//10
let news = ['','','']
const lessThanSix = news.filter((iteam) => {
  //  if
})

