// Programa para manipular o DOM
window.document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btnMaiuscula").addEventListener('click', function () {
        let inputText = document.querySelector("#input-text").value
        document.querySelector('#resultado').innerHTML = inputText.toUpperCase()
    })
})

window.document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btnMinuscula").addEventListener('click', function () {
        let inputText = document.querySelector("#input-text").value
        document.querySelector('#resultado').innerHTML = inputText.toLowerCase()
    })
})

document.getElementById("btnPrimeiraMaiuscula")?.addEventListener('click', function () {
    const inputEl = document.querySelector("#input-text")
    const resultado = document.querySelector("#resultado")
    const text = inputEl?.value ?? ''
    const hasSentenceDelim = /[.!?]/.test(text)

    // apenas capitaliza a primeira letra alfabética do texto
    if (!hasSentenceDelim) {
        const out = text.replace(/^(\s*)(\p{L})/u, (m, p1, p2) => p1 + p2.toUpperCase())
        resultado.innerText = out
        return
    }

    // torna em minúscula e capitaliza letra após início ou pontuação
    const lower = text.toLowerCase()
    let out = ''
    let capitalizeNext = true
    for (let i = 0; i < lower.length; i++) {
        const ch = lower[i]
        if (capitalizeNext && /\p{L}/u.test(ch)) {
            out += ch.toUpperCase()
            capitalizeNext = false
        } else {
            out += ch
        }
        if (/[.!?]/.test(ch)) capitalizeNext = true
    }

    resultado.innerText = out
})

