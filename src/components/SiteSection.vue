<template>
  <div tag="section">
    <div :class="['relative', { 'overflow-hidden': masked }]">
      <div class="absolute w-full h-full">
        <slot name="background" />
      </div>
      <div class="relative">
        <slot name="container">
          <div :class="[contained ? 'flex justify-center' : '']">
            <slot name="layout-container">
              <div :class="contained ? ['max-w-screen-lg', 'xl:max-w-screen-xl', '2xl:max-w-screen-2xl'] : []">
                <slot name="layout">
                  <div class="py-14 lg:py-20">
                    <slot />
                  </div>
                </slot>
              </div>
            </slot>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiteSection',
  props: {
    masked: {
      type: Boolean,
      default: true,
    },
    contained: {
      type: Boolean,
      default: true,
    }
  },
});
</script>
