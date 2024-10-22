# Running the project locally
You will need:
Docker, node

1. Ensure you are using node 20. If you're using fnm: 
```
fnm use 20
```

2. Start the local postgres database:
```
docker compose up
```

> **_NOTE_:** Currently docker-compose contains only the postgres database

  

# Development

> <span style="color:orange">**_TODO_:**</span> Create a start/run script

## Database

### Migrations
Update the prisma schema and run 
```npx prisma migrate dev --name init```

# Notes

## 'Productionising'
- Use your favourite IaC to manage live dev and prod environments (eg. pulumi)