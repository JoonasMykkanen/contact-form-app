# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    email.py                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 11:04:15 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/03 12:28:06 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from flask_mail import Message
from flask import current_app

from ..utils.constants import *
from ..utils.helpers import *

# TODO: parse message to prittier format, probably HTML so that it will be pretty mail
def send_mail(msg):
	try:
		body = f'{msg}'
		message = Message(f'New inquiry {get_timestamp()}', recipients=[current_app.config['MAIL_USERNAME']], body=body)
		current_app.config['mail'].send(message)
	except Exception as e:
		ft_print(f'send_mail: {e}', ERROR)
		raise