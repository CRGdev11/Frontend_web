console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerdatos);

function traerdatos()
{
    //console.log('dentro de la funcion');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'Interfaces1.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos)
            {
                console.log(item);
                res.innerHTML += `
                <tr>
                    <td>${item.Dispositivo}</td>
                    <td>${item.IP}</td>
                    <td>${item.Activo}</td>
                    <td>${item.Localizacion}</td>
                    <td>${item.Estado1}</td>
                    <td>${item.Estado2}</td>
                </tr>
                `
            }
        }
    }
}