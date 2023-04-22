import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTelaInicialComponent } from './principal-tela-inicial.component';

describe('PrincipalTelaInicialComponent', () => {
  let component: PrincipalTelaInicialComponent;
  let fixture: ComponentFixture<PrincipalTelaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalTelaInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalTelaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
