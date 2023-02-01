import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Estágiario de TI',
      company: 'Eficaz Contact Center',
      duration: 'Março 2022 - Março 2023',
      description: [
        'Suporte para funcionários presencial e home office',
        'Desenvolvendo programas de automação de processos e Banco de dados',
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
