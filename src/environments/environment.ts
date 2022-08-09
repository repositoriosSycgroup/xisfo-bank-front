// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //variables de validacion
  regrexEmail: '[a-zñA-ZÑ 0-9._%+-]{3,100}@[a-zñA-ZÑ0-9.-]{3,30}\.[a-zA-Z]{2,6}$',
  regrexName: '[A-ZÑ,a-zñ, ,á,é,í,ó,ú]{3,}$',
  sendEmailUrl: 'http://127.0.0.1:3000/envio'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
