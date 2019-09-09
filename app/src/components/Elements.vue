<template>
  <b-container class="bv-row" fluid>
    <b-col md="3">
        <b-list-group>
            <b-list-group-item button v-b-toggle.ele-a.ele-b>Informacion</b-list-group-item>
            <b-collapse id="ele-a">
                <b-card>Elemento de informacion usuario</b-card>
            </b-collapse>
            <b-collapse id="ele-b">
                <b-card>Elemento de informacion medica</b-card>
            </b-collapse>
            <b-list-group-item button v-b-toggle.ele-c.ele-d>Que se yo</b-list-group-item>
            <b-collapse id="ele-c">
                <b-card>Solicitud examenes</b-card>
            </b-collapse>
            <b-collapse id="ele-d">
                <b-card>Lorem ipsum no se que mas sigue jaja</b-card>
            </b-collapse>
            <b-list-group-item button v-b-toggle.ele-e.ele-f>IDK</b-list-group-item>
            <b-collapse id="ele-e">
                <b-card>ASDHASKDJHASD</b-card>
            </b-collapse>
            <b-collapse id="ele-f">
                <b-card>ASKDFHKASJDHKJASHD</b-card>
            </b-collapse>
        </b-list-group>
    </b-col>
  </b-container>
</template>

<script>
export default {
  name: 'Elements'
}
</script>