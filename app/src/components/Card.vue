<template>
    <div
        :id="id"
        class="card"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.stop
    >
        <slot />
    </div>
</template>

<script>
export default {
    props: ['id', 'draggable'],
    methods: {
        dragStart: e => {
            const target = e.target;
            document.getElementById("jsmind_container").setAttribute("name",target.id)
        }
    }
}
</script>