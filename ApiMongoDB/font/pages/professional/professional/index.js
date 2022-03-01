class Professional{

    constructor( image, name, age, genre, weight, height, hairColor, race, isRetired, nationality, oscarsNumber, profesion)
    {   
        this.image = image;
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profesion = profesion;
    }
  
  }

  async function mostrarProfesional()
{
    let buscador = document.getElementById("buscador");
    buscador.style.cssText = 'width: 100%; display: flex; justify-content: center; visibility: visible;';
    let postForm = document.getElementById('bodyPost');
    postForm.style.cssText = 'visibility: hidden; display: none;';
    let delform = document.getElementById("bodyDelete")
    delform.style.cssText = 'visibility: hidden; display: none;';  
    let updateform = document.getElementById("bodyUpdate")
    updateform.style.cssText = 'visibility: hidden; display: none;';
    let url = 'http://localhost:3000/professional'
    let param = {
        headers:{
          "content-type": "application/json; charset=UTF-8"
        },
        method:"GET"
    }
    
    try {
        let data = await fetch(url,param)
        let resul = await data.json()
        let textTemp='';
        console.log(resul);
        for(let prof of resul)
          {
            textTemp +=`<div class="col">
                          <div class="card" style="width: 420px; margin: 5px; padding: 15px">
                              <img src="`+prof.image+`" style="border-radius: 15px;" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <div class="card-header">
                                  `+prof.name+`
                                  </div>
                                  <ul class="list-group list-group-flush">
                                      <li class="list-group-item">Genre: `+prof.genre+`</li>
                                      <li class="list-group-item">Age: `+prof.age+`</li>
                                      <li class="list-group-item">Weigth: `+prof.weight+`</li>
                                      <li class="list-group-item">Height: `+prof.height+`</li>
                                      <li class="list-group-item">Hair color: `+prof.hairColor+`</li>
                                      <li class="list-group-item">Race: `+prof.race+`</li>
                                      <li class="list-group-item">Is retired?: `+prof.isRetired+`</li>
                                      <li class="list-group-item">Nationality: `+prof.nationality+`</li>
                                      <li class="list-group-item">Oscar's: `+prof.oscarsNumber+`</li>
                                      <li class="list-group-item">Profesion: `+prof.profesion+`</li>
                                  </ul>
                              </div>
                          </div>
                        </div>`;
          }
          document.getElementById("profesional").innerHTML = textTemp;
        }
        
    catch(err) 
        {
          console.log(err);
        }
}
async function mostrarId()
{
  document.getElementById("profesional").innerHTML = '';
  let id = document.getElementById("indice").value;
  let url='';
  
  if(id != '')
  {
    url = `http://localhost:3000/professional?id=${id}`;
  }
  else
  {
    url = `http://localhost:3000/professional`;
  }
    let param = {
        headers:{"content-type": "application/json; charset=UTF-8"},
        method:"GET"
    }
    try {
        let data = await fetch(url,param)
        let resul = await data.json()
        let textTemp='';
        if(id != '')
        {
        console.log(resul);
            textTemp +=`<div class="col">
                          <div class="card" style="width: 420px; margin: 5px; padding: 15px">
                              <img src="`+resul.image+`" style="border-radius: 15px;" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <div class="card-header">
                                  `+resul.name+`
                                  </div>
                                  <ul class="list-group list-group-flush">
                                      <li class="list-group-item">Genre: `+resul.genre+`</li>
                                      <li class="list-group-item">Age: `+resul.age+`</li>
                                      <li class="list-group-item">Weigth: `+resul.weight+`</li>
                                      <li class="list-group-item">Height: `+resul.height+`</li>
                                      <li class="list-group-item">Hair color: `+resul.hairColor+`</li>
                                      <li class="list-group-item">Race: `+resul.race+`</li>
                                      <li class="list-group-item">Is retides?: `+resul.isRetired+`</li>
                                      <li class="list-group-item">Nationality: `+resul.nationality+`</li>
                                      <li class="list-group-item">Oscar's: `+resul.oscarsNumber+`</li>
                                      <li class="list-group-item">Profesion: `+resul.profesion+`</li>
                                  </ul>
                              </div>
                          </div>
                        </div>`;
          document.getElementById("profesional").innerHTML = textTemp;

        }else {

          mostrarProfesional()

        }
        
      }catch(err) 
        {
          console.log(err);
        }
}

async function postProfesional()
{
  try
  {
    let nuevoProfesional = new Professional(
                                          document.getElementById("image").value,
                                          document.getElementById("name").value,
                                          document.getElementById("age").value,
                                          document.getElementById("genre").value,
                                          document.getElementById("weight").value,
                                          document.getElementById("height").value,
                                          document.getElementById("hairColor").value,
                                          document.getElementById("race").value,
                                          document.getElementById("isRetired").value,
                                          document.getElementById("nationality").value,
                                          document.getElementById("oscarsNumber").value,
                                          document.getElementById("profesion").value);
    let url = "http://localhost:3000/professional";
    console.log(nuevoProfesional)
    let param =
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(nuevoProfesional),
        method: "POST"
      }

    let data = await fetch(url,param);
    let result = await data.json();
    console.log(result);
  }
  catch(err)
  {
    console.log(err);
  }
  
}

//PUT Profesional
async function putProfesional()
{
  try
  {
    let id = document.getElementById("idUpdate").value;
    let image =document.getElementById("imageUp").value;
    let name = document.getElementById("nameUp").value;
    let age = document.getElementById("ageUp").value;
    let genre = document.getElementById("genreUp").value;
    let weight = document.getElementById("weightUp").value;
    let height = document.getElementById("heightUp").value;
    let hairColor = document.getElementById("hairColorUp").value;
    let race = document.getElementById("raceUp").value;
    let isRetired = document.getElementById("isRetiredUp").value;
    let nationality = document.getElementById("nationalityUp").value;
    let oscarsNumber = document.getElementById("oscarsNumberUp").value;
    let profesion = document.getElementById("profesionUp").value;
                                   
    let datos = {'image': image,'name':name,'age':age,'genre': genre, 'weight':weight, 'height': height, 'hairColor': hairColor, 'race':race,'isRetired':isRetired, 'nationality': nationality,'oscarsNumber':oscarsNumber,'profesion':profesion};
    let url = `http://localhost:3000/professional?id=${id}`;
    let param =
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(datos),
        method: "PUT"
      }
    let data = await fetch(url,param);
    let result = await data.json();
    console.log(result);
  }catch(err)
  {
    console.log(err);
  }
}

async function delProfesional()
{
  try
  {
    
  let id = document.getElementById("idDel").value;

  let dato = {'id': id};
  console.log(dato);

  let url = "http://localhost:3000/professional";

    let param =
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(dato),
        method: "DELETE"
      }
    let data = await fetch(url,param);
    let result = await data.json();
    console.log(result);
  }catch(err)
  {
    console.log(err);
  }
}


function postForm()
{
  document.getElementById("profesional").innerHTML = '';
  let buscador = document.getElementById("buscador");
  buscador.style.cssText = 'visibility: hidden;';
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';  
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: visible; display: block;';
}

function updateForm()
{
  document.getElementById("profesional").innerHTML = '';
  let buscador = document.getElementById("buscador");
  buscador.style.cssText = 'visibility: hidden;'; 
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';  
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: visible; display: block;';
}

function delForm()
{
  document.getElementById("profesional").innerHTML = '';
  let buscador = document.getElementById("buscador");
  buscador.style.cssText = 'visibility: hidden;'; 
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;'; 
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: visible; display: block;'; 
}