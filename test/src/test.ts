let firstName : string = 'Dhruv'
let lastName : string = 'Sinha';

const fullName = firstName.concat(' ').concat(lastName)
console.log(fullName)

let total : 10|20|30 = 10
total = 30;

let notSure : any = false;
notSure = 'hmm';

const books = ['atomic habits', 'ikigai', 'deep work'];
let foundBook : string|undefined;

for (let book of books){
    if(book === 'ikigai'){
        foundBook = book;
        break;
    }
}

console.log(foundBook);

let prices: number[] = [1,2,3]
let emptyArray:[] = []
let anyArray = [1,'asd',false]

