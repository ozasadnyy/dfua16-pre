class HomePage {
  beforeRegister() {
    this.is = 'home-page';
    this.properties = {
      selected: Number,
      video: {
        type: Object,
        value: {
          youtubeId: 'DfMnJAzOFng'
        }
      },
      mailchimp: {
        type: Object,
        value: {
          name: 'b_b7e853a79164ddfdbda3ed77b_7993e39fbe',
          url: 'https://gdg.us11.list-manage.com/subscribe/post?u=b7e853a79164ddfdbda3ed77b&amp;id=7993e39fbe'
        }
      }
    };
  }

  ready() {
    this.selected = 0;
    window.clearInterval(_cycleBlocksInterval);
    var _cycleBlocksInterval = window.setInterval(function () {
      this.$.blocks.selectNext();
    }.bind(this), 4000);
  }

  openVideoDialog() {
    this.$.videoDialog.open();
  }

  openSubscribeDialog() {
    this.$.subscribeDialog.open();
  }
}

Polymer(HomePage);
