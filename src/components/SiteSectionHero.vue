<template>
  <SiteSection>
    <template #background>
      <div ref="background" class="bg-primary w-full h-full relative">
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
      <div class="h-screen max-h-screen-lg grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-5 items-center p-4 lg:p-20">
        <div class="row-span-1 lg:col-span-3 transition-all flex flex-col gap-2 xl:gap-5">
          <p ref="titleOne" class="font-gistesy text-4xl lg:text-7xl text-secondary">Ven a celebrar con nosotros</p>
          <p ref="coupleName" class="font-mango text-6xl lg:text-9xl text-tertiary">Alicia y Luis</p>
          <p ref="titleDate" class="font-forum text-2xl lg:text-4xl text-tertiary">14 DE JULIO 2025</p>

          <div class="flex items-center justify-center gap-5 lg:gap-10 font-forum text-secondary pt-10 lg:pt-5">
            <div ref="daysEl" class="flex flex-col items-center justify-center text-center">
              <span class="text-3xl">{{ days }} </span>
              <span class="text-xl">Dias</span>
            </div>
            <div ref="hoursEl" class="flex flex-col items-center justify-center text-center">
              <span class="text-3xl">{{ hours }}</span>
              <span class="text-xl">Horas</span>
            </div>
            <div ref="minutesEl" class="flex flex-col items-center justify-center text-center">
              <span class="text-3xl">{{ minutes }}</span>
              <span class="text-xl">Minutos</span>
            </div>
            <div ref="secondsEl" class="flex flex-col items-center justify-center text-center">
              <span class="text-3xl">{{ seconds }}</span>
              <span class="text-xl">Segundos</span>
            </div>
          </div>
        </div>
        <div class="lg:col-span-2 row-span-1 flex justify-center w-full h-full lg:items-center">
          <img ref="coupleImage" src="@/assets/wedding.webp" alt="couple"
            class="rounded-full w-80 h-80 lg:w-96 lg:h-96 object-cover shadow-2xl">
        </div>
      </div>
    </template>
  </SiteSection>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import SiteSection from '@/components/SiteSection.vue'
import gsap from 'gsap';

export default defineComponent({
  name: 'SiteSectionHero',
  components: {
    SiteSection,
  },

  setup() {
    const days = ref(0)
    const hours = ref(0)
    const minutes = ref(0)
    const seconds = ref(0)

    const weddingDate = new Date('july 14, 2025 15:00:00')

    setInterval(() => {
      const currentDate = new Date()
      const finalDate = weddingDate.valueOf() - currentDate.valueOf()

      seconds.value = Math.floor(finalDate / 1000)
      minutes.value = Math.floor(seconds.value / 60)
      hours.value = Math.floor(minutes.value / 60)
      days.value = Math.floor(hours.value / 24)

      seconds.value = seconds.value % 60
      minutes.value = minutes.value % 60
      hours.value = hours.value % 24

      if (currentDate.getTime() >= weddingDate.getTime()) {
        seconds.value = 0
        minutes.value = 0
        hours.value = 0
        days.value = 0
      }
    }, 1000)

    const titleOne = ref(null)
    const coupleName = ref(null)
    const titleDate = ref(null)
    const daysEl = ref(null)
    const hoursEl = ref(null)
    const minutesEl = ref(null)
    const secondsEl = ref(null)
    const background = ref(null)
    const coupleImage = ref(null)

    onMounted(() => {
      const titleElements = [titleOne.value, coupleName.value, titleDate.value]
      const countdownElements = [daysEl.value, hoursEl.value, minutesEl.value, secondsEl.value]

      const tl = gsap.timeline({
        delay: 0.5
      })

      gsap.set(background.value, {
        opacity: 0,
        // y: 10
      }
      )
      gsap.set(coupleImage.value, {
        opacity: 0
      })

      tl.to(background.value,
        {
          ease: 'expo.in',
          opacity: 1,
          delay: -1.25,
          duration: 2,
        })

      tl.to(coupleImage.value, {
        opacity: 1,
        duration: 1.4
      })

      tl.fromTo(
        titleElements,
        {
          y: 200,
          rotationX: -90,
        },
        {
          ease: 'expo.out',
          y: 0,
          rotationX: 0,
          duration: 2,
          stagger: 0.2,
        }
      )

      tl.fromTo(
        countdownElements,
        {
          y: 50,
          opacity: 0,
        },
        {
          ease: 'expo.out',
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
        }
      )
    })


    return {
      seconds,
      minutes,
      hours,
      days,
      coupleName,
      daysEl,
      hoursEl,
      minutesEl,
      secondsEl,
      background,
      titleDate,
      titleOne,
      coupleImage
    }
  }
});
</script>
