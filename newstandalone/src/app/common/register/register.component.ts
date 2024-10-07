import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { Role, user } from '../../model/Loginmodel';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule,
    MatCheckboxModule, MatRadioModule, MatSelectModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  Roles: Role[] = [
    { value: 'salesman', viewValue: 'Salesman' },
    { value: 'supervisor', viewValue: 'Supervisor' },
    { value: 'manager', viewValue: 'Manager' },
  ];

  
  private builder = inject(FormBuilder);
  private service = inject(MasterService);
  private router = inject(Router);

  registerForm = this.builder.group({

    username: this.builder.control('', Validators.required),
    name: this.builder.control("", Validators.compose([Validators.required, Validators.minLength(5)])),
    password: this.builder.control("", Validators.compose([Validators.required, Validators.minLength(5)])),
    email: this.builder.control("", Validators.compose([Validators.email, Validators.required])),
    role: this.builder.control("salesman", Validators.required),
    gender: this.builder.control("m"),
    terms: this.builder.control(true),

  });


  ProceedRegister() {
    if (this.registerForm.valid && this.registerForm.value.terms) {
      let _data: user = {
        id: this.registerForm.value.username as string,
        password: this.registerForm.value.password as string,
        name: this.registerForm.value.name as string,
        role: this.registerForm.value.role as string,
        gender: this.registerForm.value.gender as string,
        email: this.registerForm.value.email as string
      };

      this.service.ProceedRegister(_data).subscribe((item: any) => {
        alert("Registered succesfully.");
        this.router.navigateByUrl('/login');
      });
    } else {
      alert("Please agree to terms & conditions to proceed.");
    }
  }
}