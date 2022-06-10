const sobre = document.getElementById('textoSobre');
const conhecimentos = document.getElementById('textoConhecimentos');
const objetivos = document.getElementById('textoObjetivos');
const comentarios = document.getElementById('textoComentarios');

function clickNoSobre() {
    sobre.style.display = 'block';
    conhecimentos.style.display = 'none';
    objetivos.style.display = 'none';
    comentarios.style.display = 'none';
}

function clickNoConhecimento() {
    sobre.style.display = 'none';
    conhecimentos.style.display = 'block';
    objetivos.style.display = 'none';
    comentarios.style.display = 'none';
}

function clickNoObjetivo() {
    sobre.style.display = 'none';
    conhecimentos.style.display = 'none';
    objetivos.style.display = 'block';
    comentarios.style.display = 'none';
}

function clickNoComentario() {
    sobre.style.display = 'none';
    conhecimentos.style.display = 'none';
    objetivos.style.display = 'none';
    comentarios.style.display = 'block;'
}


const tableBody = document.getElementById("table-body");
const addItem = document.getElementById("add-item");
const recados = JSON.parse(localStorage.getItem("listaRecados")) || [];

async function getInfos() {
  const response = await fetch("http://localhost:3333/errands");
  const errands = await response.json();
  mostrarRecados(errands.errands);
}

getInfos();


async function addRecados() {
  const description = prompt("digite a descricao");
  const detail = prompt("digite o detalhe");

  const newItem = {
    description,
    detail,
  };

  await fetch("http://localhost:3333/errands", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });

  getInfos();
}


async function alterarRecados(id) {
  const description = prompt("digite a descricao");
  const detail = prompt("digite o detalhe");

  const values = {
    description,
    detail,
  };

  await fetch(`http://localhost:3333/errands/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  getInfos();
}

function mostrarRecados(errands) {
  tableBody.innerHTML = "";
  return errands.map((item) => {
    console.log(item);
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const containerButton = document.createElement("div");
    const changeButton = document.createElement("div");
    const deleteButton = document.createElement("div");

    const position = errands.indexOf(item);

    th.setAttribute("scope", "row");
    th.setAttribute("class", "text-center");
    td1.setAttribute("class", "text-center");
    td2.setAttribute("class", "text-center");
    td3.setAttribute(
      "class",
      "text-center d-flex align-items-center justify-content-around"
    );
    containerButton.setAttribute("class", "d-flex flex-row");
    changeButton.setAttribute("class", "button-table rounded-3 me-2");
    changeButton.setAttribute("onclick", `alterarRecados(${item.id})`);
    deleteButton.setAttribute("class", "button-table rounded-3");
    deleteButton.setAttribute("onclick", `removerRecados(${item.id})`);

    tableBody.appendChild(tr);
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td3.appendChild(containerButton);
    containerButton.appendChild(changeButton);
    containerButton.appendChild(deleteButton);

    td1.innerText = item.description;
    td2.innerText = item.detail;
    th.innerText = position + 1;
    changeButton.innerText = "Alterar";
    deleteButton.innerText = "Excluir";
  });
}

async function removerRecados(id) {
  await fetch(`http://localhost:3333/errands/${id}`, {
    method: "DELETE",
  });

  getInfos();
}
