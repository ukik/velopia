<template>
  <StackLayout padding="15 15 0 0">
    <RadListView for="item in itemList" layout="staggered" :gridSpanCount="3" @itemTap="onItemTap">
      <v-template>
        <StackLayout margin="10 0 10 15" height="100" backgroundColor="red" orientation="vertical">

          <Label :text="item.name" ></Label>
          <Label :text="item.description" ></Label>

        </StackLayout>
      </v-template>
    </RadListView>
  </StackLayout>
</template>

<script type="text/javascript">
import * as frameModule from "tns-core-modules/ui/frame";

export default {
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

