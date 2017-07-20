function mychangecolor() {
    var a = document.getElementById("Name").value;
    document.getElementById("word1").innerHTML = a;

    var b = document.getElementById("Verb").value;
    document.getElementById("word2").innerHTML = b;

    var c = document.getElementById("Adverb").value;
    document.getElementById("word3").innerHTML = c;

    var d = document.getElementById("Verb2").value;
    document.getElementById("word4").innerHTML = d;

    var e = document.getElementById("Noun").value;
    document.getElementById("word5").innerHTML = e;

    var f = document.getElementById("Adjective2").value;
    document.getElementById("word6").innerHTML = f;

    var g = document.getElementById("Adverb2").value;
    document.getElementById("word7").innerHTML = g;

    var h = document.getElementById("Name2").value;
    document.getElementById("word8").innerHTML = h;

    document.getElementById("lineone").style.display = 'block';
    document.getElementById("linetwo").style.display = 'block';
    document.getElementById("linethree").style.display = 'block';
}
