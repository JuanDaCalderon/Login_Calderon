import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(){}

  ngOnInit():void{
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('juandacalji@gmail.com', Validators.required),
      password: new FormControl('', Validators.required),
      remember: new FormControl(false)
    })
  }

  onSubmit(){
    console.log(this.loginForm?.value);
    alert(JSON.stringify(this.loginForm?.value));
    alert("You have successfully logged in - You can see form values in the console");
  }
}
