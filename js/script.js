$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("#button").click(function(){
    let word = $(".input").val();
    let vowel = "aeiou"
    if (vowel.includes(word[0]))
        return word = word + "ay";
    $(".output").append(word)

});
});
