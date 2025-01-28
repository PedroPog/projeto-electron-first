import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizarProdutoComponent } from './personalizar-produto.component';

describe('PersonalizarProdutoComponent', () => {
  let component: PersonalizarProdutoComponent;
  let fixture: ComponentFixture<PersonalizarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizarProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalizarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
