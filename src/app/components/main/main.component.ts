import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Client } from '../../model/client';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
 
})
export class MainComponent implements OnInit {

  client?:Client
data:DataService = inject(DataService)

  
  ngOnInit(): void {
    console.log('main component')
    this.data.getClient(0).subscribe(data=> {
      console.log(data,'main component')
    })
    
  }

}
