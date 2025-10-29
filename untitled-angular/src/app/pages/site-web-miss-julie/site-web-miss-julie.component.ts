import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'site-web-miss-julie',
  templateUrl: 'site-web-miss-julie.component.html',
  styleUrls: ['site-web-miss-julie.component.css'],
})
export class SiteWebMissJulie {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      from_sujet: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  sendEmail() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const templateParams = {
      name: this.formGroup.value.from_name,
      time: new Date().toLocaleString(),
      from_name: this.formGroup.value.from_name,
      from_email: this.formGroup.value.from_email,
      from_sujet: this.formGroup.value.from_sujet,
      message: this.formGroup.value.message,
    };

    emailjs
      .send('service_cyahe87', 'template_jxnk758', templateParams, '2ncZb3uzhJ1xPXfRt')
      .then(() => {
        alert('Message envoyé avec succès !');
        this.formGroup.reset();
      })
      .catch((error) => {
        console.error('Erreur :', error);
        alert('Erreur lors de l’envoi du message.');
      });
  }

  get f() {
    return this.formGroup.controls;
  }
}
