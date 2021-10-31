import React from 'react'
import { GiCompass, GiDiamondHard } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'projects',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'To find & showcase creative work and home to the world best project developing students.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Become essential to our tech enthusiasts by providing differentiated projects and services to teach them to achieve their aspired projects.',
  },
  
]

export const products_url = 'https://course-api.com/react-store-products'

// export const products_url = './file.json'
export const single_product_url = `https://course-api.com/react-store-single-product?id=`
