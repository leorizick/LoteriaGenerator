import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Gerador Loteria';
  count = 0;
  pessoas = [
    {
      nome: "Ivonaldo",
      sobrenome: "Soares"
    },
    {
      nome: "Ivonaldo",
      sobrenome: "Soares"
    },
    {
      nome: "Ivonaldo",
      sobrenome: "Soares"
    }
  ];


  constructor(){
  
  }

ngOnInit(): void {
  console.log(this.pessoas)
  let interval = setInterval(() => {
    this.count++;
    if(this.count ===10){
     clearInterval(interval)
    }
  }, 1000)
  
}

}


