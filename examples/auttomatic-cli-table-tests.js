require("../test/example-header.js")()
// var Table = require('cli-table');
const Table = require("../")("automattic-cli-table")

/* col widths */
const t1 = new Table({
  head: ["Rel", "Change", "By", "When"]
  , colWidths: [6, 21, 25, 17]
})
t1.push(
  ["v0.1", "Testing something cool", "rauchg@gmail.com", "7 minutes ago"]
  , ["v0.1", "Testing something cool", "rauchg@gmail.com", "8 minutes ago"]
)
console.log(t1.toString())

/* compact */
const t2 = new Table({
  head: ["Rel", "Change", "By", "When"]
  , colWidths: [6, 21, 25, 17]
  , style: {compact: true, "padding-left": 1}
})
t2.push(
  ["v0.1", "Testing something cool", "rauchg@gmail.com", "7 minutes ago"]
  , ["v0.1", "Testing something cool", "rauchg@gmail.com", "8 minutes ago"]
  , []
  , ["v0.1", "Testing something cool", "rauchg@gmail.com", "8 minutes ago"]
)
console.log(t2.toString())

/* headless */
var headless_table = new Table()
headless_table.push(["v0.1", "Testing something cool", "rauchg@gmail.com", "7 minutes ago"])
console.log(headless_table.toString())

/* vertical */
var vertical_table = new Table({
  style: {
    head: ["green"]
  }
})
vertical_table.push({ "Some Key": "Some Value"},
  {"Another much longer key": "And its corresponding longer value"}
)
console.log(vertical_table.toString())

/* cross */
var cross_table = new Table({ head: ["", "Header #1", "Header #2"] })
cross_table.push({ "Header #3": ["Value 1", "Value 2"] },
  { "Header #4": ["Value 3", "Value 4"] })
console.log(cross_table.toString())
