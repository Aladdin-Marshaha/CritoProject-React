import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import LetIsConnect from '../components/LetIsConnect/LetIsConnect'
import ContactInformation from '../components/ContactInformation/ContactInformation'
import LeaveMessage from '../components/LeaveMessage/LeaveMessage'
import Map from '../components/Map/Map'


const Contacts = () => {
  return (
    <div className='wrapper'>
      <Header />
      <LetIsConnect />
      <ContactInformation />
      <LeaveMessage/>
      <Map />
      <Footer />
  </div>
  )
}

export default Contacts