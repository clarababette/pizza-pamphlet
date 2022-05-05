document.addEventListener('alpine:init', () => {
  Alpine.data('pizza', () => ({
    small: 0,
    medium: 0,
    large: 0,
    smallPrice: 48.99,
    mediumPrice: 78.99,
    largePrice: 114.99,
    set add(size) {
      this[size]++;
    },
    set remove(size) {
      this[size]--;
    },
    get smallTotal() {
      return (this.small * this.smallPrice)
    },
    get mediumTotal() {
      return (this.medium * this.mediumPrice)
    },
    get largeTotal() {
      return (this.large * this.largePrice)
    },
    get total() {
      return this.largeTotal + this.mediumTotal + this.smallTotal;
    },
    checkout: false,
    paid: '',
    get change() {
     return parseFloat(this.paid) - this.total
    },
    reset() {
      this.small = 0;
      this.medium = 0;
      this.large = 0;
      this.checkout = false;
      this.paid = '';
    }
  }));
});
