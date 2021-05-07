const app = Vue.createApp({
  data: () => ({
    steps: [
      {
        id: 'Personal',
        title: 'Личные данные'
      },
      {
        id: 'Address',
        title: 'Адрес'
      },
      {
        id: 'Payment',
        title: 'Методы оплаты'
      },
      {
        id: 'Settings',
        title: 'Настройки'
      }
    ],
    activeStep: 'Personal',
    activeIdx: 0,
    isFinish: false
  }),
  methods: {
    prev() {
      if (this.activeIdx !== 0) {
        this.activeIdx--
        this.activeStep = this.steps[this.activeIdx].id
      }
    },
    setActive(idx) {
      this.activeIdx = idx
      this.activeStep = this.steps[this.activeIdx].id
    },
    submit() {
      if (this.activeIdx < this.steps.length - 1) {
        this.activeIdx++
        this.activeStep = this.steps[this.activeIdx].id
      }
      else {
        // final step
      }
    }
  },
  computed: {
    isFinished() {
      return this.activeIdx === this.steps.length - 1
    },
    prevDisabled() {
      return this.activeIdx === 0
    }
  }
})

app.mount('#app')
