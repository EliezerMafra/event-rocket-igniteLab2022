import { useEffect, useState } from 'react'
import { client } from './lib/apollo'
import { gql, useQuery } from "@apollo/client";
import { Event } from './pages/Event';



function App() {

  return (
    <div>
      <Event/>
    </div>
  )
}

export default App
