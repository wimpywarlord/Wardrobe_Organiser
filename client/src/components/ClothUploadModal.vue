<template>
    <PrimeVueDialog :breakpoints="{'960px': '75vw', '640px': '100vw'}" :maximizable="true" :visible="display" :closable="false" :style="{width: '50vw'}">
        <!-- <template #header>
            <h3><p style="font-weight: 650;">Add a new Clothes</p></h3>
        </template> -->
        <div style="margin-bottom:4px;">
            <small>Select the color of the cloth:</small>
        </div>
        <div class="color-tag-container">
            <PrimeVueChip @click="redColorSelector" label="Red" class="color-chip" :class='{colorChipSelected : red_color_chip_selected}'  style="background-color:red; color:white;"/>
            <PrimeVueChip @click="blueColorSelector" label="Blue" class="color-chip" :class='{colorChipSelected : blue_color_chip_selected}'  style="background-color:blue; color:white;"/>
            <PrimeVueChip @click="greenColorSelector" label="Green" class="color-chip" :class='{colorChipSelected : green_color_chip_selected}'  style="background-color:green; color:white;"/>
            <PrimeVueChip @click="blackColorSelector" label="Black" class="color-chip" :class='{colorChipSelected : black_color_chip_selected}'  style="background-color:black; color:white;"/>
            <PrimeVueChip @click="whiteColorSelector" label="White" class="white-special-chip color-chip" :class='{colorChipSelected : white_color_chip_selected}'  style="background-color:white; color:black;"/>
            <PrimeVueChip @click="limeColorSelector" label="Lime" class="color-chip" :class='{colorChipSelected : lime_color_chip_selected}'  style="background-color:Lime; color:white;"/>
            <PrimeVueChip @click="brownColorSelector" label="Brown" class="color-chip" :class='{colorChipSelected : brown_color_chip_selected}'  style="background-color:brown; color:white;"/>
            <PrimeVueChip @click="camelColorSelector" label="Camel" class="color-chip" :class='{colorChipSelected : camel_color_chip_selected}'  style="background-color:#c2b280; color:white;"/>
            <PrimeVueChip @click="yellowColorSelector" label="Yellow" class="color-chip" :class='{colorChipSelected : yellow_color_chip_selected}'  style="background-color:#F9E79F; color:black;"/>
            <PrimeVueChip @click="lightBlueColorSelector" label="Light-Blue" class="color-chip" :class='{colorChipSelected : light_blue_color_chip_selected}'  style="background-color:#5DADE2; color:white;"/>
            <PrimeVueChip @click="brownColorSelector" label="Grey" class="color-chip" :class='{colorChipSelected : grey_color_chip_selected}'  style="background-color:grey; color:white;"/>
            <PrimeVueChip @click="tealColorSelector" label="Teal" class="color-chip" :class='{colorChipSelected : teal_color_chip_selected}'  style="background-color:teal; color:white;"/>
            <PrimeVueChip @click="pinkColorSelector" label="Pink" class="color-chip" :class='{colorChipSelected : pink_color_chip_selected}'  style="background-color:pink; color:white;"/>
            <PrimeVueChip @click="lilacColorSelector" label="Lilac" class="color-chip" :class='{colorChipSelected : lilac_color_chip_selected}'  style="background-color:#8E44AD; color:white;"/>
        </div>

        <hr>

        <div style="margin-bottom:6px;">
            <small>Select the Season:</small>
        </div>
        <div class="season-tag-container">
            <PrimeVueChip @click="winterSeasonSelector" label="Winter" class="color-chip"  />
            <PrimeVueChip @click="summerSeasonSelector" label="Summer" class="color-chip" />
            <PrimeVueChip @click="autumnSeasonSelector" label="Autumn" class="color-chip" />
            <PrimeVueChip @click="springSeasonSelector" label="Spring" class="color-chip" />
        </div>

        <hr>

        <div style="margin-bottom:10px;">
            <small>Select the Category of the Cloth:</small>
        </div>
        <div >
            <PrimeVueMultiSelect :filter="true" display="chip" v-model="selectedCategory" :options="categories" optionLabel="categoryName" style="width:100%;" placeholder="Select Category" />
        </div>

        <div style="margin: 10px 0;"></div>

        <div style="margin-bottom:10px;">
            <small>Upload the Photo of the Cloth:</small>
        </div>

        <input type="file" name="image-cloth" @change="imageUpload">

        <template #footer>
            <PrimeVueButton @click="$emit('close-modal-event')" label="Close" icon="pi pi-times" class="p-button-text"/>
        </template>
    </PrimeVueDialog>

