<template>
    <CardView elevation="5" radius="0">
      <Ripple rippleColor="white">
        <slot name="content" />
<!--         <Gradient direction="top down" colors="#28ADAA, #28BAAA" >
          <Label class="btn-next">
            <FormattedString>
              <Span fontSize="20" :text="'ion-ios-lock' | fonticon" class="ion" />
              <Span text=" Masuk Akun Saya "  />
            </FormattedString>
          </Label>
        </Gradient> -->
      </Ripple>
    </CardView>  
</template>