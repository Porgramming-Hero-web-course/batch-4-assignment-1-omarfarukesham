{
/**
 Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string).
  
 It should return the number of times the word appears in the sentence, case-insensitively.


// Sample Input:
countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// Sample Output:
2;

 */

function countWordOccurrences(sentence: string, word: string): number {
    if(!sentence && !word){
        console.error('sentence an word must not be empty!!!!')
        return 0
    }

    const regSentenceArr = sentence.toLowerCase().split(/\W+/);
    const matchingWord = word.toLowerCase();
    const getResult = regSentenceArr.filter(w => w === matchingWord).length;
    return getResult;
  }

 const checkReturnResult = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
//  const checkReturnResult = countWordOccurrences("javascript, javascript, Javascript, is great. I love javascritp!", "Javascript");
//  console.log(checkReturnResult)





    
}