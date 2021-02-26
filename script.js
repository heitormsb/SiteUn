  // var a = prompt("aa")
  // var a = 123
  // a = prompt("A")
  var nome = "Heitor"
  var sobrenome = "Marques"
  var valida = false
  var numero = 1
  var teste = 15
  if(valida==true){
    document.write(nome)
  } else {
    numero!==10
  }
  valida = (numero>0 && numero<100) ? valida=true : valida=false
  console.log(` a = ${nome} \n numero = ${numero} \n valida = ${valida}`) 
  document.write(nome + " " + sobrenome)

  switch(numero){
    case 1:
      console.log("a")
      test(teste, nome, sobrenome)
      break
    case 2:
      console.log("b")
      break
    default:
      console.log("def")
  }

  var salve = document.getElementById("intro").getElementsByClassName("titulo1")[0]
  salve.innerText=("Bem vindo(a) "+nome + " " + sobrenome)

  function test(x, nome, sobrenome){
    for (; x <= 20; x += 1) {
      console.log(x)
    }
    // var continua = confirm("deseja continuar?")
    // if (continua==true)
    //   alert("Continuando")
    // else
    //   alert("exit")
  }

