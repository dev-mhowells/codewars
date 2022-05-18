//Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
  const toExclude = ["_", "-"];

  for (let char in toExclude) {
    for (let index = 0; index < str.length; index++) {
      if (str[index] === toExclude[char]) {
        let capNext = str.replace(str[index + 1], str[index + 1].toUpperCase());
        let removeChar = capNext.replace(toExclude[char], "");
        str = removeChar;
      }
    }
  }
  return str;
}

console.log(toCamelCase("hello-monkey-window"));
console.log(toCamelCase("hi_monkey_window"));
