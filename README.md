# NarativeCreatorFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Troubleshooting

##### CORS error when accessing data from ArtStation

Due to some issues with localhost proxys when fetching data from http://www.artstation.com/api/v2/search/projects.json, a temporary fix has been introduced for development only. A proxy is created in 'setupProxy.sh', and this file is run at startup.

If you are seeing a CORS error:
- Make sure you're starting the app using 'npm run start'. ng serve won't start the proxy.
- Check 'package.json' is running 'setupProxy.sh' at startup
- Check 'setupProxy.sh' exists
