var list = {'a':0, 'dog':1, 'chase':2, 'a':3, 'cat':4}
var count = [0,0,0,0,0];
function Count(name)
{
    count[list[name]]++;
}
Count('a');
Count('dog');
Count('chase');
Count('a');
Count('cat');

console.log(count[0]);
console.log(count[1]);
console.log(count[2]);
console.log(count[3]);
console.log(count[4]);

