$(document).ready(function() {

    //intercetto il click su una voce principale di menu;
    $('.icona').click(function() {
        //recupero il tag ul con classe dropdown che è suo fratello
        var sottomenu = $(this).next('.dropdown');
        //valuto se l'elemento su cui ho cliccato ha gia il dropdawn aperto;
        if(sottomenu.is(':visible')){
            //se si allora ho cliccato lastessa voce per chiuderlo;
            sottomenu.hide();
        } else {
            //se no allora ho cliccato una nuova voce per aprirlo;
            //chiudo gli altri eventuali aperti in precedenza;
            $('.dropdown').hide();
            //visuallizzo il menu dropdown
            sottomenu.show();
        }
    })

    $('.a').click(function(){
        var sottomenu = $('div.dropdown')
        if(sottomenu.is(':visible')){
            //se si allora ho cliccato lastessa voce per chiuderlo;
            sottomenu.hide();
        } else {
            //se no allora ho cliccato una nuova voce per aprirlo;
            //chiudo gli altri eventuali aperti in precedenza;
            $('.dropdown').hide();
            //visuallizzo il menu dropdown
            sottomenu.show();
        }
    })
})
