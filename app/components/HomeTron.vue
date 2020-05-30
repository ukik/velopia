<template>
<StackLayout>
  <Pager 
  height="200" 
  cache="false" 
  :selectedIndex="selectedIndex" 
  row="0" 
  radius="10"
  id="pager" 
  spacing="0%" 
  peaking="0%" 
  transformers="scale" 
  pagesCount="4" 
  showIndicator="true" 
  indicator="swap" 
  indicatorColor="#ff9955" 
  orientation="horizontal" 
  backgroundColor="white" 
  @selectedIndexChange="selectedIndexChange" 
  @scroll="scrollEvent"
  @swipeOver="swipeOverEvent"
  @swipeEnd="swipeEndEvent"
  >
    <PagerItem v-for="(item, index) in itemList" :key="index">
	    <CardView elevation="10" margin="10 4%" radius="10">
	    	<Ripple rippleColor="white">
		        <image
					:src="item.image"
					stretch="aspectFill"
					class="image"
					height="auto" width="100%"
					
					loadMode="async" :useCache="true"
		        ></image>
		    </Ripple>
        </CardView>    	
    </PagerItem>
  </Pager>
  <!-- <Button @tap="onSelectedIndex" /> -->
</StackLayout>
</template>

<script type="text/javascript">
export default {
	data: () => ({
		selectedIndex: 2,
		interval: 5000,	
		itemList: [
			{
				image:"https://apkmagic.com.ar/wp-content/uploads/2019/07/Final-Fantasy-IX-v1.5.1-APK.png"
			},
			{
				image:"https://gamespot1.cbsistatic.com/uploads/original/1595/15950357/3649176-3545687-first class edition.jpg"
			},
			{
				image:"https://gamerselite.com/wp-content/uploads/2017/04/The-Legend-of-Zelda-Breath-of-the-Wild-Release-Date-Banner-for-Nintendo-Switch-1170x500.jpg"
			},
			{
				image:"https://cdn.releases.com/img/postattachments/229450/1200"
			},
			{
				image:"https://www.reimarufiles.com/wp-content/uploads/2019/06/Elune-banner-1024x576.jpg"
			},												
		]	
	}),
	mounted(){
		this.auto = setInterval(() => {
			if(this.selectedIndex < 3) {
				this.selectedIndex++
			} else {
				this.selectedIndex = 0				
			}
		}, this.interval)
	},
	methods: {
		scrollEvent(){
			// console.log('scrollEvent')
			this.interval = 3000
		},
		swipeOverEvent(args){
			// console.log('swipeOverEvent', args)
			this.interval = 3000
		},
		swipeEndEvent(args){
			// console.log('swipeEndEvent', args.object.selectedIndex)
			this.interval = 3000
		},
		selectedIndexChange(args){
			// console.log('selectedIndexChange', args)

			this.selectedIndex = args
			this.interval = 3000			
		},
		onSelectedIndex(){
			this.selectedIndex = 3
		}		
	}
}	

</script>

<style type="text/css" scoped="">
    .image {
        /*border-radius: 0;*/
        /*margin: 10 0;*/
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