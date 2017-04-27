import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes = [
    "Note#1",
    "Note#2",
    "Note#3",
    "Note#4"
  ]

  constructor() { }

  addNote(note){
    this.notes.push(note);
  }
  
  deleteNote(note){
    var index = this.notes.indexOf(note);
    if (index > -1) {
        this.notes.splice(index, 1);
    }
  }
}
