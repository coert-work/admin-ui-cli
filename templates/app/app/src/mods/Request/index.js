
export default {

  mode: (document.location.href.match(/localhost/))
    ? 'dev'
    : (document.location.href.match(/takealot.com/))
      ? 'production'
      : 'staging',

  domain: {
    // Dev API is CORS proxied via CLI @ localhost:8001
    dev:  'http://localhost:8001/http://TODO',
    staging: process.env.STAGING_API || 'https://TODO',
    production: process.env.PROD_API || ''
  },

  setHeaders() {
    return {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },

  /**
   * @method GET
   * @description Make a GET request
   * @param {string} url
   * @param {function} cb callback
   * @returns {object}
   */
  get(url, cb) {

    const start = new Date();
    const headers = this.setHeaders();
    const elapsed = this.elapsedTime;
    
    const config = {
      headers: this.setHeaders(),
      mode: 'cors',
      method: 'GET'
    };

    // Make request
    return fetch(this.domain[this.mode] + url, config)
      .then(this.process)
      .then(this.check200)
      .then(res => {
        console.log(`GET :: ${url}`, elapsed(start), res);
        cb(res);
      })
  },

  /**
   * @method POST
   * @description Make a POST/PUT/DELETE request
   * @param {string} url
   * @param {object} data
   * @param {string} method defaults to POST
   * @returns {object}
   */
  post(url, data, cb, method = 'POST') {

    const start = new Date();
    const elapsed = this.elapsedTime;
    const headers = this.setHeaders();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';

    return fetch(this.domain[this.mode] + url, {
      headers,
      mode: 'cors',
      method,
      body: JSON.stringify(data)
    })
      .then(this.process)
      .then(this.check200)
      .then(res => {
        console.log(`[POST :: ${url}`, `${elapsed(start)}s`, res);
        cb(res);
      })
  },

  check200(response) {
    if (response.status === 200) {
      return response.data
    } else { 
      console.log('!! [ REQ FAIL ] ::', response.data )
      return false
    }
  },

  process(response) {
    return new Promise((resolve, reject) => {
      // resolve all to get error messages from error response
      response.json().then(data => resolve({ 'status': response.status, 'data': data }));
    });
  },

  elapsedTime(start) {
    return (new Date().getTime() - start.getTime()) / 1000;
  }
}
