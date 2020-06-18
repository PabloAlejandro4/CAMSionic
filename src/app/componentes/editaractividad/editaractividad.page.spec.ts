import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditaractividadPage } from './editaractividad.page';

describe('EditaractividadPage', () => {
  let component: EditaractividadPage;
  let fixture: ComponentFixture<EditaractividadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaractividadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditaractividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
