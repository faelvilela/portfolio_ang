import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Universidade Fumec",
      course: 'Ciência da Computação',
      duration: '2019-2024',
      score: '80%',
    },
    {
      institute: 'Colégio Regina Pacis',
      course: 'Ensino Médio',
      duration: '2014-2016',
      score: '100%',
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
