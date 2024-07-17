<template>
  <SiteSection>
    <template #background>
      <div class="bg-primary w-full h-full rotate-">
        <div class="h-full w-full relative">
          <img src="@/assets/Marco.png" alt="hero background"
            class=" w-2/3 lg:w-1/3 object-cover absolute top-0 right-0">
        </div>
      </div>
    </template>

    <template #container>
      <div class="grid xl:grid-cols-10 items-center lg:p-20">
        <div class="xl:col-start-2 col-span-1 lg:col-span-3 lg:items-start flex flex-col gap-2 xl:gap-5 bg-secondary">
          <div tag="header" class="flex flex-col w-full gap-4 p-10">
            <span class="font-forum text-3xl lg:text-4xl text-center lg:text-left font-bold">
              Confirmar asistencia
            </span>
            <span class="text-center text-md lg:text-xl font-forum lg:text-left font-semibold">
              Confirma tu asistencia a la boda de Alicia y Luis
            </span>
            <form ref="form" @submit.prevent="sendEmail" class="flex flex-col gap-5">
              <div class="flex justify-center lg:justify-start gap-4 font-forum">
                <div class="flex items-center justify-center gap-1">
                  <input id="yes" type="radio" checked="true" v-model="isAttending" value="yes"
                    class="w-4 h-4 accent-secondary">

                  <label for="yes">Si</label>
                </div>
                <div class="flex items-center justify-center gap-1">
                  <input id="no" type="radio" v-model="isAttending" value="no" class="w-4 h-4 accent-secondary">
                  <label for="no">No</label>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div class="flex flex-col items-start">
                  <label class="font-forum font-semibold">Nombre</label>
                  <input type="text" name="user_name" v-model="nameInput"
                    class="bg-primary border focus:border-tertiary text-sm rounded-lg outline-none w-full p-2.5" />
                  <label class="text-tertiary font-bold pt-1 pl-2" v-if="nameLabel">Nombre requerido</label>
                </div>
                <div class="flex flex-col items-start">
                  <label class="pb-2 font-forum font-semibold">Email</label>
                  <input type="email" name="user_email" v-model="emailInput"
                    class="bg-primary border focus:border-tertiary text-sm rounded-lg outline-none w-full p-2.5" />
                  <label class="text-tertiary font-bold pt-1 pl-2" v-if="emailLabel != ''">{{ emailLabel }}</label>
                </div>
                <div class="flex flex-col items-start">
                  <label class="font-forum font-semibold">Mensaje</label>
                  <textarea name="message" v-model="messageText"
                    class="bg-primary border focus:border-tertiary text-sm rounded-lg outline-none w-full p-2.5" />
                </div>
                <div class="flex justify-end">
                  <button type="submit"
                    class="border-tertiary rounded-md bg-primary hover:bg-tertiary hover:text-primary  text-tertiary font-forum py-2 px-10 border-2">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>
  </SiteSection>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import SiteSection from '@/components/SiteSection.vue'
import emailjs from '@emailjs/browser'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';

export default defineComponent({
  name: 'SiteSectionRsvp',

  components: {
    SiteSection,
  },

  setup() {
    const form = ref()
    const isAttending = ref('yes')

    const emailInput = ref('')
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const emailLabel = ref('')
    const validEmail = ref(false)

    const nameInput = ref('')
    const nameLabel = ref(false)

    const messageText = ref('')

    onMounted(() => {
      watch(
        () => emailInput.value,
        (newValue) => {
          if (newValue) {
            if (!regex.test(newValue)) {
              emailLabel.value = 'Por favor usa un correo valido'
              validEmail.value = false
            }
            else {
              emailLabel.value = ''
              validEmail.value = true
            }
          }

        }
      )
      watch(
        () => nameInput.value,
        () => {
          nameLabel.value = false
        }
      )
    })

    function sendEmail() {
      if (nameInput.value == '') {
        nameLabel.value = true
      }
      if (emailInput.value == '') {
        emailLabel.value = 'Por favor usa un correo valido'
        validEmail.value == false
      }
      if (validEmail.value == true && nameLabel.value == false) {
        emailjs
          .sendForm('service_uih2s9l', isAttending.value == 'yes' ? 'template_8wfxlwa' : 'template_t2cfpp7', form.value, 'F7clYJ8pktKnAMXS8')
          .then(
            () => {

              emailInput.value = ''
              nameInput.value = ''
              messageText.value = ''
              toast('Asistencía confirmada con exito.', {
                position: "bottom-right",
                autoClose: 2000,
                type: 'success',
                hideProgressBar: true,
                closeOnClick: true,
                transition: 'slide'
              })
            },
            () => {
              toast('Algo salió mal', {
                position: "bottom-right",
                autoClose: 2000,
                type: 'error',
                hideProgressBar: true,
                closeOnClick: true,
                transition: 'slide'
              })
            }
          )
      }
    }



    return {
      sendEmail,
      form,
      isAttending,
      emailInput,
      emailLabel,
      validEmail,
      nameInput,
      messageText,
      nameLabel,
    }
  }
})
</script>
