import { Component } from '@angular/core'
import emailjs from '@emailjs/browser';import { Title } from '@angular/platform-browser'


@Component({
  selector: 'site-web-miss-julie',
  templateUrl: 'site-web-miss-julie.component.html',
  styleUrls: ['site-web-miss-julie.component.css'],
})
export class SiteWebMissJulie {
   formData = {
    from_name: '',
    from_email: '',
    from_sujet: '',
    message: '',
  };

  sendEmail() {
    const templateParams = {
      name: this.formData.from_name,
      time: new Date().toLocaleString(),
      from_name: this.formData.from_name,
      from_email: this.formData.from_email,
      from_sujet: this.formData.from_sujet,
      message: this.formData.message,
    };

    emailjs.send(
      'service_cyahe87',    
      'template_jxnk758',   
      templateParams,
      '2ncZb3uzhJ1xPXfRt'    
    )
    .then(() => {
      alert('Message envoyé avec succès !');
      this.formData = { from_name: '', from_email: '', from_sujet: '', message: '' };
    })
    .catch((error) => {
      console.error('Erreur :', error);
      alert('Erreur lors de l’envoi du message.');
    });
  }
}
