<template>
    <b-row>
        <b-col md="3">
        <div class="flexbox">
            <b-button @click="Load_arq()">Cargar arquetipo</b-button>
            <b-button @click="Export_arq()">Guardar arquetipo en bd</b-button>
            <b-button @click="Import_arq()">Cargar arquetipo de bd</b-button>
            <b-button @click="save_file()">guardar arquetipo actual</b-button>
            <Card id="Primer elemento" draggable="true">
                <p>Primer elemento</p>
            </Card>
            <Card id="Segundo elemento" draggable="true">
                <p>Segundo elemento</p>
            </Card>  
        </div>
        </b-col>
        <b-col md="9">
            <div 
            id="jsmind_container"
            class="board"
            name = "pepito"
            @dragover.prevent
            @drop.prevent="nodeHandler()"
            >
                
            </div>
            <!-- las llaves permiten instanciar variables o estados de la store
                siempre y cuando estas sean "mapeadas" como se muestra mas abajo
                para mas informacion revisar States, Mutations y Actions de Vuex
                en conjunto con el ciclo de vida de aplicacion. Los "..." CREO que
                son para instanciarlos como texto porque si se llama como mapState
                simplemente se debe acceder a este como un objeto. De igual forma
                es solo para revisar y controlar los estados en ejecucion -->
            <div> {{ arrayNodes }} </div>
        </b-col>
    </b-row>    

</template>

<script>

import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

import jsMind from 'jsmind'                         // Activacion libreia jsMind
import Card from "./Card"

