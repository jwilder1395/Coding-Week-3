var ages = [3, 9, 23, 64, 2, 8, 28, 93];
for(var i = 0; i < ages.length; i++){
    Array[ages[ages.length - 1] - ages[0]]
}
console.log(i);

ages.push('27');
for(var i = 0; i < ages.length; i++){
    Array[ages[ages.length]]
}
console.log(i);

function ArrayAvg(ages){
    var i = 0, sum = 0, length = ages.length;
    while(i < ages.length){
        sum = sum + ages[i++]
    }return sum/ ages.length;
}
console.log(i);

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
avg = names.join(' ').length / names.length;
console.log(avg);

var nameLengths = [3, 5, 3, 5, 4, 3];
for(let i = 0; i <= nameLengths; i++){
    console.log(nameLengths[i]);
}

nameLengths = [3, 5, 3, 5, 4, 3];
    for(sum of nameLengths){
        console.log(nameLengths);
    }

function returnCubedWord(ham){
    return ham * 3;
}console.log(returnCubedWord)

function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
createFullName('Josh', 'Wilder');

var Array1 = [15, 42, 33, 12] 
function returnSum(Array1){
    for(let i = 0; i > 100; i++ ){
        if(returnSum > 100){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}

function ArrayAvg2(Array1){
    var i = 0; sum = 0; length = Array1.length;
    while(i < Array1.length){
        sum = sum + Array1[i++]
    }
    return sum / Array1.length;
}console.log(i);

var Array2 = [12,3,22];
var Array3 = [21, 2, 6];
function ArrayAvg3(Array2){
    var i = 0; sum = 0; length = Array2.length;
    while(i < Array2.length){
        sum = sum + Array2[i++]
    }return sum / Array2.length;
}
function ArrayAvg4(Array3){
    var i = 0; sum = 0; length = Array3.length;
    while(i < Array3.length){
        sum = sum + Array3[i++]
    }return sum / Array3.length;
}
if(ArrayAvg3 > ArrayAvg4){
    console.log(true);
}else{
    console.log(false);
}

function willBuyDrink(isHotOutside, moneyInPocket = 6){
    for(let i = 0; i >= isHotOutside && moneyInPocket > 10.50; i++);
}if(i >= isHotOutside && moneyInPocket > 10.50){
    console.log(true);
}else{
    console.log(false);
}

function divide(a, b){
    return a / b;
}
console.log(divide(6, 2));