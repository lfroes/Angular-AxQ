import { Component } from "@angular/core";
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-form-page",
  imports: [],
  templateUrl: "./form-page.component.html",
  styleUrl: "./form-page.component.scss",
})
export class FormPageComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.userForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ["", [Validators.required, Validators.minLength(2)]],
        lastName: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
      }),
    });
  }
}
