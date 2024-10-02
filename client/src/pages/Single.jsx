import React from 'react'
import  understandmicrobiome from '../img/UnderstandingVaginalMicrobiome.png'
import {Link} from 'react-router-dom'
import Logo from '../img/myriti.png'
import Delete from '../img/delete.png'
import Edit from '../img/edit.png'
import Menu from '../components/Menu.jsx'
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
                                <div className="edit">
                                        <Link to={`/write?edit=2`} >
                                                <img src={Edit} alt="" />
                                        </Link>
                                        <img src={Delete} alt="" />
                                </div>
                                <div>
                                        <h1> Understanding Vaginal Microbiome</h1>
                                        <p>The vaginal microbiome is a complex ecosystem of microorganisms that reside in the vagina. It plays a crucial role in maintaining vaginal health and preventing infections. A healthy vaginal microbiome is dominated by lactobacilli, which produce lactic acid, creating an acidic environment that helps to prevent the growth of harmful bacteria. However, imbalances in the vaginal microbiome, such as overgrowth of Gardnerella vaginalis or Candida species, can lead to infections like bacterial vaginosis or vulvovaginal candidiasis. Factors like antibiotics, hormonal changes, and douching can disrupt the balance of the vaginal microbiome, increasing the risk of infections. Understanding the vaginal microbiome is important for maintaining reproductive health and preventing gynecological issues</p>
                                </div>
                        </div>
                        <Menu/>
                </div>
        )
}

export default Single
