$(function(){
    $('.toggles button').click(function(){
        var getId = this.id;
        var getCurrent = $('.works .' + getId);

        $('.work').not(getCurrent).hide(500);
        getCurrent.show(500);
    });

    $('#showall').click(function(){
        $('.work').show(500);
    });
});