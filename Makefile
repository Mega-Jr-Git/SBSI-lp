COMPOSE=docker compose
FRONTEND_PORT ?= 5174

.PHONY: help up down restart build logs frontend-shell ps clean

help:
	@echo "Comandos disponiveis no frontend da SBSI:"
	@echo ""
	@echo "  make help            Mostra esta ajuda."
	@echo "  make up              Sobe o ambiente local do frontend."
	@echo "  make down            Para e remove o container do frontend."
	@echo "  make restart         Reinicia o frontend."
	@echo "  make build           Recria a imagem do frontend."
	@echo "  make logs            Mostra os logs do frontend."
	@echo "  make frontend-shell  Abre um terminal dentro do container do frontend."
	@echo "  make ps              Mostra o status atual do container."
	@echo "  make clean           Remove containers, volumes e orfaos do frontend."
	@echo ""
	@echo "Variaveis:"
	@echo "  FRONTEND_PORT=5180   Altera a porta exposta no host. Ex.: make up FRONTEND_PORT=5180"

up:
	FRONTEND_PORT=$(FRONTEND_PORT) $(COMPOSE) up -d
	@echo ""
	@echo "Frontend rodando em: http://localhost:$(FRONTEND_PORT)/"

down:
	$(COMPOSE) down

restart:
	$(COMPOSE) restart

build:
	$(COMPOSE) build

logs:
	$(COMPOSE) logs -f frontend

frontend-shell:
	$(COMPOSE) exec frontend sh

ps:
	$(COMPOSE) ps

clean:
	$(COMPOSE) down --volumes --remove-orphans
