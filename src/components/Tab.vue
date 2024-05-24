<template>



</template>


<script>

export default {
    name: 'tab',

    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        badgeTitle: {
            type: String,
            default: ' '
        },
    },

    data() {
        return {

        }
    }
}

</script>




<style scoped lang="scss">
.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}

.tab-button:hover {
    background: #e0e0e0;
}

.tab-button.active {
    background: #e0e0e0;
}

.tab {
    border: 1px solid #ccc;
    padding: 10px;
}





.tab-background {
    padding: 20px;
    background-color: #23232b;
    border-radius: 4px;
}

.Serial-content-download {
    padding: 15px;
    margin-bottom: 5px;
    border-radius: 4px;
    background-color: #1c1c22;
    font-size: 13px;
    font-weight: 300;
    color: #bbc1c6;
    width: 100%;
}

.font-text {
    color: #fff;
    text-decoration: none;

    &--title {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.3;
    }

    &--subtitle {
        a {
            font-size: 14px;
            color: #fff;
            text-decoration: none;
            font-size: 14px
        }

        &-gray {
            color: #cbcfd3;
        }

        &-green {
            color: #89d64f;
        }

        &-yellow {
            color: #ffae00;
            font-weight: 500;
            font-size: 13px;
        }
    }

    &--sm-11 {
        font-size: 11px;
        font-weight: 200;
        color: #9ba1a6;
    }

    &-gray {
        color: #9ba1a6;
    }

    &--sm-12 {
        font-size: 12px;
        font-weight: 200;
    }

    &--sm-15 {
        font-size: 15px;
        font-weight: 500;
        color: #bbbfc3;
        margin: 0;
    }

    &--description {
        font-size: 13px;
        font-weight: 300;
        line-height: 1.9;
        color: #bbc1c6;
        width: 100%;
        text-align: justify;
        text-align-last: right;
    }

    &--medium-title {
        font-family: inherit;
        line-height: 1.3;
        font-weight: 700;
        color: #f5f5f5;
        font-size: 17px;
        padding: 0;
    }
}

.internal-distance {
    margin-left: 5px;
    margin-right: 5px;
}

.bold-text {
    font-weight: 500;
}

.internal-distance-l {
    margin-left: 5px;
}
</style>