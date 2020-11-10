<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
$toast-color: #fff;
    .toast{
        font-size: $font-size;height: $toast-height;
        position: fixed;top: 0;left: 50%;transform: translate(-50%);
        display: flex;align-items: center;
        background: $toast-bg;color: $toast-color;border-radius: 4px;
        shadow: 0 0 3px 0px rgba(0,0,0,0.5);
        padding: 0 16px;
    }
</style>