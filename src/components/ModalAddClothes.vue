<template>
    <PrimeVueButton @click="open_modal()" label="CLICK ME"/>
    <PrimeVueDialog :maximizable="true" v-model:visible="display" :style="{width: '50vw'}">
        <template #header>
            <h3><p style="font-weight: 650;">Add a new Clothes</p></h3>
        </template>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quo fugiat illo in, dolorum, repudiandae corporis consectetur possimus ipsum perferendis rem eaque minus ullam impedit adipisci culpa eius animi. Quod!

        <template #footer>
            <PrimeVueButton @click="close_modal()" label="Close" icon="pi pi-times" class="p-button-text"/>
        </template>
    </PrimeVueDialog>

</template>

<script>
export default {
	data() {
		return {
			display: false,
		}
	},
    methods : {
        open_modal()
        {
            console.log(this.display);
            this.display = true;
            console.log(this.display);
        },
        close_modal()
        {
            console.log(this.display);
            this.display = false;
            console.log(this.display);
        }
    }
}

</script>

<style scoped>

</style>