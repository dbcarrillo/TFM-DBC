import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public formGroup!: FormGroup;
  envioRealizado = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      consulta: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }
  enviarFormulario() {
    this.formGroup.valid;
    console.log('Formulario válido. Datos enviados:', this.formGroup.value);
    this.envioRealizado = false;
    setTimeout(() => {
      this.envioRealizado = true;
    }, 1000);
  }
}
