import React, { useState } from 'react'
import SideBarContext from '../contexts/SideBarContext'

function SideBarState(props) {
  const [sidebar, setSidebar] = useState(false)

  return (
    <SideBarContext.Provider value={{sidebar,setSidebar}}>
      {props.children}
    </SideBarContext.Provider>
  )
}

export default SideBarState
