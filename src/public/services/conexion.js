import pg from "pg";

const { Client } = pg;

const config = {
  user: "curriculumfabricio_bd_user",
  host: "dpg-csg37cm8ii6s73btugo0-a.oregon-postgres.render.com",
  database: "curriculumfabricio_bd",
  password: "4Tq2e0oznYcNl9GwZGw79EoDL7GggeC2",
  port: 5432,
  ssl: { rejectUnauthorized: false },
}

export async function Conectar(params) {
    const cliente = new Client(config);
    try{
        await cliente.connect();
        console.log("Conectado a la bd");
        
    }catch(error){
        console.log(error);
        
    }
}
