import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatElementComponent } from './chat-element.component';
import { ChatAffichageComponent } from '../chat-affichage/chat-affichage.component';
import { ChatFormulaireComponent } from '../chat-formulaire/chat-formulaire.component';
import { ChatComponent } from '../chat.component';
import { FormsModule } from '@angular/forms';

describe('ChatElementComponent', () => {
  let component: ChatElementComponent;
  let fixture: ComponentFixture<ChatElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAffichageComponent, ChatElementComponent, ChatFormulaireComponent, ChatComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
