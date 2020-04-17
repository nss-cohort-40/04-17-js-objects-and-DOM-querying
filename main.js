console.log("You are a rock star!")

// lightning 1
let car = {
  year: "2015",
  make: "Ford",
  model: "Mustang",
  color: "red"
}

// lightning 2
let shelterAnimals = ["Kipper", "Seymour Bouts", "Gypsy", "Angus"]

// lightning 3
let mom = {
  age: 63,
  relation: "mom",
  fave_color: "green",
  fave_food: "hot dogs"
}

let dad = {
  age: 63,
  relation: "dad",
  fave_color: "orange",
  fave_food: "pasta"
}

let steve = {
  age: 36,
  relation: "brother",
  fave_color: "yellow",
  fave_food: "el pato"
}

let quincy = {
  age: .75,
  relation: "child",
  fave_color: "aqua",
  fave_food: "cottage cheese"
}

let family_members = [mom, dad, steve, quincy]
console.log("family members arr", family_members)

// Lightning ex bracket and dot notations
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

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log(
  "dimensions",
  "height:", empireStateBuilding.height,
  "squareFt:", empireStateBuilding.squareFeet,
  "EW length:", empireStateBuilding.eastWestLength,
  "NS length:", empireStateBuilding.northSouthLength
  )

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
let stories = "stories"
let add = "address"
let con_date = "constructionDate"
let owner = "owner"
let arch = "architect"

console.log("other props",
  empireStateBuilding[stories],
  empireStateBuilding[add],
  empireStateBuilding[con_date],
  empireStateBuilding[owner],
  empireStateBuilding[arch]
)






















// let family_members = 345

// console.log("family?", family_members)

// const name = "Fred"
// const name = "Larry"
// console.log('name', name);
// var name = "Fred"
// var name = "WTF"
// name = "Whatever, man"
// console.log('name', name);
