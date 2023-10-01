function findLongestWord(sentence) {
  // Check if the input sentence is empty
  if(sentence.trim() == 0)
    return false;

  let words = sentence.match(/[a-zA-Z]+/g);
  if (!words) return false;

  let longestWord = '';
  let maxVowels = 0;

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
      maxVowels = countVowels(word);
    } else if (word.length === longestWord.length) {
      const vowelCount = countVowels(word);
      if (vowelCount > maxVowels) {
        longestWord = word;
        maxVowels = vowelCount;
      }
    }
  }

  return longestWord;
}

function countVowels(word) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }

  return count;
}

// Sample input
const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
const longestWord = findLongestWord(sentence);

// Output the longest word or prompt for valid input
if (!longestWord) {
  console.log("Please Input a valid sentence");
} else {
  console.log("Longest word:", longestWord);
}
// different scenarios 
//1.empty string or a couple of spaces like  "    "
// 2.sentence with just special character e.g "123 456 !@#$%^"
//3. sentence with uppercase and lowercase mixed e.g "aAa aAaAaAaA AAaa AAaaaAa"
//4. sentence with only one word e.g "Testing"
//5. sentence with numbers e.g "The quick brown 42 fox"
//6. multiple words with maximum length e.g "aaaa bbbb cccc"
// 7.sentence with punctuations e.g ""Longest word in a sentence, with some punctuations!""
