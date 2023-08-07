const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " ",
};

function decode(expr) {
  let arr = [];
  arr = expr.split("");
  let arr2 = [];
  const chunkSize = 10;
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    arr2.push(chunk);
  }
  let arr3 = [];
  let arr4 = [];

  arr2.forEach((item, index) => {
    arr4[index] = [];
    for (let j = 0; j < item.length; j += 2) {
      if (item[j + 1]) {
        const str = item[j] + item[j + 1];
        if (str == "**") {
          arr4[index].push("**********");
          j += 10;
        } else {
          if (str == "10") {
            arr4[index].push(".");
          }
          if (str == "11") {
            arr4[index].push("-");
          }
        }
      }
    }
  });

  const keys = Object.keys(MORSE_TABLE);

  let temp = "";
  let tempindex = 0;
  let arr5 = [];
  let arr6 = [];
  arr4.forEach((item, index) => {
    arr6.push(item.join(""));
    // console.log(item);
    // if (temp) {
    //   arr6.push(temp);
    // }
    // temp = "";
    // item.forEach((sym) => {
    //   if (sym == "**********") {
    //     arr6.push(sym);
    //   } else {
    //     if (keys.includes(temp + sym)) {
    //       temp = temp + sym;
    //     } else {
    //       if (temp) {
    //         arr6.push(temp);
    //       }
    //     }
    //   }
    // });
  });

  const final = arr6.map((item) => MORSE_TABLE[item]).join("");
  return final;
}
module.exports = {
  decode,
};
