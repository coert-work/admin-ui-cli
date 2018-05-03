export default {

  logo: '/images/logo.svg',

  links: [

    // DASHBOARD
    {
      title: 'Dashboard',
      icon: 'home',
      link: '/'
    },
    {
      title: 'Orders',
      icon: 'home',
      link: '/orders'
    },

    {
      title: 'Items',
      icon: 'tags',
      menu: [
        {
          title: 'Add an Item',
          link: '/add',
        },
        {
          title: 'List items',
          link: '/list',
        },
      ]
    }
  ]
}