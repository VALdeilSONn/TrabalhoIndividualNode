const readlineSync = require ('readline-sync');

const ListaCSS = [];

const func = () => {
  let cadastro = true;
  let input = "";

  while (cadastro) {
    input = readlineSync
      .question("Digite codigo em CSS ou digite 'sair': ")
      .toLowerCase()
    if (input === "") {
      console.log("Por favor, digite codigo CSS");
    } else if (input !== 'sair') {
      ListaCSS.push(input);
    } else {
      cadastro = false;
    }
  }
  console.log(ListaCSS.sort());

}

func();