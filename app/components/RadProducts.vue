<template>
  <StackLayout padding="15 15 0 0">
    <RadListView for="item in itemList" layout="staggered" :gridSpanCount="2" @itemTap="onItemTap">
      <v-template>
        <!-- <StackLayout backgroundColor="red" orientation="vertical"> -->
        <!-- <CardView margin="10 0 10 15" class="p-b-10 " elevation="5" radius="10"> -->
          <StackLayout radius="10" margin="10 0 10 15" class="p-b-10" padding="0" v-shadow="{ elevation: 2, shape: 'oval', bgcolor: '#ffffff', cornerRadius: 15 }">
            <image
              src="https://lparchive.org/Star-Ocean-The-Second-Story/Update 07/2-PSOGL2_123.jpg"
              stretch="aspectFill"
              class="m-b-10 image"
              height="100" width="100%"
              decodeWidth="100" decodeHeight="100"
              loadMode="async" :useCache="true"
            ></image>
            <label
            class="h3"
              horizontalAlignment="center"
              text="Foto"
              textWrap="true"
            ></label>
            <label
            class="h2 font-weight-bold"
              horizontalAlignment="center"
              text="300 yen"
              textWrap="true"
            ></label>
          </StackLayout>
        <!-- </CardView>     -->
        <!-- </StackLayout> -->
      </v-template>
    </RadListView>
  </StackLayout>
</template>

<script type="text/javascript">
import * as frameModule from "tns-core-modules/ui/frame";
import Product from './Product'

export default {
  components: {
    Product
  },
  data() {
    return {

      itemList: getItemList(6),
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

<style type="text/css">
    .image {

        border-radius: 5;
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