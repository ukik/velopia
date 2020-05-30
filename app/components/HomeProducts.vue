<template>
  <StackLayout>
    <GridLayout margin="0 15 0 14" columns="*,auto" stretchLastChild="true" >
      <Label col="0" class="h2" :text="props_title" />
      <Ripple col="1" rippleColor="#94fdff" height="30" >
        <Label margin="0" padding="0" class="ion h1" :text="ion_md_arrow_forward" verticalAlignment="center" textAlignment="right" />
      </Ripple>
    </GridLayout>

    <HomePromo />

    <Ripple margin="0 15 0 14" v-for="(item, index) in itemList" :key="index"  rippleColor="white">        
      <DockLayout stretchLastChild="true" padding="0 0 0 0" >
            <image
              dock="left"
              src="https://lparchive.org/Star-Ocean-The-Second-Story/Update 07/2-PSOGL2_123.jpg"
              stretch="aspectFill"
              class="image"
              height="100" width="40%"
              loadMode="async" :useCache="true"
            ></image>
            <StackLayout dock="left" paddingLeft="10">
              <label
                class="h3"
                horizontalAlignment="left"
                :text="'Dock multiple children to the same side Dock multiple children to the same side Dock multiple children to the same side Dock multiple children to the same side'.substring(0, 75)+'...'"
                textWrap="true"
              ></label>
              <label
                class="h3 font-weight-bold"
                horizontalAlignment="left"
                text="300 yen"
                textWrap="true"
              ></label>
              <label
                class="h6 text-primary font-italic"
                horizontalAlignment="left"
                text="300 yen"
                textWrap="true"
              ></label>
            </StackLayout>
      </DockLayout>
    </Ripple>

  </StackLayout>
</template>

<script type="text/javascript">

import HomePromo from './HomePromo'

export default {
  components: {
    HomePromo
  },
  props: ['props_title'],
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
        border-radius: 10;
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