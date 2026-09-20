function tocaSom(idAudio) {
   const elemento = document.querySelector(idAudio); // toca o som específico
   if(elemento == null){
    console.log('Elemento não encontrado');
   }
  
   if(elemento.localName === 'audio' && elemento){
        elemento.play();
   }
   else{
        console.log('Elemento não encontrado ou seletor inválido');
   }
}
//document.querySelector(".tecla_pom").onclick = tocaSomPom; //indica qual o botão e chama o botão

/** essa parte de cima é a parte introdutória mostrando como adicionar o som ao botão e deixar especificad qual botão*/
//document.querySelectorAll('.tecla');
//melhorar o código para renomear e cria referências

const ListaDeTeclas = document.querySelectorAll('.tecla'); //cria uma lista com todas as teclas

//Para acessar um valor da lista usando a função
 //acessa a primeira tecla da lista e adiciona o evento de click chamando a função tocaSomPom
//ListaDeTeclas[0].onclick = tocaSomPom;
let contador =0;
while(contador<ListaDeTeclas.length){
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
  
    const idAudio = `#som_${instrumento}`;   ListaDeTeclas[contador].onclick = function (){
    tocaSom(idAudio);
}
    contador++;

    console.log(contador);
  
    
     tecla.onkeydown = function(evento){
        //evento code ele fala qual a tecla pressionada
        //precisa especificar a tecla 
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa'); 
         };

        }

   
        
    tecla.onkeyup =function(){
        tecla.classList.remove('ativa');
    }
}
// se tivesse outros instrumentos do mesmo tipo utilizaremos o "FOR"


//