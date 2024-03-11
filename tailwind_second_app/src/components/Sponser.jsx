import React from 'react'
import Image from './miniComponent/Image'

const Sponser = () => {
  return (
    <div className='flex justify-around items-center mx-[155px] my-3 pt-10 mt-8' >
        <Image Title="Airbnb" URL="https://cdn1.iconfinder.com/data/icons/brands-4/512/fi-brands-airbnb-64.png" />
        <Image Title="Google " URL='https://cdn4.iconfinder.com/data/icons/picons-social/57/09-google-3-64.png' />
        <Image Title="Microsoft" URL="https://cdn2.iconfinder.com/data/icons/css-vol-2/24/microsoft-64.png" />
        <Image Title="Spotify" URL='https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/spotify-fill-64.png' />
        <Image Title="Mailchimp" URL='https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-mailchimp-64.png' />
        <Image Title="Mashable" URL="https://cdn0.iconfinder.com/data/icons/shopping-and-e-commerce-86/60/mashal__torch__fire__flame__light-64.png" />
    </div>
  )
}

export default Sponser