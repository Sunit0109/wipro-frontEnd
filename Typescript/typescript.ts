// 1. Basic Data Types
let greeting: string = "Let's Practise TypeScript!";
let isAvailable: boolean = false;
let temperature: number = 22.5;
let scores: number[] = [95, 87, 78, 92];
let mixedList: (number | boolean)[] = [100, false, 42, true];

// 2. Function with Parameter Types
function welcomeUser(username: string): string {
  return `Welcome, ${username}! Enjoy coding in TypeScript.`;
}

// 3. Interface with Properties and Methods
interface Employee {
  fullName: string;
  yearsOfExperience: number;
  introduce(): string;
}

const worker: Employee = {
  fullName: "John Doe",
  yearsOfExperience: 5,
  introduce() {
    return `Hello, my name is ${this.fullName}, and I have ${this.yearsOfExperience} years of experience.`;
  },
};

// 4. Class with Constructor and Method
class Bicycle {
  constructor(private brand: string, private speed: number) {}

  ride(): void {
    console.log(`${this.brand} bicycle is moving at ${this.speed} km/h.`);
  }
}
const myBike = new Bicycle("Giant", 25);
myBike.ride();

// 5. Generic Function
function getItem<T>(item: T): T {
  return item;
}
console.log(getItem<string>("Generic Function"));
console.log(getItem<number>(2024));

// 6. Enum with Custom Values
enum TransportMode {
  Car = "CAR",
  Bike = "BIKE",
  Train = "TRAIN",
  Plane = "PLANE",
}
let travelMethod: TransportMode = TransportMode.Plane;
console.log(`Preferred transport: ${travelMethod}`);

// 7. Function with Union Type Parameter
function showIdentifier(identifier: number | string): void {
  console.log(`Identifier: ${identifier}`);
}
showIdentifier(7890);
showIdentifier("ID-5432");

// 8. Tuple with Different Data Types
let student: [string, number, boolean] = ["Emily", 22, false];
console.log(student);

// 9. Type Assertions
let unknownValue: unknown = "Learning TypeScript!";
let textLength: number = (unknownValue as string).length;
console.log(`Text length: ${textLength}`);

// 10. Async Function with Delay
async function getData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data retrieval successful!"), 1500);
  });
}
getData().then(console.log);

// 11. Working with Map and Set
let uniqueNumbers: Set<number> = new Set([2, 4, 6, 8, 10]);
uniqueNumbers.add(12);
console.log("Set contents:", [...uniqueNumbers]);

let employeeAges: Map<string, number> = new Map([
  ["John", 45],
  ["Sarah", 38],
  ["Mike", 50],
]);
console.log("Employee ages:", employeeAges);

// 12. Using Optional Chaining and Nullish Coalescing
let accountInfo: { email?: string; phone?: string } = {};
console.log(accountInfo.email?.toLowerCase() ?? "Email not provided");
console.log(accountInfo.phone ?? "Phone number unavailable");
