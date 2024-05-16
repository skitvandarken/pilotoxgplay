import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';


@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [CommonModule, MenuComponent, RodapeComponent],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  successMessage = false;

  constructor(private router: Router) {}

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_janacmv', 'template_cixs6zb', e.target as HTMLFormElement, {
        publicKey: 'oT4Vp8OvVm40Rg-oA',
        ...this.formData // Spread operator to include form data
      })
      .then(
        () => {
          this.successMessage = true; // Set message to true on success
          console.log('SUCCESS!');
          this.formData = { // Reset form data to empty object
            name: '',
            email: '',
            subject: '',
            message: '',
          };
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }




}


