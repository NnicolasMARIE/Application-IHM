import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom'; 
import StylishSidebar from 'stylish-sidebar';
import CompAteliers from '../components/CompAteliers';
import Footer from '../components/Footer';


const Ateliers = ({pays}) => {
  const [isOpen, setIsOpen] = useState(true); 

  const colorPalette = { 
    bgColor1: '#61729fCC',
    bgColor2: '#61729fCC',
    fontColor: 'white',
    fontColorSelected: '#FF9F31',
    dividerColor: '#61729f',
    selectedBackgroundCollapsedMode: 'light'
  }

  const fonts = { 
    header: 'Poppins',
    menu: 'Poppins'
  }

  const header = { 
    fullName: 'Langact',
    shortName: 'LA'
  }

  const backgroundImage = { 
    url: '',
    showImage: false
  }

  const menuItems = [ 
    { name: 'Accueil', path : '/', icon: './images/house.png', subMenuItems: [] },
    { name: 'Magazines', path : '/magazines', icon: './images/book.png', subMenuItems: [] },
    { name: 'Ateliers', path : '/ateliers', icon: './images/controller.png', subMenuItems: [] },
    { name: 'Outils', path : '/outils', icon: './images/tools.png', subMenuItems: [] }
  ]

  const history = useHistory();

    
  const handleMenuItemClick = index => {
    let nommenu = index.target.innerText
    let srcmenu = index.target.getAttribute("src")
    let index2

    if (nommenu === "Accueil" || srcmenu === "./images/house.png"){
      index2 = 0
    }
    if (nommenu === "Magazines" || srcmenu === "./images/book.png"){
      index2 = 1
    }
    if (nommenu === "Ateliers" || srcmenu === "./images/controller.png"){
      index2 = 2
    }
    if (nommenu === "Outils" || srcmenu === "./images/tools.png"){
      index2 = 3
    }
    history.push(menuItems[index2].path)
  };

  const handleSubMenuItemClick = (menuItemIndex, subMenuItemIndex) => {
    history.push(`${menuItems[menuItemIndex].path}${menuItems[menuItemIndex].subMenuItems[subMenuItemIndex].path}`)
  };

    return (
      // make sure this parent includes 'display: flex' property 
      <div className="container-fluid d-flex paddingbanniere"> 
        <StylishSidebar
          backgroundImage={backgroundImage}
          colorPalette={colorPalette}
          useImageAsHeader={false}
          header={header}
          fonts={fonts}
          menuItems={menuItems}
          widthExpanded={'20%'}
          widthCollapsed={'5%'}
          minWidth={'80px'}
          maxWidth={'280px'}
          isOpen={isOpen}
          showToggler={false}
          onTogglerClick={() => setIsOpen(!isOpen)}
          onHeaderClick={() => history.push('/')}
          onMenuItemClick={handleMenuItemClick}
          onSubMenuItemClick={handleSubMenuItemClick}
        />

        <CompAteliers pays={pays}/>
        
        <Footer />
      </div>
    )
}


export default Ateliers