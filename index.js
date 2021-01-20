var dog = {
    name: 'a',
    age: 1,
    dead: false
};
var mydogString = JSON.stringify(dog);// return to string
//console.log(mydogString)
var mycatstring = '{"name": "Tom", "age": 3, "dead": true}';
var mycat = JSON.parse(mycatstring);
console.log(mycat)