import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  @Output() formSubmit = new EventEmitter();
  note = ""

  constructor() { }

  addNote(event: Event){
    event.preventDefault();
    this.formSubmit.emit(this.note);
    this.note = "";
  }
}
