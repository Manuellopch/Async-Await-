async function ObtenerClientes(){
     const clientes = new Promise((resolve, reject)=>{
          setTimeout(()=>{
               resolve(`Clientes descargados....`)
          },2000);
     });
     const error = false;
     if(!error){
          const respuestas = await clientes;
          return respuestas;
     }else{
          await Promise.reject(`Hubo un error...`);
     }
}
ObtenerClientes()
.then(res => console.log(res))
.catch(error => console.log(error))