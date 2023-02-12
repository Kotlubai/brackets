module.exports = function check(str, bracketsConfig) {
let stack = [];
  if (str.length % 2 !== 0) {
    return false;
  } else {
    let open = [];
    let close = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
      open.push(bracketsConfig[i][0]);
      close.push(bracketsConfig[i][1]);
    }
    for (let j = 0; j < str.length; j++) {
      let currentElement = str[j];
      let top = stack[stack.length - 1];
      if (open.includes(currentElement)) {
        stack.push(currentElement);
      }
      if (top === currentElement && open.includes(currentElement) && close.includes(currentElement)) {
        stack.pop();
      }
      if (close.includes(currentElement) && open.indexOf(top) === close.indexOf(currentElement)) {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
