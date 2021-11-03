document.addEventListener("keypress",function(event){
    console.log(event.key)
})
document.addEventListener("keypress",function(event){
var x=event.key;
switch (x) {
    case "w":
        var audio=new Audio("sound/crash.mp3");
        audio.play();
        break;

        case "a":
        var audio6=new Audio("sound/kick-bass.mp3");
        audio6.play();
        break;

        case "s":
        var audio1=new Audio("sound/snare.mp3");
        audio1.play();
        break;

        case "d":
        var audio2=new Audio("sound/tom-1.mp3");
        audio2.play();
        break;

        case "j":
            var audio3=new Audio("sound/tom-2.mp3");
            audio3.play();
            break;

            case "k":
                var audio4=new Audio("sound/tom-2.mp3");
                audio4.play();
                break;

                case "l":
                    var audio5=new Audio("sound/tom-3.mp3");
                    audio5.play();
                    break;

    default:
        alert("Wrong Key");
        break;
}
})