function greetings(greetingHandler, name) {
    greetingHandler(name);
}
// const name = 'Halim mama';
// const numbers=[3,56,8];
// greetings(numbers)
function greetingHandler(name) {
    console.log('good morning', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
greetings(greetingHandler, "tom hanks");
greetings(greetingHandler, 'tom hardy');
greetings(greetEvening, 'Tom Solaiman');

function submitHandler() {
    console.log('submit button clicled');
}
document.getElementById(btn - submit).addEventListener('click', submitHandler)