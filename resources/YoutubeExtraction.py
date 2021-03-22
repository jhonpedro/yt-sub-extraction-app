from flask import request
from flask_restful import Resource
from youtube_transcript_api import YouTubeTranscriptApi as api
import nltk
import os


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
        if len(word) >1:
          if not word.startswith('['):
            allWordsStem.append(nltk.stem.RSLPStemmer().stem(word))

      mostSpoken = []

      for word in allWordsStem:
        wordOcurruence = allWordsStem.count(word)
        mostSpoken.append((word, wordOcurruence))

      mostSpokenSize = len(mostSpoken)

      def sortMostSpoken(tupleMostSpoken):
        return tupleMostSpoken[1]
          

      mostSpoken.sort(key=sortMostSpoken, reverse=True)

      topTenMostSpokenStem = []

      for mostSpokenTuple in mostSpoken:
        if mostSpokenTuple not in topTenMostSpokenStem:
          topTenMostSpokenStem.append(mostSpokenTuple)

      mostSpokenNormalized = []

      for topTenStem in topTenMostSpokenStem:
        for word in allWords:
          if(word.startswith(topTenStem[0])):
            mostSpokenNormalized.append((word, topTenStem[1]))
            break

      return {'tenMostSpoken': mostSpokenNormalized[:10], 'wordsTimesSpoken': mostSpokenNormalized}
    except Exception as error:
      print(error)
      return {'message': 'this video subtitle may be disabled, try again this video later'}