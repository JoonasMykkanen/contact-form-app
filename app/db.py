# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    db.py                                              :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 10:52:59 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/03 11:36:54 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from peewee import *

from app.utils.helpers import get_timestamp

db = SqliteDatabase('database.db')

class BaseModel(Model):
	timestamp = DateTimeField(index=True, default=get_timestamp)

	class Meta:
		database = db
		order_by = ('timestamp',)

class Form(BaseModel):
	name = TextField()
	company = TextField()
	phone = TextField()
	email = TextField()
	url = TextField()
	msg = TextField()

db.connect()
db.create_tables([
	Form,
])