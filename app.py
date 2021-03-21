from flask import Flask
from flask_restful import Api

from resources.YoutubeExtraction import YoutubeExtraction

app = Flask(__name__)
api = Api(app)

api.add_resource(YoutubeExtraction, '/<string:YtVideoId>')

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', port=8080)
