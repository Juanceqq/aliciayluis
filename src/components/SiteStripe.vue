<template>
  <SiteSection>
    <template #container>
      <div class="flex justify-center items-center w-full h-14 bg-white">
        <span class="text-2xl lg:text-3xl font-mango text-tertiary"> Alicia & Luis </span>
      </div>
    </template>
  </SiteSection>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteSection from '@/components/SiteSection.vue'


export default defineComponent({
  name: 'SiteStripe',
  components: {
    SiteSection
  }
});
</script>
