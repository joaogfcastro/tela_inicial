import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// 1. Importar addIcons e o ícone
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
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
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
export class CadastroPage {
  constructor() {
    // 2. Registrar o ícone
    addIcons({ 'arrow-back-outline': arrowBackOutline });
  }
}
