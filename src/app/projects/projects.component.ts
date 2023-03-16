import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Donwload de arquivos em FTP',
      technologies: 'Python',
      description: [
        'Programa automatizado para baixar arquivos em uma FTP diariamente',
        'Utiliza a biblioteca ftplib para acessar a FTP',
        'Aprendi a manusear arquivos dentro do windows e a tratar possíveis erros ao baixar arquivos automaticamente',
      ],
      links: 'https://github.com/faelvilela/ftpDw',
    },
    {
      title: 'Skate inteligente',
      technologies: 'C++, Arduino',
      description: [
        'Projeto para criar um skate com um sensor que detecta movimentos',
        'O objetivo é de o sensor entender qual manobra era feita no skate a partir do movimento que ele faz ao girar',
        'Aprendi a trabalhar com Arduino e sensores de movimento',
      ],
      links: 'https://github.com/faelvilela/sk8',
    },
    {
      title: 'Preenchimento de planilha',
      technologies: 'Python',
      description: [
        'Programa com interface utilizando a biblioteca PySimpleGUI ',
        'Preenche dados em uma planilha com a formatação nescessária dentro da planilha',
        'A coluna de data da planilha atualiza automaticamente conforme as semanas vão passando',
        'Pude aprender a manipular dados em planilhas pelo Python e também a criar programas com interface básica',
      ],
      links: "https://github.com/faelvilela/gerenciamento_planilha",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
