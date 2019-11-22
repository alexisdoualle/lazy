import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterService } from '../counter.service';
import { LazyCounterLibModule } from 'lazy-counter-lib';
/**
 * WrapperModule is meant to be lazy-loaded, and it imports an external library.
 * This is the recommended way of lazy-loading a library module.
 * see: https://github.com/angular/angular-cli/issues/6373#issuecomment-453006158
 * 
 * It implements a custom forRoot() static method, to reciece providers
 */
@NgModule({
  imports: [
    //   WrapperLibModule.forRoot(CounterService)
    LazyCounterLibModule.forRoot(CounterService),
    // RouterModule.forChild([
    //   { 
    //     path: '',
    //     loadChildren: () => import('src/app/wrapper/wrapper-lib.module').then(m => m.WrapperLibModule)
    //   }
    // ])
     ],
//   providers: [ CounterService ]
})
export class WrapperModule {
//     static forRoot(counterService): ModuleWithProviders {
//     return {
//       ngModule: WrapperModule,
//       // useExisting returns the singleton of the provider
//       // while useClass would have created a duplicate instance
//       providers: [{provide: 'CounterService', useExisting: counterService}]
//     }
//   }
}