export default {
    name: 'Elements',
    components: {
        Card
    },
    MapInstance: null,                              // Crea instancia donde se cargara el MindMap cuando se inicie con un elemento el arquetipo
    methods: {
        ...mapMutations(['constructArquetype']),    // Importa "funciones"/"mutaciones" del store
        ...mapMutations(['constructArray']),        
        createMindmap: function(metadata, arqdata){
            // Opciones de libreria jsMind, parametros de donde se dibujara el mindmap
            // entre otros como permitir edicion y colores de tema
            // para conocer mas propiedades revisar ejemplos de la libreria
            var options = {
                container:'jsmind_container',
                editable:true,
                theme:'primary'
            }
            // "Datos utiles" del mindmap
            // se le pasa como parametro los "estados" almacenados en el store.js
            // estos ultimos son actualizados con mapState mas abajo
            var mind = {
                "meta": metadata,
                "format":"node_array",
                "data": arqdata
            }
        // IMPORTANTE: se le asigna nuevo valor a la instancia de mapa
        // esto para poder agregar y eliminar nodos (de momento) todo lo que tenga que ver
        // respecto a la libreria, como importar o exportar "arquetipos" o archivos en JSON
        // se puede hacer mediante esta instancia (this.MapInstance) "this" porque se encuentra
        // definido como propiedad de este script o componente.
        this.MapInstance = jsMind.show(options, mind)
        },
        Load_arq: function(){
        var options = {
            container:'jsmind_container',
            editable:true,
            theme:'primary'
        }
        var mind = {
                "meta":{
                    "name":"jsMind remote",
                    "author":"hizzgdev@163.com",
                    "version":"0.2"
                },
                "format":"node_array",
                "data":[
                {"id":"root", "isroot":true, "topic":"jsMind"},

                {"id":"sub1", "parentid":"root", "topic":"sub1", "background-color":"#0000ff"},
                {"id":"sub11", "parentid":"sub1", "topic":"sub11"},
                {"id":"sub12", "parentid":"sub1", "topic":"sub12"},
                {"id":"sub13", "parentid":"sub1", "topic":"sub13"},

                {"id":"sub2", "parentid":"root", "topic":"sub2"},
                {"id":"sub21", "parentid":"sub2", "topic":"sub21"},
                {"id":"sub22", "parentid":"sub2", "topic":"sub22","foreground-color":"#33ff33"},

                {"id":"sub3", "parentid":"root", "topic":"sub3"},
            ]
            }
        this.MapInstance = jsMind.show(options, mind)
        },
        save_file(){
        var mind_data = this.MapInstance.get_data('node_array');
        var mind_name = mind_data.meta.name;
        var mind_str = jsMind.util.json.json2string(mind_data);
        jsMind.util.file.save(mind_str,'text/jsmind',mind_name+'.jm');
        },        
        Export_arq: function(){
            var mind_data = this.MapInstance.get_data('node_array');
            //var mind_string = jsMind.util.json.json2string(mind_data);
            //alert(mind_string);
            var jsonToAPI = {
                "data":{mind_data}
            }
            fetch('http://mcfly.tk:3000/archetype', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(jsonToAPI), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        },
        Import_arq: function(){
            fetch('http://mcfly.tk:3000/archetype/5dba3e1c1518ab2c90c090dd')
                .then(res=>res.json())
                .then(res => {
                var jsMindDataFromAPI = res.data.mind_data;
                var options = {
                    container:'jsmind_container',
                    editable:true,
                    theme:'primary'
                }
                this.MapInstance = jsMind.show(options, jsMindDataFromAPI)
                })
                .catch(error => alert('ID no encontrada'))
        },
        // Funcion que es llamada al hacer click en elementos de la barra lateral
        // se le pasa el parametro del "topico" o "titulo" del elemento.
        // Si no existe una instancia de mapa significa que se debe de crear o colocar el primer nodo
        // en este caso nodo raiz o "root", esto lo hacemos mediante la mutacion constructArquetype
        // donde se crea solo el nodo raiz con el titulo que se le pase mediante el "payload" o
        // parametro de objeto {topic: param} donde se pueden agregar otros parametros de forma
        // {asd1: param, asd2: otroparam...} y para operar sus parametros los tratamos como objeto
        // en "store". Luego se instancia el mindmap con los datos recien creados (estos se actualizan
        // con mapState).

        // En caso de que ya exista la instancia, significa que ya hay un nodo raiz por lo tanto le agregaremos
        // hijos a este mediante la funcion "addNode" que se explicara mas abajo.jsmind-inner

        // Por ultimo y solo a forma de control se utiliza la mutacion o funcion que agrega elementos
        // al arreglo de elementos creado en "store"
        nodeHandler: function(){
            var nodo = document.getElementById("jsmind_container").getAttribute("name")
            if(this.MapInstance == null){
                this.constructArquetype({topic: nodo})
                this.createMindmap(this.metadata, this.arqdata)
            }else{
                this.addNode(nodo)
            }
            this.constructArray({inf: nodo})
        },

        // Recibe el titulo o topico del elemento al que se le hizo click
        // ve que que nodo esta seleccionado (esto mediante la libreria jsmind)
        // y se crean los datos id de nodo, la cual es necesaria para seguir instanciando nuevos nodos
        // a este, tanto como para eliminar. topic el cual correspondo al titulo pasado por parametros
        // y se crea el nodo mediante la libreria pasando de parametro los datos del nodo.
        addNode: function(param){
            var selected_node = this.MapInstance.get_selected_node(); // as parent of new node
            //if(!selected_node){prompt_info('please select a node first.');return;}
            var nodeid = jsMind.util.uuid.newid();
            var topic = param;
            var node = this.MapInstance.add_node(selected_node, nodeid, topic);
        },
        // Muy similar al anterior solo que remueve los nodos creados
        // la funcion de jsMind recibe la id del nodo seleccionado y accedemos a esta con la forma
        // "selected_node.id". Borra todos los nodos siguientes o hijos de este nodo.
        deleteNode: function(){
            var selected_node = this.MapInstance.get_selected_node(); // as parent of new node
            //if(!selected_id){prompt_info('please select a node first.');return;}
            this.MapInstance.remove_node(selected_node.id);
        }
    },computed: {
        // Actualizacion de "estados" en ejecucion
        // se puede hacer referencia a estos estados o variable mediante "this.(el estado definido en store)"
        ...mapState(['arrayNodes']),
        ...mapState(['arqdata']),
        ...mapState(['metadata'])
    },
    // "mounted()" permite ejecutar funciones previo al "cargado" de contenido de la pagina
    // revisar ciclo de vida de aplicacion en documentacion de Vue y Vuex
    mounted() {
        //this.MapInstance = this.createMindmap()
    }
}
</script>
<style>
  #jsmind_container{
    width:800px;
    height:500px;
    border:solid 1px #ccc;
    /*background:#f4f4f4;*/
    background:#f4f4f4;
  }
</style>