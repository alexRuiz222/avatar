import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-character',
  templateUrl: './my-character.component.html',
  styleUrls: ['./my-character.component.scss']
})
export class MyCharacterComponent implements OnInit {

  myCharacterForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if (this.myCharacterForm.invalid) return;
    console.log(this.myCharacterForm.value);

  }
}
