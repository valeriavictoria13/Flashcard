function criaCartao(categoria, pergunta, resposta) {
    let conteiner = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
     <div class="cartao__conteudo">
                    <h3>Venenos</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>Que planta contém alcaloides que causam paralisia?</p>
                        </div>
                        <div class="cartao__conteudo__resposta">
                            <p>Cicuta. Afeta o sistema nervoso e paralisa o corpo.</p>
                        </div>
                    </div>
                
    `
    container.appendChild(cartao)
}