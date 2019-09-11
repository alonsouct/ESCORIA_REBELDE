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
    methods: {
        ...mapMutations(['constructArquetype']),
        ...mapMutations(['constructArray']),
        loadMindmap: function(meta, data){
            var mind = {
                "meta": meta,
                "format":"node_array",
                "data": data
            };
            var options = {
                container:'jsmind_container',
                editable:true,
                theme:'primary'
            }
            var jm = jsMind.show(options, mind);
            // jm.set_readonly(true);
            // var mind_data = jm.get_data();
            // alert(mind_data);
            jm.add_node("root","son", "new node", {"background-color":"red"});
            // jm.set_node_color('sub21', 'green', '#ccc');
        },
        nodeHandler: function(param){
            this.constructArray({inf: param})
            this.constructArquetype({id: "root", topic: param})
            this.loadMindmap(this.metadata, this.arqdata)
        }
    },computed: {
        ...mapState(['arrayNodes']),
        ...mapState(['arqdata']),
        ...mapState(['metadata'])
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