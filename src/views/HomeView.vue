<template>
  <SiteSectionHero />
  <SiteStripe class="sticky top-0 z-10" />
  <SiteSectionDate />
  <SiteSectionAttendance />
  <SiteSectionRsvp />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteSectionHero from '@/components/SiteSectionHero.vue';
import SiteStripe from '@/components/SiteStripe.vue'
import SiteSectionDate from '@/components/SiteSectionDate.vue'
import SiteSectionAttendance from '@/components/SiteSectionAttendance.vue'
import SiteSectionRsvp from '@/components/SiteSectionRsvp.vue'
// import SiteSection from '@/components/SiteSection.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    SiteSectionHero,
    SiteStripe,
    SiteSectionDate,
    SiteSectionAttendance,
    SiteSectionRsvp,
  },
});
</script>
