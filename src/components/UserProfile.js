import React from 'react'
import './UserProfile.css'

export const UserProfile = () => {
  return (
    <div>
        <div className='profilepage'>
            <div className='profile_contant'>
                <div className='U Notification'>
                <i class="fa-solid fa-bell"></i>
                </div>
                <div className='U profile_logo'>
                    <div className='profile_img'>
                      {/* <img alt='profile_img'src=""/> */}
                      <i class="fa-regular fa-user"></i>
                    <span>login to to see more</span>
                    </div>
                </div>
                <div className='U user_team'>
                    <div className="t_data Favorites">
                        <span>0</span>
                        <span>Favorites</span>
                    </div>
                    <div className=" t_data fallowing">
                    <span>0</span>
                        <span>Fallowing</span>
                    </div>
                    <div className="t_data Claims">
                    <span>0</span>
                        <span>Claims</span>
                    </div>
                </div>
                <div className=' U user_details user_plan'>
                <i class="fa-regular fa-envelope"></i>
                   <span>My subscription</span>
                   <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div className='U user_details user_info'>
                <i class="fa-regular fa-address-card"></i>
                   <span>Contact Us</span>
                   <i class="fa-solid fa-chevron-right"></i>

                </div>
                <div className='U user_details user_product'>
                <i class="fa-solid fa-clipboard-check"></i>
                   <span>Product Description</span>
                   <i class="fa-solid fa-chevron-right"></i>

                </div>
                <div className='U user_details user_company'>
                <i class="fa-solid fa-store"></i>
                   <span>Company Shop Application</span>
                   <i class="fa-solid fa-chevron-right"></i>

                </div>
                <div className=' U user_details language'>
                <i class="fa-solid fa-globe"></i>
                   <span>Language</span>
                   <i class="fa-solid fa-chevron-right"></i>

                </div>

            </div>

        </div>


    </div>
  )
}
