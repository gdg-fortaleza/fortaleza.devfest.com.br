import { Component } from '@angular/core';

@Component({
  selector: "app-programacao",
  templateUrl: "./programacao.component.html",
  styleUrls: ["./programacao.component.scss"],
})
export class ProgramacaoComponent {
  horario = true;
  items_manha = [
    {
      horario: "08:00 - 09:00",
      titulo: "Em breve",
    },
    {
      horario: "09:00 - 09:20",
      titulo: "Em breve",
    },
    {
      horario: "09:20 - 10:00",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
    {
      horario: "10:00 - 10:40",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
    {
      horario: "10:40 - 11:00",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
    {
      horario: "11:00 - 11:40",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
    {
      horario: "12:00 - 14:00",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
  ];

  children1 = [
    {
      sala: "Sala Verde",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#34A853",
    },
    {
      sala: "Sala Amarela",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#F9AB00",
    },
    {
      sala: "Sala Azul",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#4285F4",
    },
    {
      sala: "Sala Vermelha",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#EA4335",
    },
    {
      sala: "Sala Branca",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
  ];

  children2 = [
    {
      sala: "Sala Verde",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#34A853",
    },
    {
      sala: "Sala Amarela",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#F9AB00",
    },
    {
      sala: "Sala Azul",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#4285F4",
    },
    {
      sala: "Sala Vermelha",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#EA4335",
    },
    {
      sala: "Sala Branca",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
  ];

  children3 = [
    {
      sala: "Sala Verde",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#34A853",
    },
    {
      sala: "Sala Amarela",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#F9AB00",
    },
    {
      sala: "Sala Azul",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#4285F4",
    },
    {
      sala: "Sala Vermelha",
      titulo: "Em breve",
      palestrante: "Em breve",
      color: "#EA4335",
    },
    {
      sala: "Sala Branca",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
  ];

  items_tarde = [
    {
      horario: "16:00 - 16:15",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
    {
      horario: "16:15 - 16:30",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
    {
      horario: "16:30 - 17:20",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
    {
      horario: "17:20 - 18:00",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
    {
      horario: "18:00",
      titulo: "Em breve",
      palestrante: "Em breve",
    },
  ];

  troca() {
    this.horario = !this.horario;
  }

  responsiveOptions = [
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
