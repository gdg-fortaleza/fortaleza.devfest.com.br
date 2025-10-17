import { Component } from "@angular/core";

@Component({
  selector: "app-palestrantes",
  templateUrl: "./palestrantes.component.html",
  styleUrls: ["./palestrantes.component.scss"],
})
export class PalestrantesComponent {
  palestrantes;
  responsiveOptions: any[];
  descricao: string;

  constructor() {
    this.descricao = "";
    this.palestrantes = [
      {
        id: 0,
        image: "/assets/palestrantes/android.png",
        nome: "Android da Silva",
        profissao: "Em breve",
        trabalho: "",
        color: "4px solid var(--Green-300, #81C995)",
        description: "",
      },
      {
        id: 1,
        image: "/assets/palestrantes/google.png",
        nome: "Google da Silva",
        profissao: "Em breve",
        trabalho: "",
        color: "4px solid var(--yellow-300, #FDE293)",
        description: "",
      },
      {
        id: 2,
        image: "/assets/palestrantes/gcp.png",
        nome: "Cloud da Silva",
        profissao: "Em breve",
        trabalho: "",
        color: "4px solid var(--Red-300, #F28B82)",
        description: "Em breve",
      },
      {
        id: 3,
        image: "/assets/palestrantes/angular.gif",
        nome: "Angular da Silva",
        profissao: "Em breve",
        trabalho: "",
        color: "4px solid var(--Blue-300, #8AB4F8)",
        description: "Em breve",
      },
      {
        id: 4,
        image: "/assets/palestrantes/golang.png",
        nome: "Golang da Silva",
        profissao: "Em breve",
        trabalho: "",
        color: "4px solid var(--Green-300, #81C995)",
        description: "Em breve",
      },
      {
        id: 5,
        image: "/assets/palestrantes/gemini.png",
        nome: "Gemini da Silva",
        profissao: "Em breve",
        trabalho: "",
        color: "4px solid var(--yellow-300, #FDE293)",
        description: "Em breve",
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: "1199px",
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: "991px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "767px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  alterarDescricao(id: any) {
    this.descricao = this.palestrantes[id].description;
  }
}
