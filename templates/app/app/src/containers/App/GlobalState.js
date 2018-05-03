// acquire width on load
const width = window.innerWidth;
const device = (width >= 1920) ? 'wide' : (width >= 1280 && width < 1920) ? 'large' : (width >= 992 && width < 1280) ? 'computer' : (width >= 768 && width < 992) ? 'tablet' : 'mobile';
const sidebar = (window.innerWidth / 16) * 3 - 12;

export default {

  // Global config
  global: {
    animationIn: 'fadeIn',
    width: window.innerWidth,
    height: window.innerHeight,
    device,
    sidebar
  },

  // User info
  user: {
    name: 'Tim',
    id: 1,
    active: 234,
    total: 456
  },

  // NavBar
  nav: {
    title: `Takealot admin UI`,
    icon: 'home'
  },

  // Banner alerts
  alert: {
    text: 'alert',
    bg: 'red',
    visible: false,
    timeout: 3,
    action() { console.log('no alert action set') }
  }
}