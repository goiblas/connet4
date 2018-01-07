import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from '../../redux/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UtilsService } from './utils.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [ UtilsService],
  declarations: [GameComponent],
  exports: [GameComponent]
})
export class GameModule { }
