/**
  @module Pulse 
  @description 
    Timer execution tasks - like a browser cron / heartbeat.
    This allows one global timer for DRY and controlled code 
    This task handler is attached to the global state object, and allows timed execution of things like:
    > long polling apis
    > cleanup tasks
    > logging
    > ++
    
    - todo v2 - performance timer on req anim / timeout epoch / grab react's 100ms timer
 */

export default {

  timer: false,
  count: 0,
  pulse: 1000,

  queue: [
    {id: 1, interval: 5, last: '', exec() { console.log('❤', new Date()) }}
  ],

  /**
   * @method Pulse.add
   * @param {object} obj Object to initialize
   * @example  
      Pulse.add({
        id:2,           // Assign an Id for cancellation
        interval:2,     // Interval in 1000ms epochs / seconds
        exec() { }      // function to run
      });
   */
  add(obj) {
    this.queue.push(obj);
  },

  /**
   * @method Pulse.remove
   * @param {string} id id of job to remove
   * @example 
      // Remove by id (can be integer / string)
      Pulse.remove(2)
   */
  remove(id) {
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].id === id) {
        this.queue.splice(i, 1);
        break;
      }
    }
  },

  /**
   * @method Pulse.start
   * @description Start the Pulse Module (initializer)
   * @example Pulse.start()
   */
  start() {
    const q = this.queue;
    this.timer = setInterval(() => {
      this.count++;
      for (var i = 0; i < q.length; i++) { 
        try { 
          if(this.count % q[i].interval === 0) {
            if(typeof q[i].exec === 'function') { 
              q[i].exec();
              q[i].last = new Date();
            }
          }
        } catch(err) {
          console.log(err) 
        } 
      }
    }, this.pulse);
    this.timer;
  },

  /**
   * @method Pulse.stop
   * @description stop the timer
   * @example Pulse.stop()
   */
  stop() {
    this.timer = false
  }
}