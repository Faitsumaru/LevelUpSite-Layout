$(function () {
        var clock;
        clock = $('.timer').FlipClock({
        
            clockface: 'DailyCounter',
            autoStart: false, 
            countdown: true, 
            language: 'en-en',
            callbacks: {
                stop: function() {
                    alert('☢️ Special price on «Level Up» is over!!! ☢️')
                }
            }
        });
        
    clock.setTime(1800);
    clock.setCountdown(true);
    clock.start();

    //only digits for input
    $('body').on('input', '.form__text--phone', function(){
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    //send button success
    var name = $('.form__text--name');
    var phone = $('.form__text--phone');

    $('.form__btn').on('click', function() {
        if ((name.val() || phone.val()) && (name.val() && phone.val()))
            alert("✅ Successful! ✅");
        else
            alert("❌ Denied! Try again. ❌");
        });
});