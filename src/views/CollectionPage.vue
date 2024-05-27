<script setup>
import collectioncards from "@/components/CollectionCards.vue";
</script>

<template>

  <div class="container-fluid">
    <section class="pt-70">
      <div class="container bv-example-row">
        <h4 class="archive-title mt-5 mb-4">آرشیو کالکشن ها</h4>
        <div class="row">
          <div class=" col-lg-3 col-md-6" v-for="collectionMovie in collectionMovies">
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
.container {
  @media (min-width:450px) and (max-width:820px) {
    max-width: 99%;
  }
}

.archive-title {
  font-size: 17px;
  line-height: 1.3;
  font-weight: 700;
  color: #bbc1c6;
}

.pt-70 {
  padding-top: 70px;
}
</style>