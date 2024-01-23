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
  let maxOdd = 0;
  let maxEven = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      maxEven = Math.max(maxEven, numbers[i]);
    } else {
      maxOdd = Math.max(maxOdd, numbers[i]);
    }
  }
  return maxOdd + maxEven;
};

export { removeIdenticalLetters, maximumOddSum };
