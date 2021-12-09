import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Folha } from "src/app/models/folha";
import { FolhaService } from "src/app/services/folha.service";
import { FuncionarioService } from "src/app/services/funcionario.service";

@Component({
    selector: "app-cadastrar-folha",
    templateUrl: "./cadastrar-folha.component.html",
    styleUrls: ["./cadastrar-folha.component.css"],
})
export class CadastrarFolhaComponent implements OnInit {
    salario!: number;
    horas!: number;
    ano!: string;
    mes!: string;
    funcionarios!: Funcionario[];
    funcionarioId!: number;

    constructor(
        private router: Router,
        private folhaService: FolhaService,
        private funcionarioService: FuncionarioService
    ) {}

    ngOnInit(): void {
        this.funcionarioService.list().subscribe((funcionarios) => {
            this.funcionarios = funcionarios;
        });
    }

    cadastrarFolha(): void {
        let folha: Folha = {
            salario: this.salario,
            horas: this.horas,
            ano: this.ano,
            mes: this.mes,
            funcionarioId: this.funcionarioId
        };
        this.folhaService.create(folha).subscribe((folha) => {
            console.log(folha);
            this.router.navigate(["folha/listar"]);
        });
    }
}
