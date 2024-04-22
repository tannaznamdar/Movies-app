<template>

    <div class="wrapper">
        <div class="container bv-example-row">
            <div class="row mt-4">
                
                <div class="col-lg-3">
                    <article class="card-container" >
                        <a href="#">
                            <figure class="card-img">
                                <img alt="RebelMoon" :src="RebelMoon">
                            </figure>

                            <div class="card-info-overlay">
                                <div class="card-info">
                                    <div class="mb-2 d-flex flex-row">
                                        <span class="internal-distance-l">
                                            <font-awesome-icon icon="heart" />
                                            86%
                                        </span>
                                        <span>
                                            <img alt="Imdb" :src="Imdb">
                                            10/ 5.1
                                        </span>
                                    </div>

                                    <h2 class="card-font card-font--title">  فیلم ربل مون 2  </h2>
                                    <p class="card-font card-font--subTitle"> Rebel Moon 2 2024 </p>
                                    <span class="transparent-btn transparent-btn-orange">زیرنویس چسبیده</span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>

            </div>
        </div>
    </div>

</template>


<script>

import RebelMoon from '../assets/images/RebelMoon.jpg'
import Imdb from '../assets/images/la--imdb.svg'


export default {
    name: 'cards',

  
    data() {
        return {
            RebelMoon,
            Imdb,
        }
    }
}

</script>




<style scoped lang="scss">

.card-container{
    box-shadow: 0 5px 25px rgba(0, 0, 0, .13);
    position: relative;
    a{
        text-decoration: none;
    color: #fff;
    }
}

.card-img {
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 180px;
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
        border-radius: 8px;
    }
}

.card-info-overlay {

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background: rgba(0, 0, 0, .7);
  border-radius: 4px;
  transition: all 400ms;
}

.card-info{
  position: absolute;
  top: 50%;
  right: 0;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0 5px 25px rgba(0, 0, 0, .13) !important;
}


.card-container:hover .card-info-overlay {
  opacity: 1;
}

.internal-distance-l {
    margin-left: 10px;
}

.card-font {
    font-family: inherit;
    line-height: 1.3;
    color: #fff;

    &--title {
        font-weight: 700;
        font-size: 15px;
    }

    &--subTitle {
        font-weight: 200;
        font-size: 12px;
    }
}

.transparent-btn {
    display: inline-block;
    padding: 8px 14px 8px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 3px;
    border: 1px solid #f0f3f9;

    &-orange {
        border-color: #FF7555;
        color: #FF7555;
    }

    &-green {
        border-color: #89d64f;
        color: #89d64f;
    }


}
</style>