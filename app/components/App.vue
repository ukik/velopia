<template>
  <Page>
    <ActionBar title="Velopia" android:flat="true" />
    <ScrollView ref="wrapper" @scroll="onScroll" padding="0 0 15 0">
        <StackLayout id="container">
            <!-- <HomePromo /> -->
            <HomeTron id="render_tron" ref="parallex" v-if="render_tron" />
            <HomeCategory id="render_category" v-if="render_category" />
            <HomeRecommended id="render_recommended" v-if="render_recommended" />
            <HomeBanner id="render_banner" v-if="render_banner" />
            <HomeProducts v-for="(item, index) in itemList" :key="index" :id="'render_products'+index" :props_title="item.title" v-if="item.render_products"/>
            
            <ActivityIndicator v-if="render_indicator" busy="true" />

            <!-- <Label class="ion" :text="ion_ios_arrow_dropright" /> -->
<!--             <Label v-shadow="2">111</Label>

            <Label class="ion" :text="'ion-md-egg' | fonticon" />
            <Label class="fa" :text="String.fromCharCode(0xf0f8)" />
            <Label text.decode="&#xf108;" class="fa" />
            <Label class="fab" :text="String.fromCharCode(0xf374)" />
            <Label class="mdi" :text="String.fromCharCode(0xe3a3)" />
            <Label class="ion" text.decode="&#xf11b;" /> -->
        </StackLayout>
    </ScrollView>

  </Page>
</template>

<script>
import HomeTron from "./HomeTron"
import HomeCategory from './HomeCategory'
import HomeRecommended from './HomeRecommended'
import HomeProducts from './HomeProducts'
import HomePromo from './HomePromo'
import HomeBanner from './HomeBanner'

export default {
  components: {
    HomeTron,
    HomeCategory,
    HomeRecommended,
    HomeProducts,
    HomePromo,
    HomeBanner,
  },
  data() {
    return {
        render_tron: true,
        render_category: true,
        render_recommended: false,
        render_banner: false,
        itemList:[
            {
                title:'K-Pop',
                render_products: false,
            },
            {
                title:'J-Pop',
                render_products: false,
            },
            {
                title:'Onepiece',
                render_products: false,
            },
            {
                title:'Naruto',
                render_products: false,
            },
        ],

        render_indicator: true,
    }
  },
  mounted() {
    console.log(String.fromCharCode(0xf374))
  },
  methods: {
    onScroll(args) {

        const sv_wrapper = this.$refs.wrapper.nativeView

        // if the offset is less than the height of the header.
        if (sv_wrapper.verticalOffset < this.$refs.parallex.nativeView.getActualSize().height) {

            this.onScrollParallex(sv_wrapper.verticalOffset / 1);
            // this.bus.$emit('onScrollParent', this.scrollView.verticalOffset / 2)
        }

        // sv = scroll-view
        const sv_height = args.object.getActualSize().height 
        const sv_container_height = args.object.getViewById("container").getActualSize().height


        // BOTTOM
        if(args.scrollY >= (sv_container_height - sv_height) - 10) {
            this.render_tron = true
        }

        if(!args.object.getViewById("render_tron")) return
        if(args.scrollY >= (sv_container_height - sv_height) - 10) {
            this.render_category = true
        }

        if(!args.object.getViewById("render_category")) return
        if(args.scrollY >= (sv_container_height - sv_height) - 10) {
            this.render_recommended = true
        }

        if(!args.object.getViewById("render_recommended")) return
        if(args.scrollY >= (sv_container_height - sv_height) - 10) {
            this.render_banner = true
        }

        if(!args.object.getViewById("render_banner")) return
        if(args.scrollY >= (sv_container_height - sv_height) - 10) {
            console.log(args.scrollY)

            for (var i = 0; i < this.itemList.length; i++) {
                this.itemList[i].render_products = true
                if(!args.object.getViewById('render_products'+i)) return
                if(args.scrollY >= (sv_container_height - sv_height) - 10) {
                    this.itemList[i].render_products = true
                }

                // remove activity-indicator
                if (this.itemList[this.itemList.length - 1].render_products) return this.render_indicator = false
            }
        }

        return   
        // console.log(args.scrollY, args.object.getViewById("stackList").getActualSize().height / 4)

  // this.$refs.fabButton.nativeView.animate({
  //     translate: {
  //         x: 0,
  //         y: 100
  //     },
  //     opacity: 1
  // })
  // .then(() => {}, () => {});
 
    },   

    onScrollParallex(offset) {
        // sv = scroll-view
        const sv = this.$refs.wrapper.nativeView

        const parallex = this.$refs.parallex.nativeView

        if (sv.ios) {
            // iOS adjust the position with an animation to create a smother scrolling effect.
            parallex.animate({
                translate: {
                    x: 0,
                    y: offset
                }
            }).then(() => {}, () => {});
        } else {
            // Android, animations are jerky so instead just adjust the position without animation.
            parallex.translateY = Math.floor(offset);
        }
    },     
  }
}
</script>

<style scoped>
</style>
