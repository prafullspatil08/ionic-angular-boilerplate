import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standalone-component',
  templateUrl: './standalone-component.component.html',
  styleUrls: ['./standalone-component.component.scss'],
  standalone: true
})
export class StandaloneComponentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
