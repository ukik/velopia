<template>
  <StackLayout>
    <GridLayout columns="*,auto" stretchLastChild="true" margin="0 4%" >
      <Label col="0" class="h2" text="Rekomendasi" />
      <Ripple col="1" rippleColor="#94fdff" height="30" >
        <Label margin="0" padding="0" class="ion h1" :text="ion_md_arrow_forward" verticalAlignment="center" textAlignment="right" />
      </Ripple>
    </GridLayout>
    <WrapLayout padding="5 0 0 0">
        <CardView v-for="(item, index) in itemList" :key="index" elevation="5" margin="5 0 10 4%" width="44%"   radius="10" >
          <Ripple rippleColor="white">        
            <StackLayout >
                  <image
                    src="https://lparchive.org/Star-Ocean-The-Second-Story/Update 07/2-PSOGL2_123.jpg"
                    stretch="aspectFill"
                    class="m-b-10 image"
                    height="120" width="100%"
                    decodeWidth="100" decodeHeight="100"
                    loadMode="async" :useCache="true"
                  ></image>
                  <label
                    class="h3 p-l-10 p-r-10"
                    horizontalAlignment="center"
                    text="Foto Foto Foto Foto Foto Foto"
                    textWrap="false"
                  ></label>
                  <label
                  class="h2 font-weight-bold"
                    horizontalAlignment="center"
                    text="300 yen"
                    textWrap="false"
                  ></label>
            </StackLayout>
          </Ripple>
        </CardView>

    </WrapLayout>
  </StackLayout>
</template>

<script type="text/javascript">

export default {
  data() {
    return {
      itemList: getItemList(10),
    };
  },
  methods: {
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    }
  }
}
const getItemList = (count) => {
  let itemList = [];
  for (let i = 1; i <= count; i++) {
    itemList.push({
      id: i,
      name: `Item ${i}`,
      description: `Item ${i} description`,
    });
  }
  return itemList;
};
</script>

<style type="text/css" scoped="">
    .image {
        border-top-left-radius: 5;
        border-top-right-radius: 5;
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