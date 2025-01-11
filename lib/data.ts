const data = {
    headerMenus: [
      {
        name: "Today's Deal",
        href: '/search?tag=todays-deal',
      },
      {
        name: 'New Arrivals',
        href: '/search?tag=new-arrival',
      },
      {
        name: 'Featured Products',
        href: '/search?tag=featured',
      },
      {
        name: 'Best Sellers',
        href: '/search?tag=best-seller',
      },
      {
        name: 'Browsing History',
        href: '/#browsing-history',
      },
      {
        name: 'Customer Service',
        href: '/page/customer-service',
      },
      {
        name: 'About Us',
        href: '/page/about-us',
      },
      {
        name: 'Help',
        href: '/page/help',
      },
    ],
    carousels: [
        {
          title: 'Most Popular Beverages For Sale',
          buttonCaption: 'Shop Now',
          image: '/images/banner3.jpg',
          url: '/search?category=Beverages',
          isPublished: true,
        },
        {
          title: 'Best Quality Products',
          buttonCaption: 'Shop Now',
          image: '/images/banner1.jpg',
          url: '/search?category=Products',
          isPublished: true,
        },
        {
          title: 'Best Snacks to Enjoy With Your Family',
          buttonCaption: 'See More',
          image: '/images/banner2.jpg',
          url: '/search?category=Snacks',
          isPublished: true,
        },
    ],
}    

export default data