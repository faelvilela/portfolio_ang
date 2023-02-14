import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'], 
})

export class SkillsComponent implements OnInit {
  
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Intermediário',
      rating: 60,
    },
    {
      name: 'Python',
      level: 'Intermediário',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediário',
      rating: 60,
    },
    {
      name: 'JAVA',
      level: 'Intermediário',
      rating: 70,
    },
    {
      name: 'C',
      level: 'Intermediário',
      rating: 60,
    },
    {
      name: 'PHP',
      level: 'Iniciante',
      rating: 10,
    },
  ];
  
  constructor() {}
  

  ngOnInit(): void {}



}

