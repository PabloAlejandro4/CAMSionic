import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlmacenPage } from './almacen.page';

describe('AlmacenPage', () => {
  let component: AlmacenPage;
  let fixture: ComponentFixture<AlmacenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlmacenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
