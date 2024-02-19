"use client"

import React, { useEffect, useState } from 'react'

export default function TheftNews() {

	const [news, setNews] = useState([]);
	
	useEffect(()=>{

		const apiKey = "c1f424dc62ac4652259d8a00411a2908"
		const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apiKey}`;


		const fetchApi = async () => {
			try {
				const response = await fetch(url);
				const articles = response;
				console.log(articles);
			} catch (error) {
				console.error(error);
			}
		}

		fetchApi()
		
	},[])
  
  return (
	<div>TheftNews</div>
  )
}
