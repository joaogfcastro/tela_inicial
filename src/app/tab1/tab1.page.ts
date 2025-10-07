// tab1.page.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Importe os ícones específicos que vamos usar
import { 
  faHammer, faBoltLightning, faPaintRoller, faSeedling, faHeart, faBroom,
  faLocationDot, faUserCheck, faStar, faShieldHalved, faClock, faComments,
  faMapLocationDot, faUser, faCommentDots
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FontAwesomeModule],
})
export class Tab1Page {

  // Dados para a seção "Serviços Disponíveis" com os ícones do Font Awesome
  availableServices = [
    { name: 'Pedreiro', count: '250', icon: faHammer },
    { name: 'Eletricista', count: '180', icon: faBoltLightning },
    { name: 'Pintor', count: '320', icon: faPaintRoller }, // Ícone mais apropriado
    { name: 'Jardineiro', count: '150', icon: faSeedling },
    { name: 'Cuidador', count: '200', icon: faHeart },
    { name: 'Faxineiro', count: '280', icon: faBroom },
  ];

  // Dados para a seção "Por que escolher..."
  platformFeatures = [
    { title: 'Geolocalização', description: 'Encontre profissionais próximos a você em tempo real', icon: faLocationDot },
    { title: 'Perfis Verificados', description: 'Todos os profissionais passam por verificação de identidade', icon: faUserCheck },
    { title: 'Sistema de Avaliação', description: 'Avaliações reais de clientes para garantir qualidade', icon: faStar },
    { title: 'Pagamento Seguro', description: 'Transações protegidas com Pix, cartão e carteira digital', icon: faShieldHalved },
    { title: 'Agendamento Rápido', description: 'Agende serviços em poucos cliques', icon: faClock },
    { title: 'Chat Integrado', description: 'Converse diretamente com os profissionais', icon: faComments },
  ];
  
  // Dados para a seção "Experimente o App"
  appFeatures = [
    { title: 'Mapa de Profissionais', description: 'Veja todos os profissionais próximos em tempo real', icon: faMapLocationDot, buttonText: 'Ver Mapa' },
    { title: 'Perfil do Profissional', description: 'Veja informações detalhadas, avaliações e portfólio', icon: faUser, buttonText: 'Ver Perfil' },
  ];


  constructor() {}
}