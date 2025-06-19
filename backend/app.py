from flask import Flask
from flask_cors import CORS
from routes.convert import bp as convert_bp
import config


def create_app():
    app = Flask(__name__)
    CORS(app, origins="*")

    app.register_blueprint(convert_bp)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, host=config.API_HOST, port=config.API_PORT)
