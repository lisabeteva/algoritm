const x = document.getElementById('1'),
      y = document.getElementById('2'),
      z = document.getElementById('3'),
      text = document.querySelector ('.text'),
      btn = document.getElementsByClassName ('button' )[0];

function check() {
    const a = +x.value,
          b = +y.value,
          c = +z.value,
          triangle = ((a + b > c) && (a + c >b) && (c + a > a)),
          pifagor = ((a**2 + b**2 === c**2)||(a**2 + c**2===b**2)||(c**2 + b**2 === a**2));

if (triangle && pifagor) {
    text.innerText = 'Это треугольник и он прямоугольный';
} else if (triangle && !pifagor){
    text.innerText = 'Это треугольник, но он не прямоугольный';
} else {
    text.innerText = 'Такой треугольник не может существовать';
}

}

btn.addEventListener('click', check);