MAKEFLAGS += --silent

build:
	docker-compose build --no-cache

upd:
	docker-compose up -d

api-container:
	docker exec -it movietheque-express /bin/bash

ui-container:
	docker exec -it movietheque-react /bin/bash

db-container:
	docker exec -it movietheque-mongodb /bin/bash

stop:
	docker-compose stop

down:
	docker-compose down