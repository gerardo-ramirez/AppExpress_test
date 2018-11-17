class user{
    constructor(name,dni){
        this.name = name,
        this.dni = dni
    }
};
class interface{
    addUser(usuario){
        let targeta= document.getElementById('face');
        let uno = document.createElement('div');
        uno.innerHTML =` <div class='card>
        <b>Nombre: ${usuario.name} </b>
        <b>DNI: ${usuario.dni}</b> 
        <button class='btn btn-danger'> borrar</button>

        
        <div>'`
        targeta.appendChild(uno);

    };

};

document.getElementById('form').addEventListener('submit', (e)=>{
    let nombre= document.getElementById('name').value;
    let documento = document.getElementById('dni').value ;
    let usuario = new user(nombre,documento);
    console.log(usuario);
    let inter = new interface();
    inter.addUser(usuario);
    e.preventDefault();
})