$(function(){

    $('.tabs-panels .tabs li').on('click', function(){
        let $panel =  $(this).closest(".tabs-panels")

        $panel.find(".tabs li.active").removeClass("active");

        $(this).addClass("active")

        //find the panel that we want to show
        let panelToShow = $(this).attr('rel')

        //hide the current panel
        $panel.find('.panel.active').slideUp(300, showNextPanel)
        function showNextPanel(){
            $(this).removeClass('active');

            $(`#${panelToShow}`).slideDown(300, function(){
                $(this).addClass('active')
            })
        }
    })
})