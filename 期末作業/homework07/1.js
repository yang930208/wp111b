var m2i = {'Janurary' : 1, 'Feburary' : 2, 'Marth' : 3, 'April' : 4, 'May' : 5, 'June' : 6, 'July' : 7, 'Augest' : 8, 'September' : 9, 'October' : 10, 'November' :11, 'December' : 12}
function monthToIndex(a){
    return m2i[a];
} 

console.log(monthToIndex('Marth'));
console.log(monthToIndex('July'));