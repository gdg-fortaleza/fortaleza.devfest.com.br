import { Component } from "@angular/core";

@Component({
  selector: "app-parcerias",
  templateUrl: "./parcerias.component.html",
  styleUrls: ["./parcerias.component.scss"],
})
export class ParceriasComponent {
  mensagemWhatsApp = "Olá! Tenho interesse em patrocinar o DevFest 2023!";

  redirecionarParaEmail() {
    const email = "gdgfortaleza@gmail.com"; // Substitua pelo número de telefone do destinatário
    const mensagem = "Tenho interesse em patrocinar o Devfest Fortaleza 2025";
    const assunto = "Parceria Devfest Fortaleza 2025";
    const linkEmail = `mailto:${email}?subject=${assunto}&body=${mensagem}`;
    window.open(linkEmail, "_blank");
  }
}
