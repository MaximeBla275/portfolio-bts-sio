<template>
  <PageWrapper>
    <SectionHeader label="Restons en contact" title="Me contacter" accent-word="contacter" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
      <ContactForm />

      <div class="space-y-10">
        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-5">Contact direct</p>
          <div class="space-y-3">
            <ContactLink href="mailto:maxime.blanco275@gmail.com" emoji="📧" label="Email"    value="maxime.blanco275@gmail.com" />
            <ContactLink href="https://github.com/MaximeBla275"   emoji="🐙" label="GitHub"   value="github.com/MaximeBla275"                    :external="true" />
            <ContactLink href="https://www.linkedin.com/in/maxime-blanco-ab24a9328" emoji="💼" label="LinkedIn" value="linkedin.com/in/maxime-blanco-ab24a9328" :external="true" />
          </div>
        </div>

        <div class="border border-[var(--border)] p-6">
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">Télécharger mon CV</p>
          <p class="font-mono text-xs text-[var(--muted)] mb-4 leading-relaxed">
            CV au format PDF — Maxime Blanco, BTS SIO SLAM, Lycée Lamartine Mâcon.
          </p>
          <BaseButton tag="a" href="/rapports/CV_Maxime_Blanco.pdf" download="CV_Maxime_Blanco.pdf">
            📄 Télécharger CV
          </BaseButton>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper   from '@/components/templates/PageWrapper.vue'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import ContactForm   from '@/components/organisms/ContactForm.vue'
import ContactLink   from '@/components/molecules/ContactLink.vue'
import BaseButton    from '@/components/atoms/BaseButton.vue'
</script>
