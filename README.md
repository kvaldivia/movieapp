# movieapp

## Requirements

You should install globally the following libraries:

* ionic
* @angular/cli
* capacitor
* yalc

## Building

### Components

This project (although it is a monorepo) has components isolated from the main app. These components need to be built to be included/updated in the main app. To do so, just run the following command in the root project.

``` bash
npm run build:components
```

### App

Then you can try and run the project on an emulator or device with:
``` bash
ionic capacitor run android
```
