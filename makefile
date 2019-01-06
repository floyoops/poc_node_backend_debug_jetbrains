.PHONY: install
install:
	npm i

.PHONY: start-prod
start-prod:
	npm run start

.PHONY: dev
dev:
	npm run build-development