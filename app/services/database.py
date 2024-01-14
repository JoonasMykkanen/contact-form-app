# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    database.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 11:00:09 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/06 10:19:13 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from ..utils.helpers import ft_print
from ..utils.constants import *
from pprint import pprint
from ..db import *

def push_entry(data):
	try:
		new_entry = Form.create(
			name=data['name'],
			company=data['company'],
			phone=data['phone'],
			email=data['email'],
			msg=data['msg']
		)
		
		new_entry.save()
		ft_print(f'Posted to db', OK)

	except Exception as e:
		ft_print(f'Database: push_entry: {e}', ERROR)
		raise

# Returns list of dicts that each represent a entry in the db
# [ {...}, {...}, {...}, ]
def get_entries():
	try:
		data = Form.select()
		response = []

		for entry in data:
			response.append(entry.to_dict())

		ft_print(f'data retrieved', OK)
		return response

	except Exception as e:
		ft_print(f'Database: get_entries: {e}', ERROR)
		raise

# Will update entries if they are marked as done
# search will be done by phonenumber
def update_entry(id):
	try:
		entry = Form.get(Form.id == id)
		entry.done = True
		entry.save()
		ft_print(f'entry updated', OK)

	except Exception as e:
		ft_print(f'Database: update_entry: {e}', ERROR)