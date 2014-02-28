NPM_BIN = ./node_modules/.bin
ENB = $(NPM_BIN)/enb
JSHINT = $(NPM_BIN)/jshint
JSCS = $(NPM_BIN)/jscs
MOCHA = $(NPM_BIN)/mocha

.PHONY: validate
validate: lint test

.PHONY: test
test: npm_deps clean build
	$(MOCHA) test/func

.PHONY: lint
lint: npm_deps
	$(JSHINT) .
	$(JSCS) -c .jscs.js .

.PHONY: build
build: npm_deps
	cd examples/silly && ../../$(ENB) make --no-cache

.PHONY: clean
clean: npm_deps
	cd examples/silly && ../../$(ENB) make clean

.PHONY: npm_deps
npm_deps:
	npm install
