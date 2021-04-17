from flask import request
from flask_restful import Resource
from youtube_transcript_api import YouTubeTranscriptApi as api
import nltk
from resources.functions import countByWordsTimesSpoken


class YoutubeExtraction(Resource):
    def get(self):
        YtVideoId = request.args.get('videourl')
        rso = request.args.get('rso')

        # Verify if rso is an str and converts it to an boolean
        if isinstance(rso, str):
            try:
                rso = bool(int(rso))
            except:
                return { 'message': 'rso must be <0> or <1>' }, 403
        else:
            rso = False

        removeSpokenOnce = rso

        if len(YtVideoId) > 11:
            videioIdPosition = YtVideoId.find('v=') + 2
            YtVideoId = YtVideoId[videioIdPosition:videioIdPosition + 11]

        try:
            transcriptList = api.get_transcript(
                YtVideoId, languages=['pt', 'en'])

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
            wordWithCountTuples = countByWordsTimesSpoken.exec(
                allWordsStem, removeSpokenJustOnce=removeSpokenOnce)

            # This will contain the words normalized, because in count of words
            # we remove the sufix ex: turning -> turn || virando -> vir
            wordWithCountTuplesNormalized = []

            for topTenStem in wordWithCountTuples:
                for word in allWords:
                    if word.startswith(topTenStem[0]):
                        wordWithCountTuplesNormalized.append(
                            (word, topTenStem[1]))
                        break

            return {
                'wordsTimesSpoken': wordWithCountTuplesNormalized,
            }
        except Exception as error:
            print(error)
            return {
                'message': 'this video subtitle may be disabled, try again this video later'
            }, 400
