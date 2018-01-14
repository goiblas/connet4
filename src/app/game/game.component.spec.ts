import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { UtilsService } from './utils.service';
import { Store, StoreModule } from '@ngrx/store';
import { AppReducer } from '../../redux/app.reducer';
import { AppState } from '../../redux/app.state';
import { By } from '@angular/platform-browser';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [
        StoreModule.forRoot(AppReducer)
      ],
      providers: [
        UtilsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get de name of the first player', async( () => {
    const de = fixture.debugElement.query(By.css('.actived .player__name'));
    const el = de.nativeElement;
    const name = el.textContent.replace(/\s/g, '');
    expect(name).toEqual('Jugador1');
  }));
});
