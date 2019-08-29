import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

/*   contatos = [
    { id: 1, nome: 'Cliente 1', email: 'cliente1@xyz.kvw' },
    { id: 2, nome: 'Cliente 2', email: 'cliente2@xyz.kvw' },
    { id: 3, nome: 'Cliente 3', email: 'cliente3@xyz.kvw' },
    { id: 4, nome: 'Cliente 4', email: 'cliente4@xyz.kvw' },
    { id: 5, nome: 'Cliente 5', email: 'cliente5@xyz.kvw' },
  ]; */

  clients: Array<any>;

  constructor(private clientsService : ClientsService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
      this.clientsService
        .listar()
        .subscribe(dados => this.clients = dados);
      
        console.log(this.clients);
  }
}
