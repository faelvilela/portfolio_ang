import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


@NgModule({
  declarations: [AppComponent, BanerComponent, PersonalInformationComponent, EducationComponent, WorkExperienceComponent, SkillsComponent, ProjectsComponent, ContactComponent, ResponsiveDirective, NavbarComponent, ProgressBarComponent],
  imports: [BrowserModule,
  AppRoutingModule,
  BrowserModule,
  BsDropdownModule,
  TooltipModule,
  ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class AppBootstrapModule {}
