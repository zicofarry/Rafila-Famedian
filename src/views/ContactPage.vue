<template>
  <div class="contact page-container">
    <div class="contact__info">
      <div class="contact__item">Bandung, Indonesia</div>
      <a href="https://instagram.com/rbfamedian" target="_blank" class="contact__item contact__item--link">
        <span class="contact__label">(IG)</span> @rbfamedian
      </a>
      <a href="https://behance.net/rafilafamedian1" target="_blank" class="contact__item contact__item--link">
        <span class="contact__label">(Bē)</span> Rafila Famedian
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
        acknowledging every individual involved in this creative process. thank you for navigating
        through this archive. open for inquiries, collaborative systems, or perspective sharing.
        available via the links above.
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
  transition: color var(--transition-fast);
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='10' fill='none' stroke='%23ff48ee' stroke-width='2'/%3E%3C/svg%3E") 12 12, pointer;
}

.contact__item--link:hover {
  color: var(--color-pink);
}

.contact__label {
  color: inherit;
}

.contact__footer {
  margin-top: 40px;
  padding-left: calc(50vw - var(--content-offset));
  max-width: 980px;
}

.contact__footer-text {
  font-size: var(--font-size-sm);
  color: var(--color-black);
  line-height: 1.3;
}

@media (max-width: 768px) {
  .contact {
    padding-top: 30px;
  }
  
  .contact__info {
    padding-left: 0;
    gap: 15px;
  }
  
  .contact__item {
    font-size: var(--font-size-lg);
  }
  
  .contact__footer {
    padding-left: 0;
    margin-top: 50px;
  }
}
</style>
