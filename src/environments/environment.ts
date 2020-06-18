// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBYA8wpycKipNIWmSQEYkxTeXvMiUiUGBQ',
    authDomain: 'pruebascams-a4e95.firebaseapp.com',
    databaseURL: 'https://pruebascams-a4e95.firebaseio.com',
    projectId: 'pruebascams-a4e95',
    storageBucket: 'pruebascams-a4e95.appspot.com',
    messagingSenderId: '80149066201',
    appId: '1:80149066201:web:f5e2abb3691fdf3891a9c8',
    measurementId: 'G-DK2ZX79DHV'
    },
  urlApi: 'http://192.168.1.71:3000/api/',
  user: {
      name: '',
      alias: '',
      expediente: '',
      telefono: '',
      email: '',
      area: '',
      cm: ''

  },
  password: ''

};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
