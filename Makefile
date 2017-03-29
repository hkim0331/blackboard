all:
	@echo \'make init\' to prep blackboad.
	@echo \'make start\' to start node server at port 3000.

init:
	npm init -y
	npm install express socket.io --save

start:
	node app.js

clean:
	${RM} *~
