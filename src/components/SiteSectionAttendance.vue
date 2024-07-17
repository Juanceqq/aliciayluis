<template>
  <SiteSection>
    <template #background>
      <div ref="background" class="bg-primary w-full h-full relative ">
        <div class="h-full">
          <img src="@/assets/background-top.png" alt="hero background" class="w-2/5 lg:w-1/3 absolute top-0 left-0">
        </div>
        <div class="h-full w-full ">
          <img src="@/assets/background-bot.png" alt="hero background"
            class="w-2/3  lg:w-1/3 absolute bottom-0 right-0">
        </div>
      </div>
    </template>

    <template #container>
      <div class="h-screen max-h-screen-lg flex gap-4 flex-col-reverse md:flex-row items-center justify-center">
        <div class="lg:w-4/5 lg:h-full flex items-center justify-center">
          <img src="@/assets/wedding2.webp" alt="wedding"
            class="md:rounded-t-full w-full h-full lg:w-2/4 lg:h-3/5 object-cover">
        </div>
        <div class="lg:w-4/6 lg:h-full flex flex-col gap-4 lg:gap-10 items-center justify-center p-5 md:p-0">
          <span class=" text-6xl lg:text-8xl text-secondary font-gistesy">
            ¡Reserva la fecha y nos vemos ahi!
          </span>
          <span class="text-2xl lg:text-3xl font-forum">
            Si quieres darnos un regalo tenemos mesa de regalos:
          </span>
          <div class="flex gap-5">
            <a ref="cta" :href="amazonUrl" target="_blank"
              class="border-secondary border-2 rounded-md text-tertiary font-mango transition-all hover:bg-secondary hover:text-primary py-3 px-6">
              Amazon
            </a>
            <a ref="cta" :href="liverpoolUrl" target="_blank"
              class="border-secondary border-2 rounded-md text-tertiary font-mango transition-all hover:bg-secondary hover:text-primary py-3 px-6">
              Liverpool
            </a>
          </div>
        </div>
      </div>
    </template>
  </SiteSection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteSection from '@/components/SiteSection.vue'

export default defineComponent({
  name: 'SiteSectionAttendance',
  components: {
    SiteSection
  },
  setup() {
    const amazonUrl = 'https://www.amazon.com.mx'
    const liverpoolUrl = 'https://www.liverpool.com.mx'

    return {
      amazonUrl,
      liverpoolUrl,
    }
  }
})
</script>

<style scoped></style>
