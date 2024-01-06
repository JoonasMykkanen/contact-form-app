# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    api.py                                             :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 10:44:23 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/06 10:22:45 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from ..services.email import send_mail
from flask import send_from_directory
from flask import current_app
from flask import Blueprint
from flask import request
from pprint import pprint
from flask import jsonify
import json
import os

from ..utils.constants import ERROR
from ..services.database import *
from ..services.auth import *
from ..utils.helpers import *

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
    try:
        data = request.json
        push_entry(data)
        send_mail(data)
        return jsonify({'message': 'Saved to database and sent notification'}), HTTP_CREATED

    except Exception as e:
        ft_print(e, ERROR)
        return jsonify({'message': 'Internal server error'}), HTTP_INT_ERROR
    

# TODO: check with Mike that this route cannot be exploited
@bp.route('/auth', methods=['POST'])
def login():
    if is_authenticated(request):
        return jsonify({'message': 'Authentication succesful'}), HTTP_OK
	
    return jsonify({'message': 'Authentication failed'}), HTTP_AUTH_FAILED



# Few steps here to show admin data
# 1) authenticate (if not authenticated, React will redir to /login)
# 2) get data from db
# 3) parse it and return
@bp.route('/admin', methods=['GET'])
def display_dashboard():
    try:
        if not is_authenticated(request):
            raise AuthenticationError('Authentication failed')
        
        response = get_entries()
        return jsonify(response)

    except AuthenticationError as auth_error:
        ft_print(auth_error, ERROR)
        return jsonify({'message': 'Authentication failed'}), HTTP_AUTH_FAILED

    except Exception as e:
        ft_print(e, ERROR)
        return jsonify({'message': 'Internal server error'}), HTTP_INT_ERROR



# Will update done field in the record from default (false) to true
@bp.route('/form/<int:id>', methods=['PUT'])
def mark_as_done(id):
    try:
        if not is_authenticated(request):
            raise AuthenticationError('Authentication failed')
    
        update_entry(id)
        return jsonify({'message': 'Update succesfull'}), HTTP_OK
    
    except AuthenticationError as auth_error:
        ft_print(auth_error, ERROR)
        return jsonify({'message': 'Authentication failed'}), HTTP_AUTH_FAILED

    except Exception as e:
        ft_print(e, ERROR)
        return jsonify({'message': 'Internal server error'}), HTTP_INT_ERROR