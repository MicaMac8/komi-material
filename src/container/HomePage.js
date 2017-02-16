import React, { Component } from 'react'

import Header from '../presentation/Header'
import HomeContent from '../presentation/HomeContent'
import BigButton from '../presentation/BigButton'



export default class App extends Component {
  render () {
    return (
      <main>
        <Header title='Komi' description="de vos recettes à votre liste de course en un clin d'œuil"/>
        <BigButton label="Créez votre première recette" />
        <HomeContent />
      </main>
    )
  }
}
