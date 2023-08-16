function dblCLick (handler) {
  this.clicks = 0

  this.increment = () => {
    this.clicks++
    setTimeout(() => {
      this.clicks = 0
    }, 666)
  }

  return (e) =>{
    if (this.clicks > 0) {
      this.clicks = 0
      handler (e) 
    } else {
      this.increment()	
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('dbl-click', {
    mounted(el, binding) {
      el.addEventListener('click', (new dblCLick(binding.value)))
    },
  })

  return {
    provide: {
      dblCLick,
    },
  }
})
