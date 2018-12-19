import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAffichageComponent } from './chat-affichage.component';
import { ChatElementComponent } from '../chat-element/chat-element.component';
import { ChatFormulaireComponent } from '../chat-formulaire/chat-formulaire.component';
import { ChatComponent } from '../chat.component';
import { FormsModule } from '@angular/forms';

describe('ChatAffichageComponent', () => {
  let component: ChatAffichageComponent;
  let fixture: ComponentFixture<ChatAffichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAffichageComponent, ChatElementComponent, ChatFormulaireComponent, ChatComponent], 
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
