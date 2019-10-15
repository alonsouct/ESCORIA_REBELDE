<template>
    <b-col md="3">
        <b-list-group>
            <b-list-group-item button v-b-toggle.ele-a.ele-b>Informacion</b-list-group-item>
            <b-collapse id="ele-a">
                <b-button @click="nodeHandler('INFO1')">Primer elemento</b-button>
            </b-collapse>
            <b-collapse id="ele-b">
                <b-button @click="nodeHandler('INFO2')">Segundo elemento</b-button>
            </b-collapse>
            <b-list-group-item button v-b-toggle.ele-c.ele-d>Procedimientos</b-list-group-item>
            <b-collapse id="ele-c">
                <b-button @click="nodeHandler('INFO3')">Tercer elemento</b-button>
            </b-collapse>
            <b-collapse id="ele-d">
                <b-button @click="nodeHandler('INFO4')">Cuarto elemento</b-button>
            </b-collapse>
            <b-list-group-item button v-b-toggle.ele-e.ele-f>Conclusiones</b-list-group-item>
            <b-collapse id="ele-e">
                <b-button @click="nodeHandler('INFO5')">Quinto elemento</b-button>
            </b-collapse>
            <b-collapse id="ele-f">
                <b-button @click="nodeHandler('INFO6')">Sexto elemento</b-button>
            </b-collapse>
        </b-list-group>
        <b-button @click="deleteNode()">Borrar elemento</b-button>
    </b-col>
    
    <!-- <div class="flexbox">
        <Board id="board-1">
            <Card id="card-1" draggable="true">
                <p>Primer elemento</p>
            </Card>    
        </Board>
    </div> -->


</template>

<script>

import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

import jsMind from 'jsmind'                         // Activacion libreia jsMind

import Board from "./Board"
import Card from "./Card"

export default {
    name: 'Elements',
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
        nodeHandler: function(param){
            if(this.MapInstance == null){
                this.constructArquetype({topic: param})
                this.createMindmap(this.metadata, this.arqdata)
            }else{
                this.addNode(param)
            }
            this.constructArray({inf: param})
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