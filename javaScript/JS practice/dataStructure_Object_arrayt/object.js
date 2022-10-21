let object1 = {
    value:14,
}
let object2  = object1;
let object3 = {value: 14};
console.log(object2 == object3)
object2.value = 20;
console.log(object2.value)
console.log(object1.value)
console.log(object1.value == object2.value)

const score = {visitor: 0};
score.visitor = 1;
console.log(score.visitor)

var journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "tree", "pizza", "running", "television"], false);
addEntry(["eat", "tree", "pizza", "running", "television"], true);
addEntry(["sleep", "tree", "pizza", "running", "television"], false);
console.log(journal)

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
      let entry = journal[i], index = 0;
      if (entry.events.includes(event)) index += 1;
      if (entry.squirrel) index += 2;
      table[index] += 1;
    }
    return table;
  }

// tableFor("pizza", journal)
// 1.event = "pizza", journal = xyz;
// 2.let table = [0, 0, 0, 0];
// 3.for (let i = 0; i < journal.length; i++)
// 4.for (let i = 0; i < 3; i++){
//     4.1:let entry = journal[i], index = 0;
//     4.2: let entry = journal[0], index = 0
//     4.3:let entry = xyz1, index = 0;
//     4.4:if (entry.events.includes(event)) index += 1;
//     4.5:if (xyz1.events.includes(event)) index += 1;
//     4.6:if (["work", "tree", "pizza", "running", "television"].includes("pizza") index += 1
        // 4.7: if true
        // 4.8:index = 0+1 = 1;
        // 4.9: if (entry.squirrel) index += 2 
        // 4.10:if false 
        // 4.11:table[index] = table[index] + 1
        // 4.12:table[index] = table[1] + 1
        // 4.13: table[index] = 0 + 1 = 1
        // )
// }

let list1 = [1, 2, 4];
console.log(list1.includes(2))
index = 1
let table = [0, 0, 0, 0]
table[index] += 1
console.log(table[index])