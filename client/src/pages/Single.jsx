import React from 'react'
import  understandmicrobiome from '../img/UnderstandingVaginalMicrobiome.png'
import {Link} from 'react-router-dom'
import Logo from '../img/myriti.png'
import Delete from '../img/delete.png'
import Edit from '../img/edit.png'

const Single = () => {
        return (
                <div className='single'>
                        <div className='content'>
                                <div className='img'>
                                        <img src={understandmicrobiome} alt=""/>
                                </div>
                                <div className="user">
                                        <img src={Logo} alt=""/>
                                </div>
                                <div className="info">
                                        <span>Jhon</span>
                                        <p>posted 2 days ago</p>
                                </div>
                        </div>
                        <div className="edit">
                                <Link to={`/write?edit=2`} >
                                        <img src={Edit} alt="" />
                                </Link>
                                <img src={Delete} alt="" />
                        </div>

                </div>
        )
}

export default Single
