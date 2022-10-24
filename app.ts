// Task 1

let age: number = 50;
let nam: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number) => { return 100 + a };

// Task 2

let anything: any = -20;
anything = 'Text';
anything = {};

// Task 3

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;  
}

// Task 4

enum personEn { LOADING, READY };

let toggl: string | number;

let toggl2: personEn.LOADING | personEn.READY; 

let person = ['Max', 21];


// Task 5

function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}



// Task 6

type pages = {
title: string;
likes: number;
accounts: [string, string?, string?];
status: string;
details?: {
    createAt: string;
    updateAt: string;
}  
}

const page1: pages = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: pages = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

// console.log(page1);
