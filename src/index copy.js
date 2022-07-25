const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

const str1 = '||';
const str2 = '([{}])';


function check(str, bracketsConfig) {
   let config = [];
   let stack = [];

   for (let i = 0; i < bracketsConfig.length; i++) {
      config = config.concat([...bracketsConfig[i]]);
   }
 
   const brackets = config.join("");
   console.log(brackets);

   for (let bracket of str) {
      let numberBracket = brackets.indexOf(bracket);
      console.log(bracket);

      if (numberBracket % 2 === 0) {
         stack.push(numberBracket + 1);
      } else {
         if (numberBracket !== stack.pop()) {
            return false;
         }
      }
   }
   console.log(stack);

   return stack.length === 0;
}

console.log(check(str2, config3));
