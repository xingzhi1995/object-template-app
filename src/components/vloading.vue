<template>
    <div id="interlacedAnimation">
        <div class="loading">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vloading"
    }
</script>

<style scoped lang="scss">
    #interlacedAnimation{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading {
        $colors: #4eca88, #56bc86, #69c795, #36a168, #31a969;
        display: flex;
        .dot {
            position: relative;
            width: 0.5em;
            height: 0.5em;
            margin: 0.5em;
            border-radius: 50%;
            &::before {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background: inherit;
                border-radius: inherit;
                animation: wave 2s ease-out infinite;
            }
            @for $i from 1 through 5 {
                &:nth-child(#{$i}) {
                    background: nth($colors, $i);

                    &::before {
                        animation-delay: $i * 0.2s;
                    }
                }
            }
        }
    }
    @keyframes wave {
        50%,
        75% {
            transform: scale(2.5);
        }
        80%,
        100% {
            opacity: 0;
        }
    }
</style>