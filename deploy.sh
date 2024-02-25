#! /bin/bash

if [[ $1 == 'test' ]]; then
		printf "\n\n"
		echo "++++++++++Testing Express servers...++++++++++"

		printf "\n"

		echo "<-><-><->Automated unit testing of code using Jest and Supertest:<-><-><->"
		for k in `seq 1 4`; do
		echo "Testing Express$k application code:"
			docker exec -it express$k npx jest
			sleep 3
		done

		printf "\n"

		echo "<-><-><->HTTP testing:<-><-><->"
		for j in `seq 1 4`; do
   		echo "Testing Express$j server..."
        		sleep 5
        		response=$(curl 127.0.0.1:300$j/app$j 2>/dev/null)
               			if [[ $response != "" ]]; then
                        		echo "Express$j is up and running on 127.0.0.1:300$j"
                		else
                        		echo "Express$j is down!"
                		fi

		done

		printf "\n\n"

		echo "++++++++++++Testing nginx server...+++++++++++"

   		response=$(curl 127.0.0.1:80 2>/dev/null)
                		if [[ $response != "" ]]; then
                        		echo "Nginx is up and running on 127.0.0.1:80"
                		else
                        		echo "Nginx is down!"
                		fi
		printf "\n\n"
else

		printf "\n\n"

		echo "++++++++++Creating Docker images...+++++++++++"

		for i in `seq 1 4`; do
			cd /home/karandash/Desktop/Express/express$i && docker build -t express$i .
		done

		echo "++++++++Deploying Docker containers...++++++++"
		cd /home/karandash/Desktop/Express && docker-compose up -d

		printf "\n\n"

		echo "++++++++++Testing Express servers...++++++++++"


		echo "<-><-><->Automated unit testing of code using Jest and Supertest:<-><-><->"
                for k in `seq 1 4`; do
                echo "Testing Express$k application code:"
                        docker exec -it express$k npx jest
                        sleep 3
                done

                printf "\n"

                echo "<-><-><->HTTP testing:<-><-><->"

		for j in `seq 1 4`; do
   		echo "Testing Express$j server..."
			sleep 5
			response=$(curl 127.0.0.1:300$j/app$j 2>/dev/null)
				if [[ $response != "" ]]; then
					echo "Express$j is up and running on 127.0.0.1:300$j"
				else
					echo "Express$j is down!"
				fi
		done
		printf "\n\n"
		echo "++++++++++++Testing nginx server...+++++++++++"

   		response=$(curl 127.0.0.1:80 2>/dev/null)
   				if [[ $response != "" ]]; then
					echo "Nginx is up and running on 127.0.0.1:80"
				else
					echo "Nginx is down!"
				fi
		printf "\n\n"
fi
