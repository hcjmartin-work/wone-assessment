# Development
Ensure the api is available at the correct port (see fetch in App.tsx)

Start with `yarn start`


# Notes on Assessment
I used https://www.npmjs.com/package/html-react-parser to parse the raw html string.
I used this package as it is most currently maintained, highly used (over 1m weekly downloads) and avoids use of dangerouslySetInnerHTML.

## Next immediate steps would be:
- Move Form get to state management - use url param to select form/version
- Create Form User State 
  - Probably redux or ideally rematch (as I feel it provides a simpler interface and reduces boilerplate)
- Update State with input (use input ID to append/update)
- Call submit to API on state update or on submit
