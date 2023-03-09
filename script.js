// criptografar texto

const botaoCriptografar = document.querySelector('#btn-encriptar');


botaoCriptografar.addEventListener("click", function(event){
    event.preventDefault();

    const encriptar = document.querySelector("#text-encrypt");
    const recebeTextoEncriptado = document.querySelector("#text-encrypted");

    let textEncript = encriptar.value;

    function criptografa(texto){

        var resultado = texto.replace(/e/gi, 'enter') 
        resultado = resultado.replace(/i/gi, 'imes') 
        resultado = resultado.replace(/a/gi, 'ai') 
        resultado = resultado.replace(/o/gi, 'ober')
        resultado = resultado.replace(/u/gi, 'ufat')
   
        return resultado
    }

    function removeAcento (texto){

        var texto = texto.toLowerCase();                                                         
        texto = texto.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        texto = texto.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        texto = texto.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        texto = texto.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        texto = texto.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        texto = texto.replace(new RegExp('[Ç]','gi'), 'c');
        return texto;                 
    }

    

    recebeTextoEncriptado.value = removeAcento(criptografa(textEncript));

});

// descriptografar texto

const botaoDescriptografar = document.querySelector('#btn-decriptar');


botaoDescriptografar.addEventListener("click", function(event){
    event.preventDefault();

    const decriptar = document.querySelector("#text-encrypt");
    let textEncript = decriptar.value;


    function descriptografa(texto){

        var resultado = texto.replace(/enter/gi, 'e') 
        resultado = resultado.replace(/imes/gi, 'i') 
        resultado = resultado.replace(/ai/gi, 'a') 
        resultado = resultado.replace(/ober/gi, 'o')
        resultado = resultado.replace(/ufat/gi, 'u')
   
        return resultado
    }

    function removeAcento (texto){

        var texto = texto.toLowerCase();                                                         
        texto = texto.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        texto = texto.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        texto = texto.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        texto = texto.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        texto = texto.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        texto = texto.replace(new RegExp('[Ç]','gi'), 'c');
        return texto;                 
    }

    const textoEncriptado = document.querySelector('#text-encrypted');
    textoEncriptado.value = removeAcento(descriptografa(textEncript));

});

// copiar texto

const botaoCopiar = document.querySelector('#btn-copiar');

botaoCopiar.addEventListener("click", function(event){
	event.preventDefault();

	const textoEncriptado = document.querySelector('#text-encrypted');

	textoEncriptado.select();
	textoEncriptado.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(textoEncriptado.value);

	const mudarTextoEncrypt = document.querySelector('#text-encrypt');
	mudarTextoEncrypt.value = textoEncriptado.value;

	textoEncriptado.value = "";

})




