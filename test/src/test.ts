// let firstName : string = 'Dhruv'
// let lastName : string = 'Sinha';

// const fullName = firstName.concat(' ').concat(lastName)
// console.log(fullName)

// let total : 10|20|30 = 10
// total = 30;

// let notSure : any = false;
// notSure = 'hmm';

// const books = ['atomic habits', 'ikigai', 'deep work'];
// let foundBook : string|undefined;

// for (let book of books){
//     if(book === 'ikigai'){
//         foundBook = book;
//         break;
//     }
// }
// console.log(foundBook);

// // let prices: number[] = [1,2,3]
// // let emptyArray:[] = []
// // let anyArray = [1,'asd',false]
// // let car : {brand:string; year: number} = { brand: 'honda', year:2024}

// let book = {title:'book', price:20}
// let pen = {title:'pen', price:10}
// let notebook = {title:'notebook'} 

// let items: {readonly title:string, price:number}[] = [book,pen] //cant add notebook
// let items2: {title:string, price?:number}[] = [book,pen,notebook] 
// // items[0].title = 'new'

// let bike : {brand: string, year: number} = {brand: "honda", year: 2025}
// let laptop : {brand: string, year: number} = {brand: "acer", year: 2024}
// let headphone: {brand:string} = {brand:"sony"}
// let products : {brand:string, year?:number}[]= [bike,laptop,headphone]
// products.push({brand:"nike"})

// function sayHello(name: string) {
//     console.log(`Hello, ${name}`)
// }
// sayHello("Dhruv")

// function applyDiscount(price:number) : number {
//     return price*0.9
// }

// console.log(applyDiscount(300));

// const names : string []= ['Dhruv','ABC',"XYZ"];

// function checkName (name : string) : boolean {
//     if( names.includes(name) ){
//         return true
//     }
//     return false;
// }

// console.log("Check Name: "+ checkName("XYZ"))

// function processInput(input: string|number): void {
     
//     if (typeof input === 'string'){
//         console.log(input.toUpperCase());
//     }else if(typeof input === 'number'){
//         console.log(2*input);
//     }
// }

// processInput("Dhruv");
// processInput(10);

// function processData(input:string|number, config: {reverse:boolean } = {reverse:false}){
//     if(typeof input === "number"){
//         return input*input
//     }else if(typeof input === "string" && config.reverse === true){
//         return input.toUpperCase().split('').reverse().join('')
//     }else {
//         return input.toUpperCase()
//     }
// }


// console.log(processData(16));
// console.log(processData("Dhruv", {reverse:true}));
// console.log(processData("Dhruv"));


// type User = { id: number; name: string; isActive: boolean }

// const john: User = {
//     id: 1,
//     name: "john",
//     isActive: true,
//   };
//   const susan: User = {
//     id: 1,
//     name: "susan",
//     isActive: false,
//   };
  
//   function createUser(user: User): User {
//     console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
//     return user;
//   }

//   type StringOrNumber = string | number

//   let value: StringOrNumber
//   value = 15
//   value = "hello"


// interface Employee  { id: number; name: string; dept: string };
// interface Manager  { id: number; name: string; employees: Employee[] };

// const employee1: Employee = {
//   id: 1,
//   name: "Alice",
//   dept: "Engineering",
// };

// const employee2: Employee = {
//   id: 2,
//   name: "Bob",
//   dept: "Marketing",
// };

// const manager: Manager = {
//   id: 1,
//   name: "Charlie",
//   employees: [employee1, employee2],
// };

// console.log(employee1);
// console.log(employee2);
// console.log(manager);

// type Staff = Employee | Manager;

// function printStaffDetails(input:Staff):void{
//     if('employees' in input){
//         console.log(`${input.name} is a manager of ${input.employees.length} employees`);
//     }else{
//         console.log(`${input.name} is an employee of ${input.dept} department`);
        
//     }
// }

// printStaffDetails(employee1)
// printStaffDetails(employee2)
// printStaffDetails(manager)


// interface Computer {readonly id:number; brand:string; ram: number; storage?: string; upgradeRam:(amount: number)=>number}


// const pc : Computer = {
//     id: 1, brand: "acer", ram:4, upgradeRam(amount){this.ram += amount ;return this.ram}

// }

// console.log(pc,pc.upgradeRam(4)); 

// interface Person {
//     name:string
// }

// interface DogOwner extends Person {
//     dogName:string
// }

// interface Manager extends Person {
//     managePeople():void,
//     delegateTasks():void
// }

// function getEmployee(): Person|DogOwner|Manager{
//     const randomNum = Math.random()

//     if (randomNum < 0.33){
//         const obj : Person = {
//             name:"Dhruv",
//         }
//         return obj
//     } 
//     if (randomNum < 0.66){
//         const obj : DogOwner = {
//             name:"Dhruv",
//             dogName:"Rex",
//         }
//         return obj
//     } 
//    else{
//         const obj : Manager = {
//             name:"Dhruv",
//             managePeople() {
//                 console.log('Managing People...');    
//             },
//             delegateTasks() {
//                 console.log('Delegating tasks..');       
//             },
//         }
//         return obj
//     } 
// }

// const employee = getEmployee()
// console.log(employee);

// enum UserRole {
//     Admin, Manager, Employee
// }

// type User = {
//     id: number;
//     name: string;
//     role: UserRole
//     contact : [email: string, phone: string]
// }

// function createUser (user: User) : User  {
//     const result : User = user;
//     return result;
// }

// console.log(createUser({id:1,name:"Dhruv",role:UserRole.Admin,contact:[ "dhruv.sinha", "2345"]}))

