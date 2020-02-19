let first_name: string = "dor"
const my_age: number = 28;
const isHungry: boolean = false;
interface Person {
    name: string,
    age: number
}

const person: Person = { name: first_name, age: my_age }

const names : string[] = ["dor","noa"];
const namesArray : Array<string> =  ["dor","noa"];

let x: [string, number] = ["hello", 10];
let hello_name = x[0]; //"hello"
//let unknown = x[4]; //does not compile !!!!


const id : string | null = null;
if(typeof(id)==="string"){
    //id is string here
    id
}else{
    //id is null here
    id
}


interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
// interface Triangle {
//     kind: "triangle";
//     asd: number;
// }
type Shape = Square | Rectangle | Circle ;

function area(s: Shape): number {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
    // should error here - we didn't handle case "triangle"
}