import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../entities/Pessoa';
import { PessoaService } from '../services/pessoa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-pessoa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-pessoa.component.html',
  styleUrl: './tab-pessoa.component.css'
})
export class TabPessoaComponent implements OnInit {

  pessoas: Array<Pessoa> = [];
  servPessoa: PessoaService;
  constructor(servPessoa: PessoaService) { 
  this.servPessoa = servPessoa; 
  }
  ngOnInit(): void {
  this.servPessoa.assinarFull((pessoas: Array<Pessoa>)=>{
  console.log("Array da tabela atualizado");
  this.pessoas = pessoas;
  });
  }
}
