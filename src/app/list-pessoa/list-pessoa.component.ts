import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../entities/Pessoa';
import { PessoaService } from '../services/pessoa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-pessoa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-pessoa.component.html',
  styleUrl: './list-pessoa.component.css'
})
export class ListPessoaComponent implements OnInit {

  pessoas: Array<Pessoa> = [];
  servPessoa: PessoaService;

  constructor(servPessoa: PessoaService) { 
  this.servPessoa = servPessoa; 
  }
  ngOnInit(): void {
  this.servPessoa.assinarFull((pessoas: Array<Pessoa>)=>{
  console.log("Array da lista atualizado");
  this.pessoas = pessoas;
  });
  }
}
