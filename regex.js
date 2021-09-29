let words = [
  " something ",
  "(html )# body",
  "__unders  bla yttyt",
  "    very$ # rare (format)- + ; {}",
  " who & is ^^^ writ#ing Stuf7 li(k) th@!is",
  "2005 products something",
  "2021 vents and fans"
];
let arr = [];
for (let word of words) {
  let findNumAtStart = word.match(/^(\d+)/g)
  let removedNumAtStart = word.replace(/^(\d+)/g, "")
  let noSpecChar = removedNumAtStart.replace(/[^a-zA-Z0-9]/g, " ");
  let noExtraSpaces = noSpecChar.replace(/\s+/g, " ");
  let trimStartEndSpaces = noExtraSpaces.replace(/^\s+|\s+$/g, "");
  let normalized = trimStartEndSpaces.replace(/ +/g, "_")
  normalized += `_${findNumAtStart}`
  arr.push(normalized);
}
console.log(arr);
// [
//   'something',
//   'html_body',
//   'unders_bla_yttyt',
//   'very_rare_format',
//   'who_is_writ_ing_Stuf7_li_k_th_is'
//   'products_something_2005',
//   'vents_and_fans_2021'
// ]