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

// let prices: number[] = [1,2,3]
// let emptyArray:[] = []
// let anyArray = [1,'asd',false]
// let car : {brand:string; year: number} = { brand: 'honda', year:2024}


let book = {title:'book', price:20}
let pen = {title:'pen', price:10}
let notebook = {title:'notebook'} 

let items: {readonly title:string, price:number}[] = [book,pen] //cant add notebook
let itemss: {title:string, price?:number}[] = [book,pen,notebook] 

// items[0].title = 'new'


