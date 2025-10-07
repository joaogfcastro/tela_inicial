import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// 1. Importe o addIcons e o ícone específico que você vai usar
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonRouterLink,
  IonButtons,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonRouterLink,
    IonButtons,
    IonIcon
  ]
})
export class LoginPage {
  constructor() {
    // 2. Registre o ícone no construtor do componente
    addIcons({ 'arrow-back-outline': arrowBackOutline });
  }
}
