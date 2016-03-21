class HomePage {
  beforeRegister() {
    this.is = 'home-page';
    this.properties = {
      selected: {
        type: Number,
        value: 0
      }
    };
  }

  ready() {
    window.clearInterval(_cycleBlocksInterval);
    var _cycleBlocksInterval = window.setInterval(function () {
      this.$.blocks.selectNext();
    }.bind(this), 8000);
  }
}

Polymer(HomePage);
