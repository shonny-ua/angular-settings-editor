import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorBoolComponent } from './editor-bool.component';

describe('EditorBoolComponent', () => {
  let component: EditorBoolComponent;
  let fixture: ComponentFixture<EditorBoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorBoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorBoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
