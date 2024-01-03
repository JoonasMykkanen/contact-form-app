# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    helpers.py                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/12/19 14:38:49 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/03 11:34:06 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from datetime import datetime
from .constants import *

# will return datetime object in a format of = YYYY-MM-DDTHH
def get_timestamp():
	return datetime.now().strftime('%Y-%m-%dT%H')

# Will parse it back to datetime object
def parse_timestamp(timestamp_str):
    return datetime.strptime(timestamp_str, '%Y-%m-%dT%H')
	
def ft_print(msg, type):
	if type == ERROR:
		COLOR = RED
	elif type == OK:
		COLOR = GREEN
	else:
		COLOR = BLUE

	print(f'{get_timestamp()}{COLOR} - {msg}{RESET}')
