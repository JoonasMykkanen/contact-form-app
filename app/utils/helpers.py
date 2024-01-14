# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    helpers.py                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/12/19 14:38:49 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/06 08:24:53 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from datetime import datetime
from .constants import *

class AuthenticationError(Exception):
	pass

# will return datetime object in a format of = YYYY-MM-DDTHH
def get_timestamp():
	return datetime.now().isoformat()

# Helper function to make standard log messages to terminal
# Will use this trough app so all messages have same format
def ft_print(msg, type):
	if type == ERROR:
		COLOR = RED
	elif type == OK:
		COLOR = GREEN
	else:
		COLOR = BLUE

	print(f'{get_timestamp()} - {COLOR}{msg}{RESET}')
