import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../entities/Pessoa';
import { PessoaService } from '../services/pessoa.service';
import { FormsModule } from '@angular/forms';
import { ListPessoaComponent } from "../list-pessoa/list-pessoa.component";
import { TabPessoaComponent } from "../tab-pessoa/tab-pessoa.component";
import { PanelPessoaComponent } from "../panel-pessoa/panel-pessoa.component";

@Component({
  selector: 'app-exemplo1',
  standalone: true,
  imports: [FormsModule, ListPessoaComponent, TabPessoaComponent, PanelPessoaComponent],
  templateUrl: './exemplo1.component.html',
  styleUrl: './exemplo1.component.css'
})
export class Exemplo1Component implements OnInit {

  novaPessoa: Pessoa = new Pessoa();
  servPessoa: PessoaService;
  constructor(servPessoa: PessoaService){
  this.servPessoa = servPessoa;
  }
 
  adicionar():void{
  const aux = new Pessoa(this.novaPessoa.nome,
  this.novaPessoa.cpf,this.novaPessoa.idade);
  this.servPessoa.adicionar(aux);
  }

  ngOnInit(): void {
  }
}
