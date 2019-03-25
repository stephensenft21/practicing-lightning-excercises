//Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

const car = {
    color: "red",
    year: 2015,
    model: "Mustang",
    make: "Ford"
};


//Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. 
//The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animalShelter = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts"];



//Define an object for four family members, and put each object in an array named familyMembers. 
//Each family member object that you create should have the same keys on them, but the values will be different.


const Dad = {
    name: "John",
    favoriteColor: "yellow"
};

const Mom = {
    name: "Stephenie",
    favoriteColor: "red"
};

const brother = {
    name: "Jordan",
    favoriteColor: "Blue"
};

const sister = {
    name: "Beth",
    favoriteColor: "green"
}

let familyMembers = []
//Dot Notation with push method
familyMembers.push(Dad, Mom, brother, sister)

console.log(familyMembers)



const lassie = {
    age: 7,
    breed: "Collie",
    color: "White and Brown"


};


//Dot Notation

// string interpolation
// console.log(`String Interpolation: Lassie's breed is ${lassie.breed}`);
// //string concatenation
// console.log("String Concatenation: Lassie's breed is " + lassie.breed);


// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }
// // console.log("Wardrobe Lightning Exercises")
// console.log(`My Wardrobe height is ${wardrobe.height} inches tall, the contents inside contain ${wardrobe.contents} the depth of the wardrobe is ${wardrobe.depth} inches deep.
// the width of the wardrobe is ${wardrobe.width} wide. The manufacturer is ${wardrobe.manufacturer} the contents include ${wardrobe.contents}`)


//for(let i =0; i < wardrobe.contents.length; i++){
//console.log(`This is in my closet: ${wardrobe.contents[i]}`);




//Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

//Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. 
//Create 5 variables first with the keys as their values. Use those variables to look up the values.

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log(`stories: ${empireStateBuilding.stories}, height: ${empireStateBuilding.height}, squareFeet: ${empireStateBuilding.squareFeet}  eastWestLength,${empireStateBuilding.eastWestLength}  northSouthLength ${empireStateBuilding.northSouthLength}`)


   const key1 = "address"; 
   const key2 = "constructionDate";
   const key3 = "cost";
   const key4 = "owner";
   const key5 = "architect";

   console.log(`${empireStateBuilding[key1]}, ${empireStateBuilding[key2]}, ${empireStateBuilding[key3]}, ${empireStateBuilding[key4]}, ${empireStateBuilding[key5]}`);


   const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}
   const boardedAnimals = kennel.currentAnimals
//for loop to loop through the animals and console log them
   for (let i = 0; i < boardedAnimals.length; i++) {
       console.log(boardedAnimals[i])
   }
   
//    > "Jet"
//    > "Snickers"
//    > "Blue"
//    > "Jacks"
//    > "Flap"
//    > "Barnum"






//Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

//Lightning Exercise 2: Output only Andy and Zoe in the console.


const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
   }
//console.log(nashvilleSoftwareSchool.fulltime, nashvilleSoftwareSchool.partTime);

//console.log(nashvilleSoftwareSchool.instructors.fulltime[4], nashvilleSoftwareSchool.instructors.partTime[0]);

//Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]   
}


console.log(`${beatles.members[1].name} was in the beatles from ${beatles.history.formed} to ${beatles.history.disbanded} He was born in ${beatles.members[1].birth} he contributed heavily to the, ${beatles.albums[3]}Album`)