import { Component, OnInit } from "@angular/core";
import { Folha } from "src/app/models/folha";
import { FolhaService } from "src/app/services/folha.service";

@Component({
    selector: "app-listar-folha",
    templateUrl: "./listar-folha.component.html",
    styleUrls: ["./listar-folha.component.css"],
})
export class ListarFolhaComponent implements OnInit {
    folhas: Folha[] = [];
    colunasExibidas: String[] = [
        "folhaId",
        "salario",
        "horas",
        "ano",
        "mes",
        "funcionario",
    ];

    constructor(private service: FolhaService) {}

    ngOnInit(): void {
        this.service.list().subscribe((folhas) => {
            this.folhas = folhas;
        });
    }
}
