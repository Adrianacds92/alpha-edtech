function minhaFuncao(){
    var texto = document.querySelector('#musicas').value;
    document.getElementById('morena').style.display='none';
    document.getElementById('meteoro').style.display='none';
    document.getElementById('você').style.display='none';
    document.getElementById('nega').style.display='none';
    document.getElementById('incondicional').style.display='none';

    if(texto =='morena'){
        document.getElementById('morena').style.display='block';        
    }
    if(texto =='meteoro'){
        document.getElementById('meteoro').style.display='block';        
    }
    if(texto =='você'){
        document.getElementById('você').style.display='block';        
    }
    if(texto =='nega'){
        document.getElementById('nega').style.display='block';        
    }
    if(texto =='incondicional'){
        document.getElementById('incondicional').style.display='block';        
    }
}


