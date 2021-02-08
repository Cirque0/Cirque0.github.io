var i = 0;
var lines = ['Lorem ipsum dummy text blabla.', 'Dolor amet blablabla.'];
var speed = 50;

function typeWriterWrapper() {
    for (line of lines) {
        i = 0;
        typeWriter(line);
        document.getElementById("demo").innerHTML += '<br>';
    }
}

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, txt);
  }
}
