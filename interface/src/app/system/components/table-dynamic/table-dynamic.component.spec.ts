import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDynamicComponent } from './table-dynamic.component';

describe('TableDynamicComponent', () => {
  let component: TableDynamicComponent;
  let fixture: ComponentFixture<TableDynamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDynamicComponent]
    });
    fixture = TestBed.createComponent(TableDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
