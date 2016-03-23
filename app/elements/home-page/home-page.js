class HomePage {
  beforeRegister() {
    this.is = 'home-page';
    this.properties = {
      selected: {
        type: Number,
        value: 0
      },
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
    // window.clearInterval(_cycleBlocksInterval);
    // var _cycleBlocksInterval = window.setInterval(function () {
    //   this.$.blocks.selectNext();
    // }.bind(this), 8000);
  }

  openVideo() {
    this.$.videoDialog.open();
  }
}

Polymer(HomePage);
