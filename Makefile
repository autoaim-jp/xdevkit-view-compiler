SHELL=/bin/bash
PHONY=default help view-rebuild view-compile view-compile-minify view-watch

.PHONY: $(PHONY)

default: help

view-rebuild: docker-compose-up-view-rebuild
view-compile: docker-compose-up-view-compile
view-compile-minify: docker-compose-up-view-compile-minify
view-watch: docker-compose-up-view-watch

help:
	@echo "Usage: "
	@echo "  make view-compile          # compile"
	@echo "  make view-compile-minify   # compile minify"
	@echo "  make view-watch            # watch"
	
docker-compose-up-view-rebuild:
	docker compose -p docker-view -f ./docker/docker-compose.view.yml down --volumes
	docker compose -p docker-view -f ./docker/docker-compose.view.yml build
docker-compose-up-view-compile:
	BUILD_COMMAND="compile" docker compose -p docker-view -f ./docker/docker-compose.view.yml up --abort-on-container-exit
docker-compose-up-view-compile-minify:
	BUILD_COMMAND="compile-minify" docker compose -p docker-view -f ./docker/docker-compose.view.yml up --abort-on-container-exit
docker-compose-up-view-watch:
	BUILD_COMMAND="watch" docker compose -p docker-view -f ./docker/docker-compose.view.yml up --abort-on-container-exit


