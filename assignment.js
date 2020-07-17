// Assignment-3: Problem Solving Assignment------------email: jitu000166@gmail.com-----------Md Jidanul Hakim Jitu

// No: 1
// feetToMile
function feetToMile(feet){
    if(feet <= 0){
        return("Invalid!! Measurement can't be 0(zero) or less than that of any element. Please use a valid number");
    }
    else{
        const mile = feet/5280;
        return mile;
    }
}
let resultOfConverting = feetToMile(73920);
console.log("Result of feet to mile is: ", resultOfConverting);




// No: 2
// woodCalculator
function woodCalculator(chair, table, bed){
    const chairNeedWood = 1 * chair;
    const tableNeedwood = 3 * table;
    const bedNeedWood = 5 * bed;
    totalWoodNeed = chairNeedWood + tableNeedwood + bedNeedWood;
    return totalWoodNeed;
}
let sumOfWood = woodCalculator(14, 3, 3);
console.log("You will need total: ", sumOfWood, "cubic feet wood");



// No: 3
// brickCalculator
function brickCalculator(floorNumber){
    const perFtBrick = 1000;
    const first10FloorBrick = 15 * perFtBrick;
    const second10FloorBrick = 12  * perFtBrick;
    const third10FloorBrick = 10  * perFtBrick;
    totalfloorBrick = first10FloorBrick + second10FloorBrick + third10FloorBrick;
    
    if(floorNumber <= 10){
        return (first10FloorBrick * floorNumber)
    }
    else if(floorNumber > 10 && floorNumber <= 20){
        return ((first10FloorBrick* 10) + (second10FloorBrick * (floorNumber-10)));
    }
    else if(floorNumber >=21 && floorNumber <= 30){
        return( ( (first10FloorBrick * 10) + (second10FloorBrick * 10)) + (third10FloorBrick * (floorNumber - 20)));
    }
    else{
        return("0 brick cause you're eligible to build overall 30 floor buildings")
    }
}

let sumOfBrick = brickCalculator(18);
console.log("You will need total: ", sumOfBrick, "pieces of brick");




// No: 4
// tinyFriend
function tinyFriend(friendList){
    let minName = friendList.length;
    
    for(let i = 0; i < friendList.length; i++){
        let element = friendList[i];
        if(element.length <= minName){
            minName = element.length;
            var tinyMan = element;
        }
    }
    return tinyMan;
}
let tinyFriendCheck = tinyFriend(["Sakib", "Jitu", "Ikhtider", "Sunny"]);
console.log("The smallest name of this friend list is: ", tinyFriendCheck);

