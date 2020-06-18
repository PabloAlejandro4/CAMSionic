import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevocorrectivoPage } from './nuevocorrectivo.page';

describe('NuevocorrectivoPage', () => {
  let component: NuevocorrectivoPage;
  let fixture: ComponentFixture<NuevocorrectivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevocorrectivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevocorrectivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
