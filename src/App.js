import React, {useState} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Magazines from './pages/Magazines';
import Ateliers from './pages/Ateliers';
import Outils from './pages/Outils';
import Crossword from './components/Jeux/Crossword/Crossword';
import Pendu from './components/Jeux/Pendu/Pendu';


const App = () => {

  const [pays, setPays] = useState("")

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Accueil pays = {pays} setPays = {setPays}/>
        </Route>
        <Route exact path="/ateliers" >
          <Ateliers pays = {pays}/>
        </Route>
        <Route exact path="/magazines" >
          <Magazines pays = {pays}/>
        </Route>
        <Route exact path="/outils" >
          <Outils pays = {pays}/>
        </Route>
        <Route exact path="/pendu" >
          <Pendu pays={pays}/>
        </Route>
        <Route exact path="/crossword" >
          <Crossword pays={pays}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App