import { NgModule } from '@angular/core';
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
    LazyCounterLibModule.forRoot(CounterService),
     ],
})
export class WrapperModule { }