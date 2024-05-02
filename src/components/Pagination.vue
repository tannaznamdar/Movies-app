<template>

    <div class="wp-pagenavi" role="navigation">
        <span aria-current="page" class="current">1</span><a class="page larger" title="صفحه 2" href="#">2</a><a
            class="page larger" title="صفحه 3" href="#">3</a><a class="page larger" title="صفحه 4" href="#">4</a><a
            class="page larger" title="صفحه 5" href="#">5</a><span class="extend">...</span><a class="last"
            aria-label="Last Page" href="#">10</a>
    </div>

</template>

<script>
export default {
    name: 'pagination',

    data() {
        return {

        }
    }
}
</script>



<style lang="scss" scoped>
.wp-pagenavi {
    background: #23232b;
    box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
    border-radius: 3px;
    padding: 20px;
    text-align: center;
    font-size: 15px;

    a {
        text-decoration: none;
    }
}

.wp-pagenavi span.current {
    background: #6898f8;
    color: #fff;
}

.wp-pagenavi a,
.wp-pagenavi span {
    display: inline-block;
    margin-left: 6px;
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    padding-top: 6px;
    background: #1c1c22;
    border-radius: 3px;
    color: #c1c1c1;

    &:is(:hover, :focus) {
        background: #6898f8;
        color: #fff;
    }
}
</style>