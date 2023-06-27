# Maxtec Institucional
> Site

## Ambiente
- Next:13
- MySQL:5.7
- Strapi CMS

## Comandos de configuração
### Backend
Navegue até o backend do projeto
```bash
cd backend
```

Crie o <code>.env</code>
```bash
cp .env.example .env
```

Crie a pasta <code>node_modules</code>
```bash
mkdir node_modules
```

Suba os containers
```bash
docker compose up -d
```

### Frontend
Navegue até o front do projeto
```bash
cd frontend
```

Crie a pasta <code>node_modules</code>
```bash
mkdir node_modules
```

Suba os containers
```bash
docker compose up -d
```