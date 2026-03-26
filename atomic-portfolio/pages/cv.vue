<template>
  <PageWrapper>
    <SectionHeader
      label="Curriculum Vitae"
      title="Mon CV"
      accent-word="CV"
    />

    <div class="flex flex-wrap items-center justify-between gap-4 mb-8 max-w-4xl mx-auto">
      <p class="font-mono text-xs text-[var(--muted)]">Version PDF visible directement sur la page.</p>
      <a
        href="/rapports/CV_Maxime_Blanco.pdf"
        download
        class="flex items-center gap-3 bg-[var(--ink)] text-[var(--cream)] px-5 py-3 font-mono text-sm font-medium hover:opacity-90 transition-opacity"
      >
        📄 Télécharger le CV
      </a>
    </div>

    <div class="border border-[var(--border)] overflow-hidden bg-white max-w-3xl mx-auto mb-8">
      <iframe
        src="/rapports/CV_Maxime_Blanco.pdf#view=FitH"
        title="CV de Maxime Blanco"
        class="w-full h-[62vh] min-h-[540px] max-h-[760px]"
      />
    </div>

    <div class="max-w-3xl mx-auto border border-[var(--border)] p-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm text-[var(--muted)]">
        <div>
          <p class="text-xs uppercase tracking-widest text-[var(--muted-light)] mb-2">Coordonnées</p>
          <p>Maxime Blanco</p>
          <p>maxime.blanco275@gmail.com</p>
          <p>06 52 48 50 94</p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-widest text-[var(--muted-light)] mb-2">Repères</p>
          <p>Belleville-en-Beaujolais (69220) et Neyron (01700)</p>
          <p>BTS SIO — option SLAM</p>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from '@/components/templates/PageWrapper.vue'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
</script>
