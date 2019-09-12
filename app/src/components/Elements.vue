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
</template>

<script>

import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

import jsMind from 'jsmind'

export default {
    name: 'Elements',
    MapInstance: null,
    methods: {
        ...mapMutations(['constructArquetype']),
        ...mapMutations(['constructArray']),
        createMindmap: function(metadata, arqdata){
            var options = {
                container:'jsmind_container',
                editable:true,
                theme:'primary'
            }
            var mind = {
                "meta": metadata,
                "format":"node_array",
                "data": arqdata
            }
        this.MapInstance = jsMind.show(options, mind)
        },
        nodeHandler: function(param){
            if(this.MapInstance == null){
                this.constructArquetype({topic: param})
                this.createMindmap(this.metadata, this.arqdata)
            }else{
                this.addNode(param)
            }
            this.constructArray({inf: param})
        },
        addNode: function(param){
            var selected_node = this.MapInstance.get_selected_node(); // as parent of new node
            //if(!selected_node){prompt_info('please select a node first.');return;}
            var nodeid = jsMind.util.uuid.newid();
            var topic = param;
            var node = this.MapInstance.add_node(selected_node, nodeid, topic);
        },
        deleteNode: function(){
            var selected_node = this.MapInstance.get_selected_node(); // as parent of new node
            //if(!selected_id){prompt_info('please select a node first.');return;}
            this.MapInstance.remove_node(selected_node.id);
        }
    },computed: {
        ...mapState(['arrayNodes']),
        ...mapState(['arqdata']),
        ...mapState(['metadata'])
    },mounted() {
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