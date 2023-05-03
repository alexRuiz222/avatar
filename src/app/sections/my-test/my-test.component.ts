import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sendForm(): void {
    if (this.loginForm.valid) {
      this.router.navigate(['/memory']);
    }
    console.log(this.loginForm.value)
  }



}
