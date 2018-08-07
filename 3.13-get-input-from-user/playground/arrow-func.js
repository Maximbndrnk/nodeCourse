let square = x => x * x;

console.log(square(9));

let user = {
    name: 'Max',
    sayHi: () => {
        console.log(`Hi. Im ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments); // => dont have
        console.log(`Hi. Im ${this.name}`); // => dont have 
    }
}
user.sayHi();
user.sayHiAlt(1,2,3);