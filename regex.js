let words = [
  " something ",
  "(html )# body",
  "__unders  bla yttyt",
  "    very$ # rare (format)- + ; {}",
  " who & is ^^^ writ#ing Stuf7 li(k) th@!is"
];
let arr = [];
for (let word of words) {
  let noSpecChar = word.replace(/[^a-zA-Z0-9]/g, " ");
  let noExtraSpaces = noSpecChar.replace(/\s+/g, " ");
  let trimStartEndSpaces = noExtraSpaces.replace(/^\s+|\s+$/g, "");
  arr.push(trimStartEndSpaces.replace(/ +/g, "_"));
}
console.log(arr);
// [
//   'something',
//   'html_body',
//   'unders_bla_yttyt',
//   'very_rare_format',
//   'who_is_writ_ing_Stuf7_li_k_th_is'
// ]