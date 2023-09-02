import { MongoClient } from 'mongodb';
import 'dotenv/config';

const cliente = new MongoClient(process.env.CONN);

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log('conectado ao banco de dados com sucesso')
} catch (error) {
    console.log(error);
}

export { documentosColecao };