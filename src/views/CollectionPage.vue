<script setup>
import collectioncards from "@/components/CollectionCards.vue";
</script>

<template>

  <div class="container-fluid">
    <section>
      <div class="container bv-example-row">
        <h4 class="archive-title mt-5 mb-4">آرشیو کالکشن ها</h4>
        <div class="row">
          <div class=" col-lg-3" v-for="collectionMovie in collectionMovies">
            <collectioncards v-bind="collectionMovie"></collectioncards>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: 'Collection',
  data() {
    return {

      collectionMovies: [
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },
        {
          slug: 'Pet-Sematary',
          thumbnail: 'https://www.uptvs.com/wp-contents/uploads/2023/12/Pet-Sematary-2-2023-207x290.jpg',
          link: 'thumbnail',
          Imdb: '6.3',
          episode: 2,
          title: 'Pet Sematary',
          subtitle: 'در سال ۱۹۶۹، جاد کرندال جوان آرزو دارد از زادگاه خود لودلا برود اما متوجه',
        },


      ]
    }
  },

}

</script>

<style scoped lang="scss">
.archive-title {
  font-size: 17px;
  line-height: 1.3;
  font-weight: 700;
  color: #bbc1c6;
}
</style>