import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-aplication',
  templateUrl: './new-aplication.component.html',
  styleUrls: ['./new-aplication.component.scss']
})
export class NewAplicationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(path: string){
    this.router.navigate([path])
  }

}
