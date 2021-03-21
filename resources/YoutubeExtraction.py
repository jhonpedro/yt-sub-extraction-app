from flask_restful import Resource


class YoutubeExtraction(Resource):
  def get(self, YtVideoId):
      return {'VideoId': YtVideoId}