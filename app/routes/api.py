# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    api.py                                             :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 10:44:23 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/03 11:35:19 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from flask import send_from_directory
from flask import current_app
from flask import Blueprint
from flask import request
from pprint import pprint
import os

from ..services.database import push_entry

bp = Blueprint('api', __name__)

# Will handle serving REACT-APP to clients
@bp.route('/', defaults={'path': ''})
@bp.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(current_app.static_folder + '/build/' + path):
        return send_from_directory(current_app.static_folder + '/build', path)
    else:
        return send_from_directory(current_app.static_folder + '/build', 'index.html')



# handles POST method of the form in the main page
@bp.route('/form', methods=['POST'])
def handle_post():
    data = request.json

    try:
        push_entry(data)
        return 'Notification sent', 200

    except Exception as e:
        return f'problem during POST request handling: {e}', 500