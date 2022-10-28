import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/list.service';

@Component({
  selector: 'app-list-game-method',
  templateUrl: './list-game-method.component.html',
  styleUrls: ['./list-game-method.component.css']
})
export class ListGameMethodComponent implements OnInit {
  games: Array<any> = [
{
    title: "Mega-Sena",
    img: "https://img.olhardigital.com.br/wp-content/uploads/2021/02/Mega-Sena.jpg",
    body: "A Mega-Sena é a maior aposta da loterica, para ganhar o premio maximo é necessario acertar os 6 numeros sorteados. Voce tem uma chance em 50 milhões de se tornar milionário!",
    routerLink: "/megaSena"
},
  {
  title: "Lotofácil",
  img: "https://tribunapr.uol.com.br/wp-content/uploads/2022/09/15171316/Lotofacil-elk3-970x550.jpg",
  body: "A Lotofácil sao suas melhores chances, para ganhar o premio maximo é necessario acertar os 6 numeros sorteados. Voce tem uma chance em 3,2 milhões de se tornar milionário! ",
  routerLink: "/lotofacil"
},
{
title: "Quina",
  img: "https://www.oliberal.com/image/contentid/policy:1.484015:1642433098/quina.jpg?f=2x1&$p$f=1a07255&w=1500&$w=f075b93",
  body: "Na Quina voce ganha acertando 2, 3, 4 ou 5 numeros, para o premio maximo é necessario acertar todos os 5 numeros sorteados. Voce tem uma chance em 24 milhões de se tornar milionário!",
  routerLink: "/megaSena"
}
  ];


  constructor() { }

  ngOnInit(): void {
  }

 

}
