export default cb => {
  window.addEventListener('resize', e => {
    /**
     * Semantic-UI-react breakpoints
     * =============================
      @mobileBreakpoint            : 320px;
      @tabletBreakpoint            : 768px;
      @computerBreakpoint          : 992px;
      @largeMonitorBreakpoint      : 1280px;
      @widescreenMonitorBreakpoint : 1920px;
    */
    const width = window.innerWidth;
    cb({
      global: {
        width: width,
        height: window.innerHeight,
        device: (width >= 1920) ? 'wide' : (width >= 1280 && width < 1920) ? 'large' : (width >= 992 && width < 1280) ? 'computer' : (width >= 768 && width < 992) ? 'tablet' : 'mobile',
        sidebar: (window.innerWidth / 16) * 3 - 12
      }
    })
  });

  // Console handlers
  (document.location.href.match(/localhost/)) ? console.log("Welcome!") : console.log = console.warn = console.error = () => {};
}