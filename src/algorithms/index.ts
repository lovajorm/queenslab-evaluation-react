// I assume I will only remove letters if there are exactly 4 identical letters so I wont do anything if there is for ex 5
const removeIdenticalLetters = (str: string): string => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (
      i + 3 < str.length &&
      str[i] === str[i + 1] &&
      str[i] === str[i + 2] &&
      str[i] === str[i + 3]
    ) {
      result += str.substring(i, i + 3);
      i += 3;
    } else {
      result += str[i];
    }
  }
  return result;
};

const maximumOddSum = (numbers: number[]): number => {
  let oddSums = [];

  numbers.sort(function (a, b) {
    return b - a;
  });
  console.log(numbers);

  for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length - 1) {
      if ((numbers[i] + numbers[0]) % 2 !== 0) {
        oddSums.push(numbers[i] + numbers[0]);
      }
    } else {
      if ((numbers[i] + numbers[i + 1]) % 2 !== 0) {
        oddSums.push(numbers[i] + numbers[i + 1]);
      }
    }
  }
  console.log(oddSums);
  return Math.max(...oddSums);
};

export { removeIdenticalLetters, maximumOddSum };
