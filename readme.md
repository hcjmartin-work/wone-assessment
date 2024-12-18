# API Solution Description
PostgreSQL
Typescript
Fastify
Prisma ORM

See ```/api/prisma/schema.prisma``` for db structure

See ```/assessment/notes.md``` for my personal notes on discussion + architecture


# Running the project locally
You will need Docker to start the db server

## Local SSL trust
Create a local certificate (ensure it is .gitignore'd before your next commit)
```
openssl genrsa -out key.pem   
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem 
```

> NOTE: You will need to ensure the locally generated SSL is trusted by your browser.
>
> First generate the keys then add the cert to your locally trusted certificates.
> On a mac you do this by adding the cert to your keychain.
> 
> Also enabling the following option in chrome will trust localhost explicitly:
> ```chrome://flags/#allow-insecure-localhost```

## Running
1. Start the local postgres database from the project root folder
```
docker compose up
```

1. Ensure you are using node 20. If you're using fnm: 
```
fnm use 20
```

1. Switch to the api folder and install the local packages
```
cd api
npm install
```

1. Run the prisma db migrations and seed
Should be:
```
npx prisma migrate reset
```

1. Build and run the api
```
npm run build
npm run start
```


# API Development

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

# React / Web Solution Description
Ensure the api is available at the correct port (see fetch in App.tsx)

Start with `yarn start`


# Notes on Assessment
I used https://www.npmjs.com/package/html-react-parser to parse the raw html string.
I chose this package as it is most currently maintained, highly used (over 1m weekly downloads) and avoids use of dangerouslySetInnerHTML.

## Next immediate steps would be:
- Move Form get to state management - use url param to select form/version
- Create Form User State 
  - Ideally rematch (as I feel it provides a simpler interface and reduces boilerplate)
- Update State with input (use input ID to append/update)
- Call submit to API on state update or on manual submit