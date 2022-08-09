import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FormService } from 'src/app/services/form.service';
import { environment } from 'src/environments/environment';
import { formInterface } from '../../interfaces/form.interface';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass'],
  providers: [MessageService]
})
export class ContactUsComponent implements OnInit {
  form!: FormGroup;
  isSending: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _formService: FormService,
    private messageService: MessageService,
    ) {}

  ngOnInit(): void {
    this.makeForm();
  }

  /**
   * @function [makeForm]
   * This funciton create the form
   */
  makeForm() {
    this.form = this._fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern(environment.regrexName)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(environment.regrexEmail)],
      ],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      politics: ['', Validators.required],
    });
  }

  postForm(form: formInterface) {
    this.isSending = true;
    let message = 'Hola! Mi nombre es ' + form.name + ', ubicado en la ciudad de ' + form.city +
     ', y quisiera conocer más, este es mi número ' + form.phone + ' y mi correo electrónico ' + form.email;

     let messagesend ={
      mensaje : message
     }
    this._formService.postForm(messagesend).subscribe({
      next: (resp) => {
        this.form.reset()
        this.isSending = false;
        this.messageService.add({key: 'tc', severity:'success', detail: '¡Enviado correctamente! ¡Pronto será contactado!'});
      }
    });
  }
}
