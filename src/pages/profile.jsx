import React from 'react'
import '../styles/profile.css'
import Header from "../components/navbar";
const profiles = () => {
    return (
        <>
            <Header></Header>
            <div>
                <div class="container">
                    <div class="profile-header">
                        <div class="profile-img">
                            <img src="./bg.jpg" width="200" alt="Profile Image" />
                        </div>
                        <div class="profile-nav-info">
                            <h3 class="user-name">Bright Code</h3>
                            <div class="address">
                                <p id="state" class="state">New York,</p>
                                <span id="country" class="country">USA.</span>
                            </div>

                        </div>

                    </div>

                    <div class="main-bd">
                        <div class="left-side">
                            <div class="profile-side">
                                <h3>Bio</h3>
                                <p class="bio">
                                    Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
                                </p>

                            </div>

                        </div>
                        <div class="right-side">
                            <div class="profile-body">
                                'test'
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default profiles