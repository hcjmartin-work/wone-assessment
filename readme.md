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

### Schema Changes
As the schema changes, you will need to run ```npx prisma generate``` to keep the prisma client up to date.

This additional dependency should be generated whenever prisma client is installed - so it should not require manual execution on new setup.

## Testing
Run ```npm run test```

# Notes

## 'Productionising'
- Use your favourite IaC to manage live dev and prod environments (eg. pulumi)