<template>
  <SiteSection>
    <template #background>
      <div class="bg-primary w-full h-full rotate-">
        <div class="h-full w-full relative">
          <img src="@/assets/Marco.png" alt="hero background"
            class=" w-2/3 lg:w-1/3 object-cover absolute top-0 right-0">
        </div>
        <div class="h-full w-full">
          <img src="@/assets/Marco.png" alt="hero background"
            class="w-2/3  lg:w-1/3 absolute bottom-0 left-0 rotate-180">
        </div>
      </div>
    </template>

    <template #container>
      <div id="div1" ref="target"
        class="h-screen max-h-screen-lg  flex flex-col gap-5 items-center justify-center p-4 lg:p-0">
        <span ref="titleOne" class="text-7xl lg:text-9xl font-gistesy text-secondary"> Nuestra hermosa boda </span>
        <span ref="titleTwo" class="lg:w-1/5 font-forum text-3xl text-tertiary">
          14 de julio de 2025 | 3:00p.m.
          Resort Bahía Blanca
          Calle Villamar 123, Acapulco, Gro.
        </span>
        <a ref="button" :href="directionsUrl" target="_blank"
          class="border-secondary border-2 rounded-md text-tertiary font-mango transition-all hover:bg-secondary hover:text-primary py-3 px-6">
          Ubicación
        </a>
      </div>
    </template>
  </SiteSection>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SiteSection from '@/components/SiteSection.vue'

export default defineComponent({
  name: 'SiteSectionDate',
  components: {
    SiteSection,
  },
  setup() {
    const directionsUrl = 'https://maps.app.goo.gl/zYy3Zm2Gycw6RHNh8'
    const titleOne = ref(null)
    const titleTwo = ref(null)
    const button = ref(null)
    const target = ref(null)

    return {
      directionsUrl,
      titleOne,
      titleTwo,
      button,
      target
    }
  }
})
</script>
