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
        profissao: "Lead Software Engineer",
        trabalho: "Nubank",
        color: "4px solid var(--Green-300, #81C995)",
        description:
          "André Figueiredo atua há mais de 20 anos desenvolvendo sistemas, arquitetando, projetando e implementando soluções de alta disponibilidade e escalabilidade para a indústria de pagamentos eletrônicos, atua desde 2021 como líder técnico do Nubank.        ",
      },
      {
        id: 1,
        image: "/assets/palestrantes/android.png",
        nome: "Android da Silva",
        profissao: "Cientista de Dados",
        trabalho: "Deloitte",
        color: "4px solid var(--yellow-300, #FDE293)",
        description:
          "Bard pra cá, Llama pra lá, ChatGPT pra todo lado, a IA vai acabar com a humanidade... Já ouvimos muito isso, e ultimamente mais do que nunca, mas muitas vezes nem sabemos o que significa. Nessa palestra, Jéssica Costa vai falar sobre o assunto que fascina alguns e dá medo em outros, e cada um poderá tirar suas próprias conclusões.",
      },
      {
        id: 2,
        image: "/assets/palestrantes/android.png",
        nome: "Android da Silva",
        profissao: "Machine Learning Engineer Sr",
        trabalho: "Arado",
        color: "4px solid var(--Red-300, #F28B82)",
        description:
          "Se você tivesse que escolher apenas um objeto pra levar à uma floresta onde você passaria 21 dias tentando sobreviver e passando frio, fome e sede, o que você levaria? Exatamente: um Autoencoder! Nessa palestra, além de vermos como usar autoencoders pra redução de ruído, geração de imagens, sistemas de recomendação e etc, também vamos ver como ele pode nos salvar nessa aventura aleatória.",
      },
      {
        id: 3,
        image: "/assets/palestrantes/android.png",
        nome: "Android da Silva",
        profissao: "Principal Engineer App BB",
        trabalho: "Banco do Brasil",
        color: "4px solid var(--Blue-300, #8AB4F8)",
        description:
          "Fabiana Nascimento é uma profissional de TI com mais de 20 anos de experiência, já atuou como desenvolvedora, administradora de banco de dados e gerente de projetos, e também lecionou em faculdades de sistemas e computação. Atualmente, atua como Analista de Tecnologia da Informação da UFPB.",
      },
      {
        id: 4,
        image: "/assets/palestrantes/android.png",
        nome: "Android da Silva",
        profissao: "Software Engineer Sênior",
        trabalho: "Banco BV",
        color: "4px solid var(--Green-300, #81C995)",
        description:
          "Fausto Blanco é Engenheiro de Software Sênior no BV, com 15 anos de experiência como Desenvolvedor, sendo os últimos 6 atuando com Mobile e os últimos 2 focados em segurança. Sua paixão é passar conhecimento adiante.        ",
      },
      {
        id: 5,
        image: "/assets/palestrantes/android.png",
        nome: "Android da Silva",
        profissao: "Cientista de Dados",
        trabalho: "Ambev Tech",
        color: "4px solid var(--yellow-300, #FDE293)",
        description:
          "Cecília Flávia possui uma trajetória mista entre academia e mercado, atualmente trabalha com Machine/Deep Learning na AmbevTech e faz doutorado na mesma área pela UFPE, além de ser professora de Python, dados e machine learning na Ada.",
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
