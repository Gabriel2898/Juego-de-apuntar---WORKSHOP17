const $start = document.getElementById("start"),
      $main = document.getElementById("main"),
      $juego = document.getElementById("juego"),
      $alien = document.getElementById("alien"),
      $score = document.getElementById("score")

$start.addEventListener("click", ()=> 
{
    $main.classList.add("animacionStart")

    setTimeout(() => 
    {
        $main.classList.add("d-none")
        $juego.classList.remove("d-none")
        $juego.classList.add("animacionPlay")
        $juego.style.cursor = "crosshair"

        setInterval(() => 
        {
            enemigos()
        }, 800);
    
    }, 1800 );

})


function enemigos() 
{
    const x = Math.floor(Math.random() * 80) + 1
    const y = Math.floor(Math.random() * 50) + 1
    const alien = Math.floor( Math.random() * 3 ) + 1

    $alien.src = `alien${alien}.png`
    $alien.style.top = `${y}%`
    $alien.style.left = `${x}%`
}


let puntaje = 0

window.addEventListener("click", (e)=>
{
    const objetivo = e.target.classList.contains("altura")
    
    if ( objetivo ) 
    {
        puntaje += 10
        $score.textContent = puntaje
    }

})





