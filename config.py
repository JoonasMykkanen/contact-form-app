# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    config.py                                          :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 11:38:37 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/06 07:26:47 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

import os

class Config:
	MAIL_SERVER = 'smtp.gmail.com'
	MAIL_PORT = 587
	MAIL_USE_TLS = True
	MAIL_USERNAME = os.environ.get('GMAIL_ADDR')
	MAIL_PASSWORD = os.environ.get('GMAIL_PWD')
	MAIL_DEFAULT_SENDER = os.environ.get('GMAIL_ADDR')
	ADMIN_KEY = os.environ.get('ADMIN_KEY')