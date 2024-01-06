# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    __init__.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 10:24:19 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/03 12:04:48 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# General imports
from flask_cors import CORS
from flask_mail import Mail
from config import Config
from flask import Flask

# User defined imports
from .routes.api import bp

# Responsible for creating actual app and setting up CORS to make it work with react
def create_app():
	app = Flask(__name__)
	app.register_blueprint(bp, url_prefix='/api')
	
	app.config.from_object(Config)
	app.config['mail'] = Mail(app)
	
	CORS(app)

	return app