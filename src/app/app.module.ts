import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ParentTochieldPcComponent } from './parent-tochield-pc/parent-tochield-pc.component';
import { ParentTochieldCcComponent } from './parent-tochield-cc/parent-tochield-cc.component';
import { ChieldToparentPcComponent } from './chield-toparent-pc/chield-toparent-pc.component';
import { ChieldToparentCcComponent } from './chield-toparent-cc/chield-toparent-cc.component';
import { ChieldtoparentviaviewchieldPcComponent } from './chieldtoparentviaviewchield-pc/chieldtoparentviaviewchield-pc.component';
import { ChieldtoparentviaviewchieldCcComponent } from './chieldtoparentviaviewchield-cc/chieldtoparentviaviewchield-cc.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentTochieldPcComponent,
    ParentTochieldCcComponent,
    ChieldToparentPcComponent,
    ChieldToparentCcComponent,
    ChieldtoparentviaviewchieldPcComponent,
    ChieldtoparentviaviewchieldCcComponent,
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {
        path:'ParentToChield',
        component: ParentTochieldPcComponent
      },
      {
        path:'ChieldToParent',
        component:ChieldToparentPcComponent
      },
      {
        path:'ChieldToParentViaChieldView',
        component:ChieldtoparentviaviewchieldPcComponent
      }
    ])

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
