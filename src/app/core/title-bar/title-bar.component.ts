import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(): void{
   let containerClass = document.querySelector('.container-fluid').classList;
   let moonIcon = document.querySelector('.moon-icon') as HTMLImageElement;

   if(containerClass.contains('light')){
     moonIcon.setAttribute('src', 'assets/mode-images/icon-moon.svg');
     containerClass.remove('light');
     containerClass.add('dark');
   } else if(containerClass.contains('dark')){
     moonIcon.setAttribute('src', 'assets/mode-images/moon-dark.svg');
     containerClass.remove('dark');
     containerClass.add('light');
   }
  }

}
