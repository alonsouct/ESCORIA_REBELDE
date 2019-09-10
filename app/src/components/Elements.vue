<template>
    <b-col md="3">
        <b-list-group>
            <b-list-group-item button v-b-toggle.ele-a.ele-b>Informacion</b-list-group-item>
            <b-collapse id="ele-a">
                <b-button @click="$store.commit('constructArquetype', {id: '1', title: 'prueba'})">Primer elemento</b-button>
            </b-collapse>
            <b-collapse id="ele-b">
                <b-button>Segundo elemento</b-button>
            </b-collapse>
            <b-list-group-item button v-b-toggle.ele-c.ele-d>Procedimientos</b-list-group-item>
            <b-collapse id="ele-c">
                <b-button>Tercer elemento</b-button>
            </b-collapse>
            <b-collapse id="ele-d">
                <b-button>Cuarto elemento</b-button>
            </b-collapse>
            <b-list-group-item button v-b-toggle.ele-e.ele-f>Conclusiones</b-list-group-item>
            <b-collapse id="ele-e">
                <b-button>Quinto elemento</b-button>
            </b-collapse>
            <b-collapse id="ele-f">
                <b-button>Sexto elemento</b-button>
            </b-collapse>
        </b-list-group>
    </b-col>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'Elements'
}
</script>