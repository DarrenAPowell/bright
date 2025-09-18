## Clone Repo

git clone <your-repo-url>
cd <your-project-folder>

## Install dependancies
npm install

## Start the dev server
npm run dev

## Run Tests

npm test

## Improvements

- Implement dynamic data fetching with useEffect instead of relying on mock data.
- Follow TDD (RED → GREEN → REFACTOR) more rigorously; most tests were smoke tests, but refactoring and tighter tests could have been done before building.
- Extract date parsing and formatting into a reusable utility function (e.g., formatDate or parseDate) instead of using `new Date()` directly in the component.
- depending on scope, if this was a large list of documents, I would consider a pagination after a set amount of documents loaded to improve performance and reduce initial render time
- I would have further expanded the sorting, so that you can sort by name ascending and descending as well as date ascending and descending
- I tried to get a local set up of tailwind, but my machine just did not want to play along. But I would of used tailwind for styling.


