import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../entities/Pessoa';
import { PessoaService } from '../services/pessoa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-pessoa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-pessoa.component.html',
  styleUrl: './panel-pessoa.component.css'
})

export class PanelPessoaComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
  servPessoa: PessoaService;
 
  constructor(servPessoa: PessoaService) {
  this.servPessoa = servPessoa;
  }
  
  ngOnInit(): void {
  this.servPessoa.assinarAdd((pessoa:Pessoa)=>this.pessoa=pessoa);
  }
}
