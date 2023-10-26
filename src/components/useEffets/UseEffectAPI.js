import React, { useEffect } from 'react'

const UseEffectAPI = () => {

const getUsers = async () => {
    const responce = fetch('https://api.github.com/users');
    console.log(responce)
}
// use Effect are used to create a by default action
    useEffect(()=> {
        getUsers();
    } )

    return (
        <>
            <h2>list of github users</h2>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>
                    <div className='col-10 col-md-4 mt-5'>
                        <div class="card p-2">
                            <div class="d-flex align-item-center">
                                <div class="image"> <img src="" class="rounded" width="155" /></div>
                                <div class="ml-3 w-100">
                                    <h4 class="mb-0 mt-0 textleft">alina</h4><span className='textleft'>web developer </span>
                                    <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        <div class="d-flex flex-column"> <span class="articles">articles</span><span class="number1">38</span></div>
                                        <div class="d-flex flex-column"> <span class="followers">followers</span><span class="number2">980</span></div>
                                        <div class="d-flex flex-column"> <span class="rating">rating</span><span class="number3">8.9</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UseEffectAPI
