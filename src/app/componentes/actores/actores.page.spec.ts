import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActoresPage } from './actores.page';

describe('ActoresPage', () => {
  let component: ActoresPage;
  let fixture: ComponentFixture<ActoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
