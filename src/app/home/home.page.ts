import { Component } from '@angular/core';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private router: Router
  ) {}

  async openClienteOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Cliente',
      buttons: [
        {
          text: 'Entrar',
          handler: () => {
            this.router.navigate(['/cliente/login']);
          },
        },
        {
          text: 'Cadastrar',
          handler: () => {
            this.router.navigate(['/cliente/cadastro']);
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    await actionSheet.present();
  }

  async openFuncionarioOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Profissional',
      buttons: [
        {
          text: 'Entrar',
          handler: () => {
            this.router.navigate(['/funcionario/login']);
          },
        },
        {
          text: 'Cadastrar',
          handler: () => {
            this.router.navigate(['/funcionario/cadastro']);
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    await actionSheet.present();
  }
}
