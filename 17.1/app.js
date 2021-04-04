async function LeerTodos(){
     const respuesta = await fetch('http://jsonplaceholder.typicode.com/todos')
     const datos = await respuesta.json();
     return datos;
}
LeerTodos()
     .then(usuarios => console.log(usuarios));