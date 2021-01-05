# movieapp

## Building
Run the following commands before building with the ionic cli

```
pushd lib/mojix-components && npm install && stencil build && yalc publish && popd

pushd lib/mojix-components-module && yalc update && npm install && npm run build && yalc publish && popd

npm install
```

To run on the android platform:
```
ionic capacitor run android
```
