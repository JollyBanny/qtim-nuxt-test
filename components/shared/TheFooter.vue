<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <span>Is there a project?</span>
      </div>

      <div class="footer__middle">
        <div class="footer__middle--tagline">
          <h1 class="tagline__work">Let's work</h1>
          <h1 class="tagline__together">together</h1>
        </div>

        <div class="footer__middle--contacts">
          <address class="contact">
            <span class="contact--title"> For all questions </span>
            <a href="tel:+79202780068"> +7 (920) 278-00-68 </a>
            <a href="mailto:qtim@agency.com"> qtim@agency.com </a>
          </address>

          <address class="contact">
            <span class="contact--title"> Office in Russia </span>
            <span class="contact--detail"> 139 Ruben Station Lake Drew, NM 52678 </span>
            <IconLocation />
          </address>

          <address class="contact">
            <span class="contact--title"> Office in Dubai </span>
            <span class="contact--detail"> 139 Ruben Station Lake Drew, NM 52678 </span>
            <IconLocation />
          </address>
        </div>
      </div>

      <div class="footer__bottom">
        <ul class="footer__bottom--socials">
          <li class="social">
            <a href="/" target="_blank"> Facebook </a>
          </li>
          <li class="social">
            <a href="/" target="_blank"> Instagram </a>
          </li>
          <li class="social">
            <a href="/" target="_blank"> Telegram </a>
          </li>
        </ul>

        <Button class="footer__bottom--go">
          <span>Go</span>
        </Button>

        <ul class="footer__bottom--socials">
          <li class="social">
            <a href="/" target="_blank"> Behance </a>
          </li>
          <li class="social">
            <a href="/" target="_blank"> LinkedIn </a>
          </li>
          <li class="social">
            <a href="/" target="_blank"> Privacy Policy </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style src="assets/scss/components/footer.scss" lang="scss" scoped />
