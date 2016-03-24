# MESA Connect
MESA Alumni Site that allows MESA Alumni to connect with current MESA students.

## Running the application.
Run the application by simply running `npm run start:dev`.

## Editing the application.
###### When installing a new node module
* Please remember to use `--save` after your `npm install` statement. This will allow others to run the application by simply installing all the necessary node modules that anyone has added to the application.

###### Live Reload
* The application uses gulp tasks to perform live reloads whenever anything changes. This means after you've saved any of your work, the browser has already reloaded and is presenting the most current, up-to-date code. :)

###### Linting
* Please follow linting rules as this helps keep all the code consistent for now until I setup a coding standard.

##TODO
- [x] Continue adding npm packages for initial setup.
- [ ] Clean up React Components and begin creating reusable components.
  - [ ] Convert component files from .js to .jsx
  - [ ] Change 'require' to 'import'
  - [ ] Change import only used methods from libraries.
- [ ] Work on HTML/CSS layout for designs.
- [ ] Develop sprint plans.
- [ ] Re-implement linting rules.
- [ ] Finalize file structure.
- [ ] Implement user authentication system.
- [ ] Implement Flux architecture.
- [ ] Add SQL (or other) database in lieu of localStorage.
- [ ] Fix gulpfile in order to remove Webpack.
