import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearactividadPage } from './crearactividad.page';

describe('CrearactividadPage', () => {
  let component: CrearactividadPage;
  let fixture: ComponentFixture<CrearactividadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearactividadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearactividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
