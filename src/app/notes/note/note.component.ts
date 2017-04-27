import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note = ""
  @Output() OnDeleteNote = new EventEmitter()

  constructor() { }

  deleteNote(event){
    this.OnDeleteNote.emit(this.note);
  }
}
