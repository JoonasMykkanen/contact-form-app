# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    database.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 11:00:09 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/03 11:34:55 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from ..utils.helpers import ft_print
from ..utils.constants import *
from ..db import *

def push_entry(data):
	try:
		new_entry = Form.create(
			name=data['name'],
			company=data['company'],
			phone=data['phone'],
			email=data['email'],
			url=data['url'],
			msg=data['msg']
		)
		new_entry.save()
		ft_print(f'Posted to db', OK)

	except Exception as e:
		ft_print(f'Database: push_entry: {e}', ERROR)
		raise