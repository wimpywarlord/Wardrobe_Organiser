<template>
    <div class="footer-container">
    </div>
    <div @click="$emit('add-clothes-modal')" class="wide-container-of-clothes-add-box">
        <div class="add-clothes-sign-container">
            <i class="fas fa-plus"></i>
        </div>
    </div>
    <ModalAddClothes />
</template>

<script>
import ModalAddClothes from "./ModalAddClothes.vue";

export default {
    name : "Footer",
    components : {
        ModalAddClothes,
    }
}
</script>

<style scoped>
.footer-container{
    position: absolute;
    bottom: 0;
    background-color: #212F3D;
    height: 37px;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.add-clothes-sign-container{
    position: absolute;
    bottom:10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border-radius: 50%;
    padding: 30px;
    font-size: 30px;
    cursor: pointer;
    background-color:#F7F9F9;
    height: 7px;
    width: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #212F3D;
    transition: all .2s ease-in-out;
}
.add-clothes-sign-container:hover
{
    transform: scale(1.1);
}
.wide-container-of-clothes-add-box
{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>