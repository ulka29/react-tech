// Assignment 3
// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string

function format(value:number):string
function format(value:Date):string
function format(value: number | Date):string{

    if( value instanceof Date){
        return value.toISOString()
    }
    return value.toFixed(2)
}
console.log(format(2))

