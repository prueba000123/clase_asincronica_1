let contenedorAportes = document.getElementById('aportes');
let tituloPagina = document.querySelector('h1');
let contenedorImagen = document.getElementById('contenedor-img');
let imagen = document.createElement('img');


tituloPagina.classList.add('titulo');
imagen.setAttribute('src', 'https://1.bp.blogspot.com/_dAGq_7k2IB8/TGroYFW87lI/AAAAAAAACHE/P7Wk_cP8TA4/s1600/curie.jpg');


contenedorImagen.appendChild(imagen)





contenedorAportes.innerHTML = `
<strong>Radioactividad: </strong>Conrad Roentgen descubrió los rayos X en diciembre de 1895 y la noticia
                fue revolucionaria entre los
                científicos. A principios del año siguiente, Poincaré mostró que dicho fenómeno producía una especie de
                fosforescencia que se adhería a las paredes del tubo de ensayo. Henri Becquerel dijo, por su parte, que
                la luz que estaba presente en las sales de uranio no era parecida a ningún otro material fosforescente
                con el que había trabajado hasta entonces. En esa época Marie Curie estaba buscando un tema para su
                tesis doctoral y decidió escoger los “rayos de uranio”. Su tema original era la capacidad de ionización
                de los rayos que eran expulsados por las sales de uranio.
`