</template>

<script>
// You would not listen from the child component for parent events,
// you would instead pass a prop down to the child and if the child 
// component needs to update the data you would emit an event from child 
// to parent to update the state.

// Read only life cycle: Parent > Prop > Child

// Read/Update life cycle: Parent > Prop > Child > Emit > Parent > Update > Child Updates
export default {
    name : "ClothUploadModal",
    props : {
        modal_identifier :  Number,
        display : Boolean,
    },
    methods : {
        redColorSelector() {
            this.red_color_chip_selected = !this.red_color_chip_selected;
        },
        blueColorSelector() {
            this.blue_color_chip_selected = !this.blue_color_chip_selected;
        },
        greenColorSelector() {
            this.green_color_chip_selected = !this.green_color_chip_selected;
        },
        blackColorSelector() {
            this.black_color_chip_selected = !this.black_color_chip_selected;
        },
        whiteColorSelector() {
            this.white_color_chip_selected = !this.white_color_chip_selected;
        },
        limeColorSelector() {
            this.lime_color_chip_selected = !this.lime_color_chip_selected;
        },
        brownColorSelector() {
            this.brown_color_chip_selected = !this.brown_color_chip_selected;
        },
        camelColorSelector() {
            this.camel_color_chip_selected = !this.camel_color_chip_selected;
        },
        yellowColorSelector() {
            this.yellow_color_chip_selected = !this.yellow_color_chip_selected;
        },
        lightBlueColorSelector() {
            this.light_blue_color_chip_selected = !this.light_blue_color_chip_selected;
        },
        greyColorSelector() {
            this.grey_color_chip_selected = !this.grey_color_chip_selected;
        },
        tealColorSelector() {
            this.teal_color_chip_selected = !this.teal_color_chip_selected;
        },
        pinkColorSelector() {
            this.pink_color_chip_selected = !this.pink_color_chip_selected;
        },
        lilacColorSelector() {
            this.lilac_color_chip_selected = !this.lilac_color_chip_selected;
        },

        async imageUpload(event)
        {
            console.log("Upload Function Trigger");
            console.log(this.selectedCategory);
            if (true) {
                // PUT CHECK AND CONDITIONS HERE
                // FORM VALIDATION
                    console.log(event.target.files);
                    const data = new FormData();
                    data.append("file",event.target.files[0]);
                    data.append("upload_preset","kshitij-dhyani-wardrobe");
                    this.axios({
                    method: "POST",
                    url: "https://api.cloudinary.com/v1_1/kshitij-dhyani/upload",
                    data: data,
                    headers: { "Content-Type": "multipart/form-data" },
                    }).then(function (response) {
                        //handle success
                        console.log(response);
                        // TOAST
                        // this.$emit("close-modal-after-upload");
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });
                    // const res = await fetch("https://api.cloudinary.com/v1_1/kshitij-dhyani/upload",{
                    //     method: "POST",
                    //     body : data,
                    // });
                    // const file = await res.json();
                    // console.log(file)
            }
            else{
                // IF FAIL SHOW ERROR MESSAGE
            }
            
        }
    },
    data() {
	    return {
        red_color_chip_selected: false,
        blue_color_chip_selected: false,
        green_color_chip_selected: false,
        black_color_chip_selected: false,
        white_color_chip_selected: false,
        lime_color_chip_selected: false,
        brown_color_chip_selected: false,
        camel_color_chip_selected: false,
        yellow_color_chip_selected: false,
        light_blue_color_chip_selected: false,
        grey_color_chip_selected: false,
        teal_color_chip_selected: false,
        pink_color_chip_selected: false,
        lilac_color_chip_selected: false,
        color: null,
        season : null,
        image_of_cloth : null,
		selectedCategory: null,
		categories: [
			{categoryName: 'Cap', value: 'Cap'},
			{categoryName: 'Hat', value: 'Hat'},
			{categoryName: 'Coat', value: 'Coat'},
			{categoryName: 'Vest', value: 'Vest'},
			{categoryName: 'Belt', value: 'Belt'},
			{categoryName: 'Cape', value: 'Cape'},
			{categoryName: 'Watch', value: 'Watch'},
			{categoryName: 'Crocs', value: 'Crocs'},
            {categoryName: 'Socks', value: 'Socks'},
			{categoryName: 'Haori', value: 'Haori'},
			{categoryName: 'Scarf', value: 'Scarf'},
			{categoryName: 'Hoody', value: 'Hoody'},
			{categoryName: 'Purse', value: 'Purse'},
			{categoryName: 'Jeans', value: 'Jeans'},
			{categoryName: 'Kurta', value: 'Kurta'},
			{categoryName: 'Getas', value: 'Getas'},
            {categoryName: 'Chain', value: 'Chain'},
			{categoryName: 'Shirt', value: 'Shirt'},
			{categoryName: 'Other', value: 'Other'},
			{categoryName: 'Pants', value: 'Pants'},
			{categoryName: 'Top', value: 'Top'},
			{categoryName: 'Shoes', value: 'Shoes'},
			{categoryName: 'Beanie', value: 'Beanie'},
			{categoryName: 'Tights', value: 'Tights'},
			{categoryName: 'Waders', value: 'Waders'},
            {categoryName: 'Turban', value: 'Turban'},
			{categoryName: 'Jumper', value: 'Jumper'},
			{categoryName: 'Shorts', value: 'Shorts'},
			{categoryName: 'Salwar', value: 'Salwar'},
			{categoryName: 'Dickey', value: 'Dickey'},
			{categoryName: 'Jersey', value: 'Jersey'},
			{categoryName: 'Choker', value: 'Choker'},
			{categoryName: 'Signet', value: 'Signet'},
			{categoryName: 'Slides', value: 'Slides'},
            {categoryName: 'Bonnet', value: 'Bonnet'},
			{categoryName: 'Blazer', value: 'Blazer'},
			{categoryName: 'Mantle', value: 'Mantle'},
			{categoryName: 'Capris', value: 'Capris'},
			{categoryName: 'Jacket', value: 'Jacket'},
			{categoryName: 'Trunks', value: 'Trunks'},
			{categoryName: 'Henley', value: 'Henley'},
			{categoryName: 'Slacks', value: 'Slacks'},
			{categoryName: 'Thongs', value: 'Thongs'},
			{categoryName: 'Slacks', value: 'Slacks'},
            {categoryName: 'Wallet', value: 'Wallet'},
			{categoryName: 'Chinos', value: 'Chinos'},
			{categoryName: 'Hoodie', value: 'Hoodie'},
			{categoryName: 'T-shirt', value: 'T-shirt'},
            {categoryName: 'Uniform', value: 'Uniform'},
            {categoryName: 'Loafers', value: 'Loafers'},
			{categoryName: 'Bandana', value: 'Bandana'},
			{categoryName: 'Henley', value: 'Henley'},
			{categoryName: 'Goggles', value: 'Goggles'},
			{categoryName: 'Pajamas', value: 'Pajamas'},
            {categoryName: 'Joggers', value: 'Joggers'},
            {categoryName: 'Jacket', value: 'Jacket'},
			{categoryName: 'Sweater', value: 'Sweater'},
			{categoryName: 'Sandals', value: 'Sandals'},
			{categoryName: 'SwimSuit', value: 'SwimSuit'},
			{categoryName: 'Leggings', value: 'Leggings'},
            {categoryName: 'Snapback', value: 'Snapback'},
            {categoryName: 'Trouser', value: 'Trouser'},
			{categoryName: 'Cardigan', value: 'Cardigan'},
			{categoryName: 'Rain-Coat', value: 'Rain-Coat'},
			{categoryName: 'Sports Wear', value: 'Sports Wear'},
			{categoryName: 'Gym Wear', value: 'Gym Wear'},
            {categoryName: 'Suit', value: 'Suit'},
            {categoryName: 'Skirt', value: 'Skirt'},
			{categoryName: 'Saree', value: 'Saree'},
			{categoryName: 'Lehenga', value: 'Lehenga'},
			{categoryName: 'Track-Pants', value: 'Track-Pants'},
			{categoryName: 'Undershirt', value: 'Undershirt'},
            {categoryName: 'Underwear', value: 'Underwear'},
            {categoryName: 'Flip-Flops', value: 'Flip-Flops'},
			{categoryName: 'Face-Mask', value: 'Face-Mask'},
			{categoryName: 'Track-Suit', value: 'Track-Suit'}            
		    ]
	    }
    },
}

</script>

<style scoped>
.color-chip
{
    margin: 2px 2px;
    transition: all .2s ease-in-out;

}
.color-chip :hover{
    transform: scale(1.02);
    font-weight: 500;
}
.color-tag-container
{

}
.white-special-chip
{
    border: 1px solid black;
}

.colorChipSelected
{
    border: 3px solid black;
    font-weight: 500;
}
</style>