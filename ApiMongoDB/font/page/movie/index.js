class Movie{

    constructor( portada,title,releaseYear,actors,nationality, director, writer,language, platform,isMCU, mainCharacterName,producer, distributor, genre)
    {   
        this.portada = portada;
        this.title= title;
        this.releaseYear= releaseYear;
        this.actors = [actors];
        this.nationality= nationality;
        this.director= [director];
        this.writer= [writer];
        this.language= language;
        this.platform= platform;
        this.isMCU = isMCU;
        this.mainCharacterName= mainCharacterName;
        this.producer= [producer];
        this.distributor= distributor;
        this.genre= genre;
    }
  
  }

  async function mostrarMovie()
{
    let ocultar = document.getElementById("ocultar");
    ocultar.style.cssText = 'width: 100%; display: block; visibility: visible;';
    let postForm = document.getElementById('bodyPost');
    postForm.style.cssText = 'visibility: hidden; display: none;';
    let delform = document.getElementById("bodyDelete")
    delform.style.cssText = 'visibility: hidden; display: none;';  
    let updateform = document.getElementById("bodyUpdate")
    updateform.style.cssText = 'visibility: hidden; display: none;';
    let post = document.getElementById("postActor")
    post.style.cssText = 'visibility: hidden; display: none;';
    let postD = document.getElementById("postDirector")
    postD.style.cssText = 'visibility: hidden; display: none;';
    let postW = document.getElementById("postWriter")
    postW.style.cssText = 'visibility: hidden; display: none;';
    let add = document.getElementById('postAdd');
    add.style.cssText = 'visibility: hidden; display: none;';
    let delActor = document.getElementById("delActor")
    delActor.style.cssText = 'visibility: hidden; display: none;';
    let delD = document.getElementById("delDirector")
    delD.style.cssText = 'visibility: hidden; display: none;';
    let delW = document.getElementById("delWriter")
    delW.style.cssText = 'visibility: hidden; display: none;';
    let delB = document.getElementById('delButtom');
    delB.style.cssText = 'visibility: hidden; display: none;'; 
    let url = 'http://localhost:3000/movie'
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
        for(let peliculas of resul)
          {
            textTemp +=`<div class="col">
                          <div class="card"  style="width: 420px; margin: 5px; padding: 15px">
                              <img src="`+peliculas.portada+`" style="border-radius: 15px;" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <div class="card-header">
                                  `+peliculas.title+`
                                  </div>
                                  <ul class="list-group list-group-flush">
                                      <li class="list-group-item">Año de lanzamiento: `+peliculas.releaseYear+`</li>
                                      <li class="list-group-item">Actores: `+peliculas.actors+`</li>
                                      <li class="list-group-item">País: `+peliculas.nationality+`</li>
                                      <li class="list-group-item">Diector: `+peliculas.director+`</li>
                                      <li class="list-group-item">Guionista: `+peliculas.writer+`</li>
                                      <li class="list-group-item">Idioma: `+peliculas.language+`</li>
                                      <li class="list-group-item">Plataforma: `+peliculas.platform+`</li>
                                      <li class="list-group-item">Universo Marvel: `+peliculas.isMCU+`</li>
                                      <li class="list-group-item">Protagonista: `+peliculas.mainCharacterName+`</li>
                                      <li class="list-group-item">Productor: `+peliculas.producer+`</li>
                                      <li class="list-group-item">Distribuidora: `+peliculas.distributor+`</li>
                                      <li class="list-group-item">Género: `+peliculas.actors+`</li>
                                  </ul>
                              </div>
                          </div>
                      </div>`;
          }
          document.getElementById("movie").innerHTML = textTemp;
        }
        
    catch(err) 
        {
          console.log(err);
        }
}
async function mostrarId()
{
  document.getElementById("movie").innerHTML = '';
  let id = document.getElementById("indice").value;
  let url='';
  
  if(id != '')
  {
    url = `http://localhost:3000/movie?id=${id}`;
  }
  else
  {
    url = `http://localhost:3000/movie`;
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
            textTemp +=`<div class="col">
                          <div class="card"  style="width: 420px; margin: 5px; padding: 15px">
                              <img src="`+resul.portada+`" style="border-radius: 15px;" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <div class="card-header">
                                  `+resul.title+`
                                  </div>
                                  <ul class="list-group list-group-flush">
                                      <li class="list-group-item">Año de lanzamiento: `+resul.releaseYear+`</li>
                                      <li class="list-group-item">Actores: `+resul.actors+`</li>
                                      <li class="list-group-item">País: `+resul.nationality+`</li>
                                      <li class="list-group-item">Diector: `+resul.director+`</li>
                                      <li class="list-group-item">Guionista: `+resul.writer+`</li>
                                      <li class="list-group-item">Idioma: `+resul.language+`</li>
                                      <li class="list-group-item">Plataforma: `+resul.platform+`</li>
                                      <li class="list-group-item">Universo Marvel: `+resul.isMCU+`</li>
                                      <li class="list-group-item">Protagonista: `+resul.mainCharacterName+`</li>
                                      <li class="list-group-item">Productor: `+resul.producer+`</li>
                                      <li class="list-group-item">Distribuidora: `+resul.distributor+`</li>
                                      <li class="list-group-item">Género: `+resul.actors+`</li>
                                  </ul>
                              </div>
                          </div>
                      </div>`;
          document.getElementById("movie").innerHTML = textTemp;

        }else {

          mostrarMovie()

        }
        
      }catch(err) 
        {
          console.log(err);
        }
}

