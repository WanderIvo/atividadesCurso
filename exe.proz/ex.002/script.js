
const titulo = document.getElementById('titulo');
const link = document.getElementById('link');
const listaNaoOrdenada = document.getElementById('listaNaoOrdenada');
const listaOrdenada = document.getElementById('listaOrdenada');
titulo.innerText = 'Título da Página';
link.innerText = 'Ir para o site';
link.href = 'https://www.example.com';
listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';
listaOrdenada.innerHTML = '<li><a href="https://www.site1.com">Link 1</a></li><li><a href="https://www.site2.com">Link 2</a></li><li><a href="https://www.site3.com">Link 3</a></li>';
