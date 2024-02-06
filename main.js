$('#telefone').mask('(00) 00000-0000',{
    placeholder: '(xx) xxxxx-xxxx'
});

$('#cpf').mask('000.000.000-00',{
    placeholder: 'xxx.xxx.xxx-xx'
});
$('#cep').mask('00000-000',{
    placeholder: 'xxxxx-xxx'
});

$('form').validate({
    rules:{
        name:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        telefone:{
            required: true
        },
        cpf:{
            required: true
        },
        endereco:{
            required: true
        },
        cep:{
            required: true
        }
    },
    errorPlacement: function(error, element){
        error.addClass('error');
        error.insertAfter(element);
    },

    submitHandler: function(form){
        alert('Enviado com Sucesso!')
        $('#form') = ''
    }

})

