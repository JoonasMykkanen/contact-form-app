# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    db.py                                              :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 10:52:59 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/06 10:07:03 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from peewee import *

from .utils.helpers import get_timestamp

db = SqliteDatabase('database.db')

class BaseModel(Model):
	timestamp = DateTimeField(index=True, default=get_timestamp())

	class Meta:
		database = db
		order_by = ('timestamp',)
	
	# returns given entry as a dictionary
	def to_dict(self):
		data = {}
		for field in self._meta.fields.values():
			data[field.name] = getattr(self, field.name)
		return data



class Form(BaseModel):
	# Basic info of the customer
	name = TextField()
	company = TextField()
	phone = TextField()
	email = TextField()

	# Voluntary stuff
	msg = TextField()

	# Only for backend
	id = PrimaryKeyField()
	done = BooleanField(default=False)

db.connect()
db.create_tables([
	Form,
])