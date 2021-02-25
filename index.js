
/**
 * Mendeteksi button press
 * variabel numberOfDrumButtons mengambil query selector 
 * dari class drum dan menghitung banyaknya tombol" yang pakai class drum
 */
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

/**
 * for loops dibwh ngambil panjang dari variabel numberOfDrumButtons terus di looping agar 
 * setiap tombol dari class drum yang diklik mendapat fungsi dari "anonymus function" dan menghemat code.
 */
for (var i = 0; i < numberOfDrumButtons; i++) {

    /*document.querySelector("drum") mengambil query dari class drum, 
    sementara addEventListener adlh fungsi bawaan dengan dua parameter, parameter pertama 
    adlh event type, cnth dibawah adlh 'click event' yang mengirim sinyal saat mouse diklik, 
    parameter kedua listener yang berisi fungsi dari javascript yang dipanggil ketika diklik.
    */

    /*
    * Contoh Add event listener dengan click event fungsi akan terjadi saat tombol diklik
    * contoh dari fungsi anonymus yang tidak punya nama ditaruh dalam paramter berfungsi ketika parameter sebelumnya sudah terpenuhi.
    */
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // deklarasi constructor yg mengarah ke inner html
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

/*
* Add event listener dengan key press event, tidak perlu pakai query selector.
* fungsi akan terjadi saat tombol ditekan
*/
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(key);
            ;

    }
}


function buttonAnimation(currentKey) {

    // "." mengarah ke tipe class + variabel currentKey
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed", 100);
    })

}