Vue.component('first-sub', {
  template: '#fistSubComponentTemplate',
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    increment: function () {
      this.count++
    }
  }
});