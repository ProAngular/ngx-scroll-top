# Suggestions for fixing missing `zone.js` error

When running `npm run start` with the original project you might see an error like this:

```text
Failed to resolve import "zone.js" from ".angular/vite-root/ngx-scroll-top/polyfills.js". Does the file exist?
```

Angular 20 no longer adds **Zone.js** by default; however this project still attempted to load it via the `polyfills` array in `angular.json`. When the dependency is not installed this leads to the above Vite error. There are two ways to resolve this:

## ✅ Recommended: Enable zoneless change detection

Angular 20 provides an official **zoneless** mode which removes the need for `zone.js`. It improves bundle size and performance and avoids issues when `zone.js` isn’t available. To enable this in the project:

1. **Remove `zone.js` from the build and test polyfills**. In `angular.json` the `polyfills` arrays were cleared for the `build` and `test` targets.
2. **Switch to the zoneless provider**. In `src/app/app.config.ts` replace `provideZoneChangeDetection({ eventCoalescing: true })` with `provideZonelessChangeDetection()`. This tells Angular to schedule change detection only after supported notifications such as host/template events, signal updates and `AsyncPipe` emissions.
3. **Update tests**. The spec file now calls `provideZonelessChangeDetection()` when configuring the `TestBed` so tests run in the same mode as production.

With these changes the project builds and runs without attempting to import `zone.js`.

## 🔧 Alternative: Install `zone.js`

If you don’t want to migrate to zoneless change detection you can simply install the missing dependency:

```bash
npm install zone.js --save
```

After installation you should keep `"zone.js"` in the `polyfills` array and continue using `provideZoneChangeDetection`. However, note that the container environment used here does not have network access to fetch packages from npm, so the zoneless approach was used instead.

## Files updated

The following files were changed to implement the zoneless fix:

- **angular.json** – removed `zone.js` and `zone.js/testing` from the `polyfills` arrays.
- **src/app/app.config.ts** – replaced `provideZoneChangeDetection` with `provideZonelessChangeDetection()`.
- **src/app/app.component.spec.ts** – added a provider for `provideZonelessChangeDetection()` to align tests with the production configuration.

A copy of the updated project (including this file) has been provided in the zip archive.
