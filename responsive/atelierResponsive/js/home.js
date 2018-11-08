$(document).ready(function(){
    console.log('Document prêt');
    $('#menuMobile').click(function(){
        console.log('Triggered');
        $('#liensMobile').toggleClass('hidden');
    });
});