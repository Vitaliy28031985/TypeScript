// Task 1
var age = 50;
var nam = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
// Task 2
var anything = -20;
anything = 'Text';
anything = {};
// Task 3
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// Task 4
var personEn;
(function (personEn) {
    personEn[personEn["LOADING"] = 0] = "LOADING";
    personEn[personEn["READY"] = 1] = "READY";
})(personEn || (personEn = {}));
;
var toggl;
var toggl2;
var person = ['Max', 21];
// Task 5
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
// console.log(page1);
