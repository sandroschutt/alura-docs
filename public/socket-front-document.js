import { atualizaTextoEditor, alertarERedirecionar } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit('selecionar_documento', nome, (texto) => {
        atualizaTextoEditor(texto)
    })
}

function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados)
}

// socket.on("texto_documento", (texto) => {
//     atualizaTextoEditor(texto)
// })

socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto);
})

function emitirExcluirDocumento(nomeDocumento) {
    socket.emit('excluir_documento', nomeDocumento)
}

socket.on('excluir_documento_sucesso', (nomeDocumento) => {
    alertarERedirecionar(nomeDocumento);
})

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
