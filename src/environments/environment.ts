// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tmdb: {
    API_KEY: '5b0e5f7ab7ca9ee0d271574a73a6ab5f',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_URL: `https://image.tmdb.org/t/p/w200`,
    BACKDROP_URL: `https://image.tmdb.org/t/p/original`,

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
