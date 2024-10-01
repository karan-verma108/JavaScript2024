const months = ['jan', 'march', 'april', 'june', 'july'];
months.push('dec');

// console.log(typeof months.splice(5, 0, 'sep'));

// months.splice(1, 1, 'March');
// console.log(months);

// months.splice(3, 1, 0);

const indexOfMarch = months.indexOf('march');

months.splice(indexOfMarch, 1, 'March');

const indexOfJune = months.indexOf('june');

months.splice(indexOfJune, 1);
console.log(months);

// console.log(months);
