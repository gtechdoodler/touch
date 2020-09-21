const resolveEvent = (ev) => {
  if (ev === 'scroll') {
    console.log(window);
    return 'touchmove' in window ? 'touchmove' : ev;
  }
}

const addDocumentListener = (registeredListeners, events, ev) => {
  ev = resolveEvent(ev);
  console.log('resolved', ev);
  if (!registeredListeners.includes(ev)) {
    registeredListeners.push(ev);
    document.addEventListener(ev, (e) => {
      events.forEach(f => {
        f(e);
      });
    });
  }
}

class Event {
  constructor() {
    this.registeredListeners = [];
    this.events = new Map();
  }

  on(ev, key, func, overrideKey = false) {
    addDocumentListener(this.registeredListeners, this.events, ev);
    if (overrideKey || !this.events.has(key)) {
      this.events.set(key, func);
    }
  }
}

export default new Event();