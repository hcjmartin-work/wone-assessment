# Exploration and Architecture Discussion

## Requirements and Decisions
I understand the WONE tech stack to be:
SQL - React - AWS - Typescript - Python - React Native - Django - GraphQL

The Assessment imposes:
*May use Python, Javascript/Typescript and any framework/services/db you prefer.*

**Choice: Database type**
Document DB / NoSQL or Relational? SQL
Storage of large format JSON blob such as assessment criteria would store well in a document storage format (nosql) - however other storage requirements, such as user permissions, groups (admins/users) and other API data would be ideally stored in a traditional relationship / SQL database. Given the time constraints, my experience and WONE's use of SQL, I think I'll use an SQL database - but this could be expanded to use a mixed approach for optimisation (but I would caution against the increased complexity / unnecessary additional work).

**Choice: Language for API**
Typescript or Python? Typescript.

Although building the project might be slightly quicker with Python - I prefer the readability of Javascript/Typescript and believe the prevailing usage of Typescript in professional APIs leads to a number of security/reliability advantages.

**Choice: API Framework**
Express.js, Fastify, NestJS and NextJS are my top choices here.
Express is the most tried + tested, however Fastify provides a lot more out of the box incl. validation. 
I haven't personally used NestJS. NextJS is great; and I would love to use it, but I haven't used it for API work before and I wouldn't choose it without thoroughly researching it's cons - it's much less mature as far as I understand.

**Choice: ORM**
To map the models and manage db I'll use Prisma as it's generally the most accepted / common for this stack. Also have experience using it at GoodHuman.

### Other Requirements: 

Two User Types (Admins and Users):
Creation of auth / users is outside the scope of this project; but they should be considered and future extension can be prepared for. 

- Will document middleware / permission handling for future work

Admins can create and modify assessments
CRUD for assessments need to be created
For brevity; administration routes will be under /admin/ route path.

- Will create:
	- /admin/ create
		- If no formId is provided - create a new form
		- If formId is provided - create a new version of form
		- If formId and formVersionId is provided - modify this version of the form

Admins can deploy new *versions* of assessments:
- Where 'create' is used with an existing assessment id, it will create a new version of the same
- Unless specified, the latest 'version' of an assessment will be returned when requested
- Completion of an assessment will be associated with a version of a form

Populate DB with provided assessment data:
- DB will be seeded with the provided data

Create Automated tests for the API endpoints:
- Integration tests will be created for every endpoint to validate functionality, errors and test edge cases
- Unit tests will be created for every function if time allows

Appropriate use of comments:
- A common commenting pattern will be used for all endpoints

Error Handling and Edge Cases:
- Simple, consistent error handling will be implemented

Users can resume progress if they didn't complete in one go
- ! We aren't going to implement user auth / accounts in this case due to scope
- Saving could be triggered on every field update - probably just provide a 'save' option for speed
- Providing the ability to save progress without authentication poses some difficulties
	- Sensitive user information could be present - and it ideally shouldn't be accessible without some form of user auth
	- Can use unique id's to 'hide' the users data
	- This means that user browser history will contain id
		- Without auth - this does mean that anyone with the full URL will be able to access the progress
			- Lots of options for securing:
				- Guest Tokens
				- Session ID
				- Temporary User Accounts
			- Ideally this should be done on the client side (and not publicly exposed) - progress should be saved locally - but the requirement was for it to be saved on the api side.
	- A JWT guest token is the shortest path to this; but will require client-side JWT cookie/session storage 

## Tasks: 
- [x] Review
	- [x] Assessment JSON Structure
		- [x] Fix copied structure with regex
			Copying was a pain  - had to use regex to fix newlines ((?<!["{,])(?<!null)\n)
			Although this didn't fix all (some existed with commas or quotations that were used incorrectly)

- [x] Design 
	- [x] Architecture
	- [x] DB Structure

- [ ] Build 
	- [x] Data Models
	- [ ] API Endpoint Skeleton
	- [ ] API Tests
	- [ ] API Endpoint Functionality

- [ ] Test 
	- [ ] Run Unit Tests
	- [x] Run Integration Tests
	- [x] Postman

- [x] Document 
	- [x] Approach
	- [x] Overview of solution
	- [x] Step-by-step instruction on project setup and run

# Final Notes

Next steps if I had more time: 
- Implement the attempts GET routes
- The ability to MODIFY an existing form version should be removed - as this could potentially cause issues with attempts not aligning with their associated form version. [implemented]
- There are a couple db requests that could likely be simplified into larger single queries
- Complete tests
	
Further changes that be necessary for production ready code:
- AUTH/USER: Not handled on Form Attempts and not implemented for admin authentication
- API RESPONSES: format should be standardised, modelled and validated
- CONTROLLERS: Route handlers should be shifted into controller functions
- SERVICES: Controllers should ideally interact with services - allowing consistent interaction with data across all controllers
- TESTS: Prisma client should probably be mocked, or local db otherwise reset / cleaned after tests