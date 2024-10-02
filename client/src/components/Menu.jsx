import React from 'react'
import { Link, } from "react-router-dom";

import  understandmicrobiome from '../img/UnderstandingVaginalMicrobiome.png'
import  understandtest from '../img/understandtest.png'
import  howtotakemicrobimetest from '../img/howtotakemicrobimetest.png'
import  goodbadmicrobiome from '../img/goodbadmicrobiome.png'
import  whatismyriti from '../img/whatismyriti.png'

const Menu = () => {
	const posts = 
		[
			{
				id: 1,
				title: "Understanding Vaginal Microbiome",
				description: "Learn about the importance of a healthy vaginal microbiome and how it affects women's overall health.",
				image: understandmicrobiome
			},
			{
				id: 2,
				title: "What is My Riti?",
				description: "Discover how My Riti helps women maintain a balanced vaginal microbiome through personalized tests.",
				image: whatismyriti
			},
			{
				id: 3,
				title: "How to Take a Vaginal Microbiome Test",
				description: "Step-by-step guide on how to use the My Riti testing kit for accurate results.",
				image:  howtotakemicrobimetest
			},
			{
				id: 4,
				title: "Understanding Test Results",
				description: "A comprehensive guide to interpreting your vaginal microbiome test results from My Riti.",
				image:  understandtest 
			},
			{
				id: 5,
				title: "Microbiome and Women's Health",
				description: "Explore how the microbiome impacts everything from menstrual health to fertility and how My Riti can help.",
				image:  goodbadmicrobiome 
			}

		];
	return (
	<div className='menu'> 
        <h1> Other important information</h1>
	{posts.map(post=>(
                                <div className='post' key={post.id}> 
                                        <img src={post.image} alt=""/>
                                        <h2>{post.title}</h2>
                                        <button> Read More</button>
                                </div>
	))}
	</div>

	)
}

export default Menu 
