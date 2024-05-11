<template>

    <article class="small-card">

        <router-link :to='{ name: "titlePageRoute", params: { slug } }'>
            <figure class="card-img">
                <img alt="#" :src="thumbnail">
            </figure>
            <div class="card-info d-flex justify-content-between align-item-center">
                <p class="card-title">{{ title }}</p>
                <tag v-if="hasTag" v-bind="tag"></tag>
            </div>
        </router-link>

    </article>
</template>


<script>

import Tag from "@/components/Tag.vue";
export default {
    name: 'largeMovieCards',
    components: { Tag },
    props: {
        slug: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        },
        thumbnail: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        hasTag: {
            type: Boolean,
            default: false
        },
        tag: {
            type: Object,
            default: {
                title: ' ',
                color: ' '
            }
        }
    },

    data() {
        return {

        }
    }
}

</script>


<style scoped lang="scss">
.small-card {
    position: relative;
}

.card-info {
    position: absolute;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    width: 100%;
    align-items: center;
    padding: 10px;
}

.card-img {
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 90px;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;

    img {
        display: block;
        width: auto;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 4px;
    }
}

.card-title {
    line-height: 0;
    text-decoration: none;
    color: #fff;
    margin: 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 1);
    font-size: 14px;
    font-weight: 300;

    &:is(:hover, :focus) {
        color: #fff;
    }
}
</style>