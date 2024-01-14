# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    run.py                                             :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/12/19 09:22:36 by jmykkane          #+#    #+#              #
#    Updated: 2024/01/03 11:38:01 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from dotenv import load_dotenv
load_dotenv()
from app import create_app

app = create_app()

if __name__ == '__main__':
	app.run()