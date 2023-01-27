import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 @ViewChild('myForm') myForm!: ElementRef;
 @ViewChild('nameField') nameField!: ElementRef;
 @ViewChild('messageField') messageField!: ElementRef;
 @ViewChild('emailField') emailField!: ElementRef;
 @ViewChild('sendButton') sendButton: MatButton;
 

 inputName: string = '';
 inputEmail: string = '';
 inputMessage: string = '';
 send = false;
 
 names1: string = '';
 names2: string = '';
 names3: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  async sendMail(){
    console.log('Sending mail', this.myForm);
    
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton._elementRef.nativeElement;
    
 
      nameField.disabled = true;
      messageField.disabled = true;
      emailField.disabled = true;
      sendButton.disabled = true;
      //chnage color to disabled

    //Animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('email', emailField.value);

    this.send = !this.send;

    //senden
    await fetch('http://tijana-couturier.developerakademie.net/send_mail/send_mail.php',
    {
     method : 'POST',
     body: fd
    }
    );
   //Text anzeigen: Nachricht gesendet.
    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    sendButton.disabled = true;
    //change color to enabled
    
    nameField.value = '';
    messageField.value = '';
    emailField.value = '';


  }

}
