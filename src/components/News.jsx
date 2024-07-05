/* eslint-disable @next/next/no-img-element */
"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const News = () => {
    const [news, setNews] = useState([])
    const [articleNum, setArticleNum] = useState(3)

    useEffect(() => {
        fetch(`https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json`)
            .then(res => res.json()).then(data => setNews(data.articles))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2'>

            <h4 className='font-bold text-xl px-4'>Whats Happening</h4>

            {news.slice(0, articleNum).map((article) => (
                <div key={article.url}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">

                        <div className='flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition-all duration-200'>

                            <div className='space-y-0.5'>
                                <h6 className='font-bold text-sm'>{article.title}</h6>
                                <p className='text-xs font-medium text-gray-500'>{article.source.name}</p>
                            </div>

                            <img width={70} height={70} src={article.urlToImage} alt='image' className='rounded-xl' />
                        </div>
                    </a>
                </div>
            ))}
            <button className=' text-blue-300 hover:text-blue-400 font-sm pl-4 pb-3'
                onClick={() => setArticleNum(articleNum + 3)}>See More
            </button>
        </div>
    )
}

export default News
