<template>
  <StackLayout >
    <GridLayout margin="0 15 0 14" columns="*,auto" stretchLastChild="true" >
      <Label col="0" class="h2" text="Promo" />
      <Ripple col="1" rippleColor="#94fdff" height="30" >
        <Label margin="0" padding="0" class="ion h1" :text="ion_md_arrow_forward" verticalAlignment="center" textAlignment="right" />
      </Ripple>
    </GridLayout>

    <CardView v-for="(item, index) in itemList" :key="index" elevation="10"  margin="5 14 10 14"  width="auto" radius="10" >
      <Ripple rippleColor="white">        
          <image
            :src="item.image"
            stretch="aspectFill"
            class="image"
            height="150" width="100%"
            decodeWidth="250" decodeHeight="250"
            loadMode="async" :useCache="true"
          ></image>
      </Ripple>
    </CardView>
  </StackLayout>
</template>

<script type="text/javascript">

export default {
  data() {
    return {
      itemList: [
        {
          image:"https://al3arabi.com/media/cache/content_main_cover_photo/uploads/cms/standalone-content/thumbnail/59a94c3003437.png"
        },
        {
          image:"https://www.anime-japan.jp/img/index/img_sld-09_e.jpg"
        },
        {
          image:"https://img1.ak.crunchyroll.com/i/spire3/0f8689eb23c1e975585d90d3135db1171565742913_full.jpg"
        },        
      ],
    };
  },
  methods: {
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
  }
}

</script>

<style type="text/css" scoped="">
    .image {
        /*border-radius: 10;*/
        background-image:
            url("https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        /* background-attachment: fixed; */
        /* not supported in {N} yet */
        background-position: center top;
        /* instead set ypos to top to avoid scroll-up */
    }  
</style>