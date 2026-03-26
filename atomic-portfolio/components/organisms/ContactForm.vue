<template>
  <form @submit.prevent="handleSubmit" class="space-y-8">
    <BaseInput v-model="form.name"    label="Nom"     placeholder="Ton nom"          :required="true" />
    <BaseInput v-model="form.email"   label="Email"   placeholder="email@exemple.fr" :required="true" type="email" />

    <div>
      <label class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-3">Objet</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="obj in objets"
          :key="obj"
          type="button"
          @click="form.objet = form.objet === obj ? '' : obj"
          :class="[
            'font-mono text-xs px-3 py-2 border transition-all',
            form.objet === obj
              ? 'bg-[var(--ink)] text-[var(--cream)] border-[var(--ink)]'
              : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--ink)]',
          ]"
        >
          {{ obj }}
        </button>
      </div>
    </div>

    <BaseInput v-model="form.message" label="Message" placeholder="..." :required="true" type="textarea" :rows="5" />

    <p v-if="error" class="font-mono text-xs text-red-500 border border-red-500/30 p-3">
      {{ error }}
    </p>

    <BaseButton tag="button" type="submit" variant="solid" size="lg" :disabled="loading || sent" class="w-full justify-center">
      <span v-if="loading">Envoi en cours...</span>
      <span v-else-if="sent">✓ Message envoyé !</span>
      <span v-else>Envoyer →</span>
    </BaseButton>
  </form>
</template>

<script setup>
import BaseInput  from '@/components/atoms/BaseInput.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

const sent    = ref(false)
const loading = ref(false)
const error   = ref('')
const form    = reactive({ name: '', email: '', objet: '', message: '' })
const objets  = ['Recrutement', 'Stage', 'Question sur un projet', 'Autre']

async function handleSubmit() {
  loading.value = true
  error.value   = ''

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        objet: form.objet || 'Non précisé',
        message: form.message
      })
    })

    if (res.ok) {
      sent.value = true
      Object.assign(form, { name: '', email: '', objet: '', message: '' })
      setTimeout(() => { sent.value = false }, 6000)
    } else {
      error.value = 'Erreur lors de l’envoi. Écris directement à maxime.blanco275@gmail.com'
    }
  } catch {
    error.value = 'Connexion impossible. Écris directement à maxime.blanco275@gmail.com'
  } finally {
    loading.value = false
  }
}
</script>
