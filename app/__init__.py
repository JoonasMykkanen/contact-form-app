# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    __init__.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 10:24:19 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/03 11:38:31 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# General imports
from flask_cors import CORS
from config import Config
from flask import Flask

# User defined imports
from .routes.api import bp

# Responsible for creating actual app and setting up CORS to make it work with react
def create_app():
	app = Flask(__name__)
	app.config.from_object(Config)
	app.register_blueprint(bp)
	CORS(app)

	return app