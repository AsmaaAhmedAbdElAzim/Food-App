import React from 'react'
import Header from '../../../Shard Module/Components/Header/Header'
import headerImg from '../../../../img/eating vegan food-rafiki.png'
import RecipesFill from '../../../Shard Module/Components/RecipesFill/RecipesFill'

export default function Dashboard() {
  return (<>
  <Header 
  title1={'Welcome'} 
  title2={'Upskilling'} 
  discripation={'This is a welcoming screen for the entry of the application , you can now see the options'} 
  ImgUrl={headerImg}/>
 <RecipesFill/>
  </>
   
  )
}
