function receivesAFunction(spy){
    return console.log(spy())
}

function returnsANamedFunction(){
    return function namedFunction (name){
    console.log (name) 
    }
}   


function returnsAnAnonymousFunction(){
    return function (name){
        console.log(name)
    }
}