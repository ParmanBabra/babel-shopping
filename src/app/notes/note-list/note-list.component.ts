import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  @Input() notes = []
  @Output() OnDeleteNote = new EventEmitter()
  constructor() { }

  deleteNote(note) {
    this.OnDeleteNote.emit(note);
  }
}
