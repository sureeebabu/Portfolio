import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = ['Angular', 'Ionic', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS'];

}
