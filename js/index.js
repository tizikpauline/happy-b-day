let name = prompt("Как тебя зовут?")
let i = 0
while (i < 3) {
  if (i === 2) {
    document.write("<p>Happy Birthday Dear " + name + ",</p>")
  } else {
    document.write("<p>Happy Birthday to You,</p>")
  }
  i = i + 1
}
document.write("<p>Happy Birthday to You!</p><br><p>Нажми на торт и включи звук!</p>")
