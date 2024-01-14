# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    auth.py                                            :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/01/03 11:04:09 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/06 08:14:47 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from flask import current_app

# returns true / false based on if the authorization header matches the .env files api_key
def is_authenticated(request):
	api_key = request.headers.get('Authorization')
	secret = f'Bearer {current_app.config["ADMIN_KEY"]}'

	if api_key and secret and api_key == secret:
		return True
	
	return False