This is a simple project of deploying four Express servers written in Nodejs and an Nginx instance using Docker and a Bash script.
There is a Dockerfile for every server which Docker uses to create the server's image.
A Docker-Compose file will build up five containers containers (four with the Express servers and the fifth with the nginx instance) and do the port mapping.
Four unit-test files written in Nodejs using Jest (one for each Express server) are run to test the HTTP response status code, the response type and other.
Other CLI tests using curl are run after.

All of the above actions are executed using the bash script deploy.sh
