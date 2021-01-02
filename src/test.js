


var a = 0
var sum = 0
setTimeout(() => {
  a = 4 + 5
  say(a)
}, 5000)


function say(a) {
  const b = a + 1 // 10
  setTimeout(() => {
    sum = b + 1 // 11
    say1(sum)
  }, 5000)
}
function say1(b) {
  console.log(b)
}

new Promise((resolve, reject) => {
  if (true) {
    resolve()
  } else {
    reject()
  }
}).then((data) => {

}, () => {

})





