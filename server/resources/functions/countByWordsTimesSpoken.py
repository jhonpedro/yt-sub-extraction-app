from typing import List, Tuple

ListOfWords = List[str]
ListOfWordsCounted = List[Tuple[str, int]]


def countByWordsTimesSpoken(wordsArr: ListOfWords) -> ListOfWordsCounted:
    wordWithCountTuples = []

    for word in wordsArr:
        # This part adds the word with count in the array just one time
        flag = 0
        for tupleWordWithCount in wordWithCountTuples:
            if tupleWordWithCount[0] == word:
                flag = 1
                break
        if flag == 0:
            wordOcurruence = wordsArr.count(word)
            wordWithCountTuples.append((word, wordOcurruence))

    def wordWithCountTuplesSort(tupleWordWithCount):
        return tupleWordWithCount[1]

    wordWithCountTuples.sort(key=wordWithCountTuplesSort, reverse=True)

    return wordWithCountTuples
