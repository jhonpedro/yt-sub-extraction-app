from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from resources.YoutubeExtraction import YoutubeExtraction

app = Flask(__name__)
api = Api(app)
CORS(app, resources={r"/*": {"origins": "*"}})

api.add_resource(YoutubeExtraction, '/')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
