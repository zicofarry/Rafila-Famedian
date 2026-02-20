<template>
  <div class="contact page-container">
    <div class="contact__info">
      <div class="contact__item">Bandung, Indonesia</div>
      <a href="https://instagram.com/rbfamedian" target="_blank" class="contact__item contact__item--link">
        <span class="contact__label">(IG)</span> @rbfamedian
      </a>
      <a href="https://behance.net/rafilafamedian1" target="_blank" class="contact__item contact__item--link">
        <span class="contact__label">(Be)</span> Rafila Famedian
      </a>
      <a href="https://wa.me/+6289517965909" target="_blank" class="contact__item contact__item--link">
        <span class="contact__label">(TL)</span> +62 895-1796-5909
      </a>
      <a href="mailto:rafilafamedian99@gmail.com" class="contact__item contact__item--link">
        <span class="contact__label">(EM)</span> rafilafamedian99@gmail.com
      </a>
    </div>

    <div class="contact__footer">
      <p class="contact__footer-text">
        acknowledging every individual involved in this creative process. thank
        you for viewing. i'm always open to hearing new ideas or simply sharing
        perspectives. let's get in touch!
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.contact {
  padding-top: calc(var(--nav-height) + 80px);
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: calc(50vw - var(--content-offset));
}

.contact__item {
  font-size: var(--font-size-xl);
  font-weight: 450;
  color: var(--color-black);
  line-height: 1.5;
  display: block;
}

.contact__item--link {
  transition: opacity var(--transition-fast);
}

.contact__item--link:hover {
  opacity: 0.6;
}

.contact__label {
  color: var(--color-black);
}

.contact__footer {
  margin-top: 100px;
  padding-left: calc(50vw - var(--content-offset));
  max-width: 1000px;
}

.contact__footer-text {
  font-size: var(--font-size-base);
  color: var(--color-black);
  line-height: 1.7;
}
</style>
