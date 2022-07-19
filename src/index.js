module.exports = function check(str, bracketsConfig) {
   let config = [];
   let stack = [];

   for (let i = 0; i < bracketsConfig.length; i++) {
      config = config.concat([...bracketsConfig[i]]);
   }

   const brackets = config.join("");

   for (let bracket of str) {
      let numberBracket = brackets.indexOf(bracket);
      if (numberBracket % 2 === 0) {
         stack.push(numberBracket + 1);
      } else {
         if (numberBracket !== stack.pop()) {
            return false;
         }
      }
   }

   if (stack.length) {

   }

   return stack.length === 0;
}
