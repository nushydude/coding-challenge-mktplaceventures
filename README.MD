# Coding Challenge

## To run the application

```
npm i
npm run app
```

Note: This will launch webpack-dev-server for now. There is no production setup. 

## Checklist 

- [ X ] Use React + ES6 (Comment: Used webpack and redux)
- [ X ] Generate data using the function found in `src/libs/generateData.js`
  - [ X ] 400 items
  - [ X ] Earliest timestamp of 15th January 2017
  - [ X ] Latest timestamp of 26th January 2017
- [ X ] Display data in a list format (Comment: took it as 'it should look like a list')
- [ X ] Basic styling (comments: used scss setup from my personal project and tweeked)
- [ X ] Sorted list from most recent to oldest (Comment: Sorted inside the reducer for no real reason. Probably should be in the UI, so that we can sort on demand asc and dsc order for example )
- [ X ] Provide a button that replaces existing data with a new 400 items
- [ X ] Visually group list items and label groups by day i.e. 17th January 2017 (Comment: Need functionality such as collapsing, searching for UX)
- [ X ] Provide a button that allows the user to remove a specific item from the list (comment: A button is shown for each item)
- [ X ] Provide a button that allows the user to add single generated item to the list (comment: No notification is shown, but is required for UX)
