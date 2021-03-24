from flask import request
from flask_restful import Resource
from youtube_transcript_api import YouTubeTranscriptApi as api
import functions


class YoutubeExtraction(Resource):
    def get(self):
        YtVideoId = request.args.get('videourl')

        if len(YtVideoId) > 11:
            YtVideoId = YtVideoId[-11:]

        try:
            transcriptList = api.get_transcript(YtVideoId, languages=['pt'])

            allTranscriptText = ''

            for transcript in transcriptList:
                allTranscriptText += transcript['text'] + ' '

            stopWordsPT = nltk.corpus.stopwords.words('portuguese')

            allWords = []

            for word in allTranscriptText.split(' '):
                if word not in stopWordsPT:
                    allWords.append(word)

            allWordsStem = []

            # Stem the word https://www.nltk.org/howto/stem.html
            for word in allWords:
                if len(word) > 1:
                    if not word.startswith('['):
                        allWordsStem.append(nltk.stem.RSLPStemmer().stem(word))

            # This variable below is an array with tuples like this: (word, countOcurrenceOfTheWord)
            wordWithCountTuples = functions.countByWordsTimeSpoken(allWordsStem)

            wordWithCountTuplesNormalized = []

            for topTenStem in wordWithCountTuples:
                for word in allWords:
                    if word.startswith(topTenStem[0]):
                        wordWithCountTuplesNormalized.append((word, topTenStem[1]))
                        break

            return {
                'tenMostSpoken': wordWithCountTuplesNormalized[:10],
                'wordsTimesSpoken': wordWithCountTuplesNormalized,
            }
        except Exception as error:
            print(error)
            return {
                'message': 'this video subtitle may be disabled, try again this video later'
            }
