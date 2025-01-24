import { Component } from "@angular/core";
import { DatabaseService } from "../../services/database.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-teste",
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: "./teste.component.html",
  styleUrls: ["./teste.component.scss"],
})
export class TesteComponent {
  data: any[] = [];
  columns: string[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.databaseService.fetchData().then((result) => {
      if (result.length > 0) {
        this.data = result;
        this.columns = Object.keys(result[0]);
      }
    });
  }

  insertData(descricao:string) {
    const query = "INSERT INTO hello (descricao) VALUES ($1)";
    const params = [descricao];
    this.databaseService.insertData(query, params).then(() => {
      this.fetchData();
    });
  }

  updateData(descricao:string,id:string) {
    const query = "UPDATE hello SET descricao = $1 WHERE id = $2";
    const params = [descricao, id];
    this.databaseService.updateData(query, params).then(() => {
      this.fetchData();
    });
  }
}