async function postMovie()
{
  try
  {
    let nuevomovie = new Movie(
                                          document.getElementById("portada").value,
                                          document.getElementById("title").value,
                                          document.getElementById("releaseYear").value,
                                          document.getElementById("actors").value,
                                          document.getElementById("nationality").value,
                                          document.getElementById("director").value,
                                          document.getElementById("writer").value,
                                          document.getElementById("language").value,
                                          document.getElementById("platform").value,
                                          document.getElementById("isMCU").value,
                                          document.getElementById("mainCharacterName").value,
                                          document.getElementById("producer").value,
                                          document.getElementById("dirtributor").value,
                                          document.getElementById("actors").value);
    let url = "http://localhost:3000/movie";
    let param =
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(nuevomovie),
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

//PUT movie
async function putMovie()
{
  try
  {
    let id = document.getElementById("idUpdate").value;
    let portada =document.getElementById("portadaUp").value;
    let title = document.getElementById("titleUp").value;
    let releaseYear = document.getElementById("releaseYearUp").value;
    let actors = document.getElementById("actorsUp").value;
    let nationality = document.getElementById("nationalityUp").value;
    let director = document.getElementById("directorUp").value;
    let writer = document.getElementById("writerUp").value;
    let language = document.getElementById("languageUp").value;
    let platform = document.getElementById("platformUp").value;
    let isMCU = document.getElementById("isMCUUp").value;
    let mainCharacterName = document.getElementById("mainCharacterNameUp").value;
    let producer = document.getElementById("producerUp").value;
    let distributor = document.getElementById("distributorUp").value;
    let genre = document.getElementById("genreUp").value;
                                   
    let datos = {'portada': portada,'title':title,'releaseYear':releaseYear,'actors': actors, 'nationality':nationality, 'director': director, 'writer': writer, 'language':language,'platform':platform, 'isMCU': isMCU,'mainCharacterName':mainCharacterName,'producer':producer,'distributor': distributor, 'genre': genre};
    let url = `http://localhost:3000/movie?id=${id}`;
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

///Delete Movie

async function delMovie()
{
  try
  {
    
  let id = document.getElementById("idDel").value;

  let dato = {'id': id};
  console.log(dato);

  let url = "http://localhost:3000/movie";

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

//Get adicionales

async function mostrarActors()
{
  document.getElementById("movie").innerHTML = '';
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';  
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let id = document.getElementById("indice").value;
  let url=`http://localhost:3000/movie/actors?id=${id}`;
  
  let param = {
        headers:{"content-type": "application/json; charset=UTF-8"},
        method:"GET"
    }
  try
  {
    let data = await fetch(url,param)
    let resul = await data.json()
    let textTemp='';
    let actTemp='';
    if(id!='')
    {
      for(let j of resul)
      {
        actTemp += `<div>`+j+`</div>`
      }
      textTemp +=`<div class="col">
                          <div class="card"  style="width: 420px; margin: 5px; padding: 15px">
                              <div class="card-body">
                                  <div class="card-header">
                                  Los Actores son:
                                  </div>
                                   `+actTemp+`
                              </div>
                          </div>
                      </div>`;
      
    }
    console.log(actTemp)
    document.getElementById("movie").innerHTML = textTemp;
    console.log(resul)
    
  }
  catch(err) 
        {
          console.log(err);
        }
}

async function mostrarDirector()
{
  document.getElementById("movie").innerHTML = '';
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';  
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let id = document.getElementById("indice").value;
  let url=`http://localhost:3000/movie/directors?id=${id}`;
  
  let param = {
        headers:{"content-type": "application/json; charset=UTF-8"},
        method:"GET"
    }
  try
  {
    let data = await fetch(url,param)
    let resul = await data.json()
    let textTemp='';
    let actTemp='';
    if(id!='')
    {
      for(let j of resul)
      {
        actTemp += `<div>`+j+`</div>`
      }
      textTemp +=`<div class="col">
                          <div class="card"  style="width: 420px; margin: 5px; padding: 15px">
                              <div class="card-body">
                                  <div class="card-header">
                                  Los Directores son:
                                  </div>
                                   `+actTemp+`
                              </div>
                          </div>
                      </div>`;
      
    }
    console.log(actTemp)
    document.getElementById("movie").innerHTML = textTemp;
    console.log(resul)
    
  }
  catch(err) 
        {
          console.log(err);
        }
}

async function mostrarWriter()
{
  document.getElementById("movie").innerHTML = '';
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';  
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let id = document.getElementById("indice").value;
  let url=`http://localhost:3000/movie/writer?id=${id}`;
  
  let param = {
        headers:{"content-type": "application/json; charset=UTF-8"},
        method:"GET"
    }
  try
  {
    let data = await fetch(url,param)
    let resul = await data.json()
    let textTemp='';
    let actTemp='';
    if(id!='')
    {
      for(let j of resul)
      {
        actTemp += `<div>`+j+`</div>`
      }
      textTemp +=`<div class="col">
                          <div class="card"  style="width: 420px; margin: 5px; padding: 15px">
                              <div class="card-body">
                                  <div class="card-header">
                                  Los Guionistas son:
                                  </div>
                                   `+actTemp+`
                              </div>
                          </div>
                      </div>`;
      
    }
    console.log(actTemp)
    document.getElementById("movie").innerHTML = textTemp;
    console.log(resul)
    
  }
  catch(err) 
        {
          console.log(err);
        }
}

//Post adicionales

async function addActor()
{
  let id = document.getElementById("idPostActor").value;
  let actors= document.getElementById("actorPost").value;
  let dato = {'actors' : actors};

  try
  {
    let url = `http://localhost:3000/movie/actors?id=${id}`;
    let param =
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(dato),
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

async function addDirector()
{
  let id = document.getElementById("idPostDirector").value
  let director= document.getElementById("directorPost").value;
  let dato = {'director': director};
  try
  {
  let url = `http://localhost:3000/movie/director?id=${id}`;
  let param =
    {
      headers:{"content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(dato),
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

async function addWriter()
{
  let id = document.getElementById("idPostWriter").value
  let writer= document.getElementById("writerPost").value;
  let dato = {'writer': writer};
  try
  {
  let url = `http://localhost:3000/movie/writer?id=${id}`;
  let param =
    {
      headers:{"content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(dato),
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


///Del adicionales

async function delActor()
{
  try
  {
    
  let id = document.getElementById("idDelActor").value;
  let actors = document.getElementById("actorDel").value
  let dato = {'actors': actors};
  console.log(dato);

  let url = `http://localhost:3000/movie/actors?id=${id}`;

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

async function delDirector()
{
  try
  {
    
  let id = document.getElementById("idDelDirector").value;
  let director = document.getElementById("directorDel").value
  let dato = {'director': director};
  console.log(dato);

  let url = `http://localhost:3000/movie/actors?id=${id}`;

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

async function delWriter()
{
  try
  {
    
  let id = document.getElementById("idDelWriter").value;
  let writer = document.getElementById("writerDel").value
  let dato = {'writer': writer};
  console.log(dato);

  let url = `http://localhost:3000/movie/actors?id=${id}`;

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
  document.getElementById("movie").innerHTML = '';
  let ocultar = document.getElementById("ocultar");
  ocultar.style.cssText = 'visibility: hidden; display: none;';
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';
  let postD = document.getElementById("postDirector")
  postD.style.cssText = 'visibility: hidden; display: none;';
  let postW = document.getElementById("postWriter")
  postW.style.cssText = 'visibility: hidden; display: none;';
  let delActor = document.getElementById("delActor")
  delActor.style.cssText = 'visibility: hidden; display: none;';
  let delD = document.getElementById("delDirector")
  delD.style.cssText = 'visibility: hidden; display: none;';
  let delW = document.getElementById("delWriter")
  delW.style.cssText = 'visibility: hidden; display: none;';
  let delB = document.getElementById('delButtom');
  delB.style.cssText = 'visibility: hidden; display: none;'; 
  let add = document.getElementById('postAdd');
  add.style.cssText = 'visibility: visible; display: block;';  
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: visible; display: block;';
}

function updateForm()
{
  document.getElementById("movie").innerHTML = '';
  let ocultar = document.getElementById("ocultar");
  ocultar.style.cssText = 'visibility: hidden; display: none;'; 
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';
  let add = document.getElementById('postAdd');
  add.style.cssText = 'visibility: hidden; display: none;';
  let post = document.getElementById("postActor")
  post.style.cssText = 'visibility: hidden; display: none;';
  let postD = document.getElementById("postDirector")
  postD.style.cssText = 'visibility: hidden; display: none;';
  let postW = document.getElementById("postWriter")
  postW.style.cssText = 'visibility: hidden; display: none;';
  let delActor = document.getElementById("delActor")
  delActor.style.cssText = 'visibility: hidden; display: none;';
  let delD = document.getElementById("delDirector")
  delD.style.cssText = 'visibility: hidden; display: none;';
  let delW = document.getElementById("delWriter")
  delW.style.cssText = 'visibility: hidden; display: none;';
  let delB = document.getElementById('delButtom');
  delB.style.cssText = 'visibility: hidden; display: none;';    
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: visible; display: block;';
}

function delForm()
{
  document.getElementById("movie").innerHTML = '';
  let ocultar = document.getElementById("ocultar");
  ocultar.style.cssText = 'visibility: hidden; display: none;'; 
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;'; 
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let add = document.getElementById('postAdd');
  add.style.cssText = 'visibility: hidden; display: none;';
  let postD = document.getElementById("postDirector")
  postD.style.cssText = 'visibility: hidden; display: none;';
  let postW = document.getElementById("postWriter")
  postW.style.cssText = 'visibility: hidden; display: none;';
  let post = document.getElementById("postActor")
  post.style.cssText = 'visibility: hidden; display: none;';
  let delActor = document.getElementById("delActor")
  delActor.style.cssText = 'visibility: hidden; display: none;';
  let delD = document.getElementById("delDirector")
  delD.style.cssText = 'visibility: hidden; display: none;';
  let delW = document.getElementById("delWriter")
  delW.style.cssText = 'visibility: hidden; display: none;'; 
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: visible; display: block;';
  let delB = document.getElementById('delButtom');
  delB.style.cssText = 'visibility: visible; display: block;'; 
}

function postActors()
{
  document.getElementById("movie").innerHTML = '';
  let ocultar = document.getElementById("ocultar");
  ocultar.style.cssText = 'visibility: hidden; display: none;'; 
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;'; 
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';
  let delActor = document.getElementById("delActor")
  delActor.style.cssText = 'visibility: hidden; display: none;';
  let delD = document.getElementById("delDirector")
  delD.style.cssText = 'visibility: hidden; display: none;';
  let delW = document.getElementById("delWriter")
  delW.style.cssText = 'visibility: hidden; display: none;';
  let postD = document.getElementById("postDirector")
  postD.style.cssText = 'visibility: hidden; display: none;';
  let postW = document.getElementById("postWriter")
  postW.style.cssText = 'visibility: hidden; display: none;';
  let delB = document.getElementById('delButtom');
  delB.style.cssText = 'visibility: hidden; display: none;'; 
  let post = document.getElementById("postActor")
  post.style.cssText = 'visibility: visible; display: block;';  
}

function postDirector()
{
  document.getElementById("movie").innerHTML = '';
  let ocultar = document.getElementById("ocultar");
  ocultar.style.cssText = 'visibility: hidden; display: none;'; 
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;'; 
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';
  let delActor = document.getElementById("delActor")
  delActor.style.cssText = 'visibility: hidden; display: none;';
  let delD = document.getElementById("delDirector")
  delD.style.cssText = 'visibility: hidden; display: none;';
  let delW = document.getElementById("delWriter")
  delW.style.cssText = 'visibility: hidden; display: none;';
  let postW = document.getElementById("postWriter")
  postW.style.cssText = 'visibility: hidden; display: none;';
  let post = document.getElementById("postActor")
  post.style.cssText = 'visibility: hidden; display: none;';
  let delB = document.getElementById('delButtom');
  delB.style.cssText = 'visibility: hidden; display: none;'; 
  let postD = document.getElementById("postDirector")
  postD.style.cssText = 'visibility: visible; display: block;';
}

function postWriter()
{
  document.getElementById("movie").innerHTML = '';
  let ocultar = document.getElementById("ocultar");
  ocultar.style.cssText = 'visibility: hidden; display: none;'; 
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;'; 
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';
  let delActor = document.getElementById("delActor")
  delActor.style.cssText = 'visibility: hidden; display: none;';
  let delD = document.getElementById("delDirector")
  delD.style.cssText = 'visibility: hidden; display: none;';
  let delW = document.getElementById("delWriter")
  delW.style.cssText = 'visibility: hidden; display: none;';
  let post = document.getElementById("postActor")
  post.style.cssText = 'visibility: hidden; display: none;';
  let postD = document.getElementById("postDirector")
  postD.style.cssText = 'visibility: hidden; display: none;';
  let delB = document.getElementById('delButtom');
  delB.style.cssText = 'visibility: hidden; display: none;'; 
  let postW = document.getElementById("postWriter")
  postW.style.cssText = 'visibility: visible; display: block;';
}

function delActors()
{
  document.getElementById("movie").innerHTML = '';
  let ocultar = document.getElementById("ocultar");
  ocultar.style.cssText = 'visibility: hidden; display: none;'; 
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;'; 
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';
  let delD = document.getElementById("delDirector")
  delD.style.cssText = 'visibility: hidden; display: none;';
  let delW = document.getElementById("delWriter")
  delW.style.cssText = 'visibility: hidden; display: none;';
  let postD = document.getElementById("postDirector")
  postD.style.cssText = 'visibility: hidden; display: none;';
  let postW = document.getElementById("postWriter")
  postW.style.cssText = 'visibility: hidden; display: none;';
  let post = document.getElementById("postActor")
  post.style.cssText = 'visibility: hidden; display: none;';
  let delActor = document.getElementById("delActor")
  delActor.style.cssText = 'visibility: visible; display: block;';  
}

function delDirector()
{
  document.getElementById("movie").innerHTML = '';
  let ocultar = document.getElementById("ocultar");
  ocultar.style.cssText = 'visibility: hidden; display: none;'; 
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;'; 
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';
  let delD = document.getElementById("delDirector")
  delD.style.cssText = 'visibility: hidden; display: none;';
  let delW = document.getElementById("delWriter")
  delW.style.cssText = 'visibility: hidden; display: none;';
  let postW = document.getElementById("postWriter")
  postW.style.cssText = 'visibility: hidden; display: none;';
  let post = document.getElementById("postActor")
  post.style.cssText = 'visibility: hidden; display: none;';
  let delActor = document.getElementById("delActor")
  delActor.style.cssText = 'visibility: hidden; display: none;';
  let postD = document.getElementById("postDirector")
  postD.style.cssText = 'visibility: visible; display: block;';  
}

function delWriter()
{
  document.getElementById("movie").innerHTML = '';
  let ocultar = document.getElementById("ocultar");
  ocultar.style.cssText = 'visibility: hidden; display: none;'; 
  let postForm = document.getElementById('bodyPost');
  postForm.style.cssText = 'visibility: hidden; display: none;'; 
  let updateform = document.getElementById("bodyUpdate")
  updateform.style.cssText = 'visibility: hidden; display: none;';
  let delform = document.getElementById("bodyDelete")
  delform.style.cssText = 'visibility: hidden; display: none;';
  let delD = document.getElementById("delDirector")
  delD.style.cssText = 'visibility: hidden; display: none;';
  let postW = document.getElementById("postWriter")
  postW.style.cssText = 'visibility: hidden; display: none;';
  let post = document.getElementById("postActor")
  post.style.cssText = 'visibility: hidden; display: none;';
  let delActor = document.getElementById("delActor")
  delActor.style.cssText = 'visibility: hidden; display: none;';
  let postD = document.getElementById("postDirector")
  postD.style.cssText = 'visibility: hidden; display: none;';
  let delW = document.getElementById("delWriter")
  delW.style.cssText = 'visibility: visible; display: block;';  
}