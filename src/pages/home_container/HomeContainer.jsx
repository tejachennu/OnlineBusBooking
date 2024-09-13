import React from 'react'
import Hero from './hero/Hero'
import Search from '../search/Search'
import Category from './category/Category'

const HomeContainer = () => {
  return (
    <>
       {/* Hero section and homec related */}

       <Hero/>
       <Search/>
       <Category/>
    </>
  )
}

export default HomeContainer