// import { NgModule, ModuleWithProviders } from '@angular/core';
// import { LazyCounterLibModule } from 'lazy-counter-lib';

// @NgModule({
//   imports: [
//     LazyCounterLibModule,
//     // RouterModule.forChild([
//     //   { 
//     //     path: '',
//     //     loadChildren: () => import('src/app/wrapper/wrapper.module').then(m => m.WrapperModule)
//     //   }
//     // ])
//      ],
//   //providers: [ CounterService ]
// })
// export class WrapperLibModule {
//     static forRoot(counterService): ModuleWithProviders {
//     return {
//       ngModule: WrapperLibModule,
//       // useExisting returns the singleton of the provider
//       // while useClass would have created a duplicate instance
//       providers: [{provide: 'CounterService', useExisting: counterService}]
//     }
//   }
// }