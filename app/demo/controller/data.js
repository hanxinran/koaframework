'use strict';

exports.info = {
  repo: async function() {
    await this.proxy('github_api:repos/xiongwilee/koa-grace')
  },
  douban: async function() {
    await this.proxy('https://api.douban.com/v2/book/1220562')
  }
}

exports.session = async function() {
  this.session.test = this.session.test || 0;
  this.session.test++;

  this.body = this.session.test
}
