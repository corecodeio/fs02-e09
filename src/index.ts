import Person from './Person';

let p1 = new Person('Siri', 'Lorem', 30, 900000, 'Math');
let p3 = new Person('James', 'Ipsum', 18, 0, '');

p3.addClass('Biology');
p3.addClass('Spanish');

p3.showClasses();

// p3.classes.push();

console.log(p3.getFullName());
console.log(p3.name);
