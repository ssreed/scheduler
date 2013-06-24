$(function(){
    console.log('App initialized!');

    var scheduler = $('#scheduler');
    var list = $('#list-container');
    var input = $('#input-box');
    var d, today;

    var appendItem = function() {
        list.append('<li> ' + input.val() + ' </li>');
    };

    var init = function() {

        $('#list-container li').draggable({
            cursor: 'move',
            snap: '#scheduler td',
            stop: function(e, ui) {
                $(this).toggleClass('big');
            }
        });

        input.keypress(function(e){
            if(e.which === 13)
            {
                e.preventDefault();
                appendItem();
            }
        });


        $('tr td').droppable({
            activeClass: "state-default",
            hoverClass: "state-hover",
            drop: function(e, ui) {
                $(this).append(ui.draggable.html());
            }
        });

        d = new Date(); 
        today = d.getDay();
        $('.day').eq(today).addClass('addColor');
        console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());

        $('tbody tr th').each(function(){
            console.log($(this).eq(0).html());
            var now = $(this).eq(0).html();
            if((parseInt(now) + 12) === d.getHours())
            {
                $(this).eq(0).addClass('addColor');
            } 
        });


    };

    init();
});