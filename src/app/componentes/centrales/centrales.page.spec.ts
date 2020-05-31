import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentralesPage } from './centrales.page';

describe('CentralesPage', () => {
  let component: CentralesPage;
  let fixture: ComponentFixture<CentralesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
