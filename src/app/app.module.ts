import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WrapperModule } from './wrapper/wrapper.module';

import { AppComponent } from './app.component';
import { EagerComponent } from './eager.component';
import { CounterService } from './counter.service';
import { RouterModule } from '@angular/router';

// Inject CounterService in WrapperModule, so that it defines it as the
// provider with a string key, injected in the lazy loaded module
@NgModule({
  imports:      [ 
    BrowserModule, 
    //WrapperModule.forRoot(CounterService), 
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'eager', pathMatch: 'full' },
        { path: 'eager', component: EagerComponent },
        { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule', pathMatch: 'full' },
        // { path: 'lazy-lib', loadChildren: './wrapper/wrapper.module#WrapperModule', pathMatch: 'full' },
        { path: 'lazy-lib', loadChildren: () => import('./wrapper/wrapper.module')
        .then(m => m.WrapperModule) },
      ]
    )
   ],
  declarations: [ AppComponent, EagerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CounterService]
})
export class AppModule { }
