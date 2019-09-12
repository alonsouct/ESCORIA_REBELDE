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
    </b-col>
</template>

<script>

import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

import jsMind from 'jsmind'

export default {
    name: 'Elements',
    data: {
        jm:  null
    },
    methods: {
        ...mapMutations(['constructArquetype']),
        ...mapMutations(['constructArray']),
        createMindmap: function(){
            var options = {
                container:'jsmind_container',
                editable:true,
                theme:'primary'
            }
            var mind = {
                "meta": {
                    "name":"demo",
                    "author":"hizzgdev@163.com",
                    "version":"0.2",
                },
                "format":"node_array",
                "data": [{ "id": "root", "isroot": true, "topic": "XD"}]
            }
        this.jm = jsMind.show(options, mind)
        return jm
        },
        loadMindmap: function(meta, data){
            var mind = {
                "meta": meta,
                "format":"node_array",
                "data": data
            }
            // jm.set_readonly(true);
            // var mind_data = jm.get_data();
            // alert(mind_data);
            
            // jm.set_node_color('sub21', 'green', '#ccc');
        },
        nodeHandler: function(param){
            if(this.jm == null){
                this.constructArray({inf: param})
                this.createMindmap()
            }else{
                this.jm.add_node("root","son", "new node", {"background-color":"red"})
            }
            this.constructArray({inf: param})
            //this.constructArquetype({id: "root", topic: param})
            //var mind = this.loadMindmap(this.metadata, this.arqdata)
            //var jm = jsMind.show(mind);
        }
    },computed: {
        ...mapState(['arrayNodes']),
        ...mapState(['arqdata']),
        ...mapState(['metadata'])
    },mounted() {
        //this.jm = this.createMindmap()
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