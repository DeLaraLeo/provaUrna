import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numero1 = "";
  numero2 = "";
  voto = "";
  imagem = "";



  constructor() {}

    Votar(botao:string){
        if(this.numero1 === ""){
            this.numero1 = botao;
        } else if(this.numero1 !== "" && this.numero2 === ""){
            this.numero2 = botao;

            if(this.numero1 === "1" && this.numero2 === "0"){
                this.voto = "Menino Ney"
                this.imagem = "https://veja.abril.com.br/wp-content/uploads/2016/10/neymar-depois.jpg"
            } else if(this.numero1 === "1" && this.numero2 === "8"){
                this.voto = "Vini Jr"
                this.imagem ="https://trivela.com.br/wp-content/uploads/2022/09/vinicius-junior.jpg"
            } else{
                this.voto = "Nulo"
                this.imagem = ""
            }
        }
    }

    confirma(){
        this.voto = "FIM";
        this.imagem = ""
    }

    branco(){
        this.voto = "EM BRANCO"
        this.imagem = ""
    }

    corrige(){
        this.voto = ""
        this.numero1 = ""
        this.numero2 = ""
        this.imagem = ""
    }



}