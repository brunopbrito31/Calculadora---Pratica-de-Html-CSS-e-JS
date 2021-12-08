let botaoTopo = document.getElementById('btn-top');

let botaoResultado = document.getElementById('bt-rs');

let nomeDoAluno = document.getElementById('md-alu');

let campoMediaRes = document.getElementById('cmp-res');

form = {
    nome: "",
    notaUm: 0,
    notaDois: 0,

    instanciarForm: function(){
        this.nome = document.getElementById('inpt-1').value;
        this.notaUm = document.getElementById('inpt-2').valueAsNumber;
        this.notaDois = document.getElementById('inpt-3').valueAsNumber;
    },

    calcularResultado: function(){
        return (this.notaUm + this.notaDois);
    },

    calcularMedia: function(){
        return (this.notaUm * 0.4 + this.notaDois * 0.6);
    }

}

botaoResultado.addEventListener('click',()=>{
    form.instanciarForm();

    let campoNome = document.getElementById('nom-alu');
    let campoStatusAluno = document.getElementById('sts-alu');
    let campoResMedia = document.getElementById('res-med');
    let containerPai = document.getElementById('ctn-res');
    
    
    campoNome.textContent = form.nome;
    campoResMedia.textContent = form.calcularMedia();
    
    if(form.calcularMedia() >= 7){
        console.log('entrou no aprovado');
        campoResMedia.classList.add('media-aprovado');
        campoResMedia.classList.remove('media-reprovado');
        campoStatusAluno.textContent = 'Aprovado';
        campoStatusAluno.classList.add('media-aprovado');
        campoStatusAluno.classList.remove('media-reprovado');
        containerPai.style.border = '3px solid yellowgreen';
        console.log(containerPai);
    }else{
        campoResMedia.classList.add('media-reprovado');
        campoResMedia.classList.remove('media-aprovado');
        campoStatusAluno.textContent = 'Reprovado';
        campoStatusAluno.classList.add('media-reprovado');
        campoStatusAluno.classList.remove('media-aprovado');
        containerPai.style.border = '3px solid red';
    }
});


