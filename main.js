const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10, 121, 121]
// const findDupes = (arr) => {
//   const result = []
//   arr.forEach((item, index) => {
//     if (arr.indexOf(item) !== index) {
//       result.push(item)
//     }
//   })
//   return result
// }
// console.log(findDupes(arr))

// const findDuplicate = (arr) => {
//   const dups = []
//   const compare = []

//   for (let num in arr) {
//     if (compare.includes(arr[num])) {
//       dups.push(arr[num])
//     } else {
//       compare.push(arr[num])
//     }
//   }
//   return dups
// }
// console.log(findDuplicate(arr))

// const findDup = (arr) => {
//   const dups = []
//   let index

//   for (let i = 0; i < arr.length; i++) {
//     index = Math.abs(arr[i]) - 1

//     if (arr[index] < 0) {
//       dups.push(index + 1)
//     } else {
//       arr[index] = -arr[index]
//     }
//   }
//   return dups
// }

// console.log(findDup(arr))

// const numbers = [1, 2, 3, 4, 5]

// const oddArray = numbers.filter((number) => number % 2 !== 0)
// console.log(oddArray)

// const addNumbers = numbers.reduce((acc, number) => acc + number, 0)
// console.log(addNumbers)

// let vals = [1, 4, 5, 2, 56, 8, 9]
// const compare = (a, b) => {
//   return b - a
// }
// console.log(vals.sort((a, b) => compare(a, b)))

const students = [
  { name: "John James", status: true },
  { name: "Micheal Obi", status: false },
  { name: "Bola Ade", status: true },
  { name: "Emmanuel", status: false },
  { name: "Faithfulness Alamu", status: true },
]
const presentStudent = students.filter((student) => student.status == true)
console.log(presentStudent)
