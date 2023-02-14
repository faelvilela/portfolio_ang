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
      title: 'Preenchimento de planilha',
      technologies: 'Python',
      description: [
        'Programa com interface utilizando a biblioteca PySimpleGUI ',
        'Preenche dados em uma planilha com a formatação nescessária dentro da planilha',
        'A coluna de data da planilha atualiza automaticamente conforme as semanas vão passando',
        
      ],
      links: "https://github.com/faelvilela/gerenciamento_planilha",
    },
    {
      title: 'ChromeOS',
      technologies: 'C, C++',
      description: [
        'Worked as a team lead to build ChromeOS',
        'Got to learn about linux kernel',
        'Learned C, C++ to build an O.S.',
      ],
      links: 'http://www.github.com',
    },
    {
      title: 'Google Toolbar',
      technologies: 'HTML, CSS, JS, C#',
      description: [
        'Worked on Google Toolbar, to include the google search engine in Internet Explorer',
        'Learned multiple technologies to build the product.',
      ],
      links: 'http://www.github.com',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
