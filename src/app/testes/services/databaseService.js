const { Client } = require("pg");

class DatabaseService {
  constructor() {
    this.client = new Client({
      user: "postgres", // Substitua pelos seus dados
      host: "localhost",
      database: "base_electron",
      password: "postgres",
      port: 5432,
    });

    this.client
      .connect()
      .then(() => console.log("Conexão com o banco de dados estabelecida!"))
      .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));
  }

  // Função para realizar SELECT
  async fetchData() {
    try {
      const result = await this.client.query("SELECT * FROM hello");
      return result.rows;
    } catch (error) {
      console.error("Erro ao realizar SELECT:", error);
      throw error;
    }
  }

  // Função para realizar UPDATE
  async updateData(query, params) {
    try {
      const result = await this.client.query(query, params);
      return result.rowCount; // Número de linhas afetadas
    } catch (error) {
      console.error("Erro ao realizar UPDATE:", error);
      throw error;
    }
  }

   // Função para INSERT
   async insertData(query, params) {
    try {
      const result = await this.client.query(query, params);
      return result.rowCount; // Número de linhas inseridas
    } catch (error) {
      console.error("Erro ao realizar INSERT:", error);
      throw error;
    }
  }

  // Fechar conexão
  closeConnection() {
    this.client.end().then(() => console.log("Conexão com o banco de dados encerrada."));
  }
}

module.exports = new DatabaseService();
