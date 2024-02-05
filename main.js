$(document).ready(function(){
    $('div button').click(function(){
    })

    $('form').on('submit', function(e){
        e.preventDefault(); 
        const novaTarefa = $('#adicionarTarefa').val(); //varial da tarefa
        $('ul').append('<li>' + novaTarefa + '<i class="fas fa-check"></i><i class="fas fa-trash"></i> </li>');
        $('#adicionarTarefa').val('')
    });

    $('ul').on('click','li',function(){ //click de checkout da tarefa
        $(this).toggleClass('checked');
    });

    $('ul').on('click','.fa-trash',function(){ //click para deletar tarefa
        $(this).parent('li').fadeOut(0);
    });

    
});

/*Ideias de aprimoração:
    Não aceitar tarefas iguais
*/