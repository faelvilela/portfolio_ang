import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Nome', 'Rafael Vilela Figueiredo'],
    ['Nascimento', '28/09/1998'],
    ['Cargo Atual', 'Estagiário TI'],
    ['Cursando', 'Ciência da Computação'],
    ['Interesses', 'Tecnologia e música'],
  ];

  aboutMe: string[] = [
    'Olá, atualmente sou estudante de Ciência da computação no sexto período na Universidade FUMEC.',
    'No momento sou estagiário de Ti em uma empresa de consultoria chamada Eficaz Contact Center',
    'Durante meu tempo na empresa aprendi muito sobre ...',
    'Devido a nescessidade da empresa de se modernizar aprendi a programar em Python e automatizei diversos processos demorados que antes eram feitos manualmente todos os dias.', 
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
