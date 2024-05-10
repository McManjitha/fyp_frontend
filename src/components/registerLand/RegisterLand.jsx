import React from 'react'
import Navbar from '../home/Navbar'
import { navLinks } from '../../constants'
import InfoForm from './InfoForm'

export default function RegisterLand() {
  return (
    <div>
      <Navbar navLinks={navLinks['/explore']} />
      <InfoForm/>
    </div>
  )
}
