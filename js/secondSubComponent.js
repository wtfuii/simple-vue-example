Vue.component('second-sub', {
  template: '#secondSubComponentTemplate',
  props: {
    number: Number
  },
  computed: {
    doubledNumber: function () {
      return this.number * 2;
    }
  }
});