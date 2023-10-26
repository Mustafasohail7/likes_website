import { AiOutlineInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { BsDiscord, BsSnapchat } from 'react-icons/bs'
import { BiLogoTelegram, BiLogoTwitch, BiLogoTiktok, BiLogoSpotify } from 'react-icons/bi'

const services = [
    {id: 0, name:'instagram', icon: <AiOutlineInstagram className='instagram-icon'/>, color: '#E4405F',
    services: [
        {
            id: 0, name: 'followers', amount: [
                {id: 0, amount: 300, cost: 5},
                {id: 1, amount: 500, cost: 7},
                {id: 2, amount: 1500, cost: 15},
                {id: 3, amount: 5000, cost: 25},
                {id: 4, amount: 10000, cost: 40},
            ]
        },
        {
            id: 1, name:'likes', amount: [
                {id: 0, amount: 1000, cost: 3},
                {id: 1, amount: 5000, cost: 7},
                {id: 2, amount: 10000, cost: 12},
                {id: 3, amount: 25000, cost: 20},
                {id: 4, amount: 50000, cost: 35},
                {id: 5, amount: 100000, cost: 65}
            ]
        },
        {
            id: 2, name: 'reels views', amount: [
              { id: 0, amount: 500, cost: 5 },
              { id: 1, amount: 1000, cost: 8 },
              { id: 2, amount: 2000, cost: 15 },
              { id: 3, amount: 5000, cost: 25 },
              { id: 4, amount: 15000, cost: 35 },
              { id: 5, amount: 30000, cost: 50 },
              { id: 6, amount: 50000, cost: 58 },
              { id: 7, amount: 100000, cost: 98 }
            ]
        },
        {
            id: 3, name: 'story views', amount: [
              { id: 0, amount: 500, cost: 2 },
              { id: 1, amount: 1000, cost: 3.5 },
              { id: 2, amount: 2500, cost: 7.5 },
              { id: 3, amount: 5000, cost: 14 },
              { id: 4, amount: 10000, cost: 25 },
              { id: 5, amount: 25000, cost: 50 },
              { id: 6, amount: 50000, cost: 75 },
              { id: 7, amount: 100000, cost: 125 },
              { id: 8, amount: 250000, cost: 250 }
            ]
        },
        {
            id: 4, name: 'comments', amount: [
              { id: 0, amount: 10, cost: 5 },
              { id: 1, amount: 25, cost: 7 },
              { id: 2, amount: 50, cost: 12 },
              { id: 3, amount: 100, cost: 23 },
              { id: 4, amount: 150, cost: 25 },
              { id: 5, amount: 250, cost: 40 },
              { id: 6, amount: 500, cost: 60 },
              { id: 7, amount: 750, cost: 75 },
              { id: 8, amount: 1000, cost: 120 }
            ]
        }
          
    ]},
    {id: 1, name:'facebook', icon: <AiFillFacebook color='#1877F2'/>, color: '#1877F2', 
    services: [
        {
            id: 0, name: 'followers', amount: [
              { id: 0, amount: 100, cost: 5 },
              { id: 1, amount: 250, cost: 12 },
              { id: 2, amount: 500, cost: 14 },
              { id: 3, amount: 1000, cost: 19 },
              { id: 4, amount: 2500, cost: 35 },
              { id: 5, amount: 5000, cost: 67 },
              { id: 6, amount: 10000, cost: 130 },
              { id: 7, amount: 20000, cost: 160 },
              { id: 8, amount: 25000, cost: 230 },
              { id: 9, amount: 50000, cost: 380 }
            ]
        },
        {
            id: 1, name: 'post likes', amount: [
              { id: 0, amount: 100, cost: 3 },
              { id: 1, amount: 250, cost: 6.5 },
              { id: 2, amount: 500, cost: 10 },
              { id: 3, amount: 1000, cost: 15 },
              { id: 4, amount: 2500, cost: 30 },
              { id: 5, amount: 5000, cost: 57 },
              { id: 6, amount: 10000, cost: 106 },
              { id: 7, amount: 20000, cost: 180 },
              { id: 8, amount: 50000, cost: 250 }
            ]
        },
        {
            id: 2, name: 'comments', amount: [
              { id: 0, amount: 10, cost: 5 },
              { id: 1, amount: 15, cost: 6 },
              { id: 2, amount: 25, cost: 9 },
              { id: 3, amount: 50, cost: 14 },
              { id: 4, amount: 75, cost: 18 }
            ]
        }  
    ] },
    {id: 2, name:'youtube', icon: <AiFillYoutube color='#FF0000'/>, color: '#FF0000',
    services: [
        {
            id: 0, name: 'subscribers', amount: [
              { id: 0, amount: 100, cost: 14 },
              { id: 1, amount: 200, cost: 23 },
              { id: 2, amount: 400, cost: 27 },
              { id: 3, amount: 600, cost: 39 },
              { id: 4, amount: 1000, cost: 65 },
              { id: 5, amount: 1500, cost: 99 },
              { id: 6, amount: 2000, cost: 120 },
              { id: 7, amount: 2500, cost: 160 },
              { id: 8, amount: 5000, cost: 180 },
              { id: 9, amount: 10000, cost: 300 },
              { id: 10, amount: 25000, cost: 430 }
            ]
        },
        {
            id: 1, name: 'watch time hours', amount: [
              { id: 0, amount: 100, cost: 18 },
              { id: 1, amount: 250, cost: 37 },
              { id: 2, amount: 500, cost: 68 },
              { id: 3, amount: 1000, cost: 120 },
              { id: 4, amount: 1500, cost: 177 },
              { id: 5, amount: 2000, cost: 210 },
              { id: 6, amount: 2500, cost: 270 },
              { id: 7, amount: 5000, cost: 430 }
            ]
        },
        {
            id: 2, name: 'views', amount: [
              { id: 0, amount: 250, cost: 4 },
              { id: 1, amount: 500, cost: 6 },
              { id: 2, amount: 1000, cost: 8 },
              { id: 3, amount: 2500, cost: 15 },
              { id: 4, amount: 5000, cost: 28 },
              { id: 5, amount: 10000, cost: 56 },
              { id: 6, amount: 25000, cost: 135 },
              { id: 7, amount: 50000, cost: 250 },
              { id: 8, amount: 100000, cost: 400 }
            ]
        },
        {
            id: 3, name: 'likes', amount: [
              { id: 0, amount: 100, cost: 4 },
              { id: 1, amount: 250, cost: 8 },
              { id: 2, amount: 500, cost: 14 },
              { id: 3, amount: 1000, cost: 25 },
              { id: 4, amount: 2000, cost: 45 },
              { id: 5, amount: 5000, cost: 110 },
              { id: 6, amount: 10000, cost: 240 },
              { id: 7, amount: 15000, cost: 320 }
            ]
        },
        {
            id: 4, name: 'dislikes', amount: [
              { id: 0, amount: 100, cost: 4 },
              { id: 1, amount: 250, cost: 8 },
              { id: 2, amount: 500, cost: 14 },
              { id: 3, amount: 1000, cost: 25 },
              { id: 4, amount: 2000, cost: 45 },
              { id: 5, amount: 5000, cost: 110 },
              { id: 6, amount: 10000, cost: 240 },
              { id: 7, amount: 15000, cost: 320 }
            ]
        }  
    ] },
    {id: 3, name:'discord', icon: <BsDiscord color='#7289DA'/>, color: '#7289DA',
    services: [
        {
            id: 0, name: 'members', amount: [
              { id: 0, amount: 100, cost: 23 },
              { id: 1, amount: 250, cost: 40 },
              { id: 2, amount: 500, cost: 70 },
              { id: 3, amount: 1000, cost: 147 },
              { id: 4, amount: 2000, cost: 270 },
              { id: 5, amount: 5000, cost: 400 },
              { id: 6, amount: 10000, cost: 720 },
              { id: 7, amount: 15000, cost: 1100 }
            ]
        },
        {
            id: 1, name: 'friendship request', amount: [
              { id: 0, amount: 500, cost: 32 },
              { id: 1, amount: 1000, cost: 56 },
              { id: 2, amount: 2500, cost: 110 },
              { id: 3, amount: 5000, cost: 210 }
            ]
        }  
    ] },
    {id: 4, name:'telegram', icon: <BiLogoTelegram color='#0088cc'/>, color: '#0088cc',
    services: [
        {
            id: 0, name: 'members', amount: [
              { id: 0, amount: 250, cost: 2.5 },
              { id: 1, amount: 500, cost: 4.5 },
              { id: 2, amount: 1000, cost: 7.5 },
              { id: 3, amount: 2500, cost: 15.5 },
              { id: 4, amount: 5000, cost: 29 },
              { id: 5, amount: 7500, cost: 35 },
              { id: 6, amount: 10000, cost: 43 },
              { id: 7, amount: 15000, cost: 54 },
              { id: 8, amount: 20000, cost: 64 }
            ]
        }  
    ] },
    {id: 5, name:'twitch', icon: <BiLogoTwitch color='#9146FF'/>, color: '#9146FF',
    services: [
        {
            id: 0, name: 'followers', amount: [
              { id: 0, amount: 100, cost: 4 },
              { id: 1, amount: 250, cost: 6 },
              { id: 2, amount: 500, cost: 8 },
              { id: 3, amount: 1000, cost: 15 },
              { id: 4, amount: 2500, cost: 28 },
              { id: 5, amount: 5000, cost: 45 },
              { id: 6, amount: 7500, cost: 65 },
              { id: 7, amount: 10000, cost: 85 },
              { id: 8, amount: 15000, cost: 120 }
            ]
        },
        {
            id: 1, name: 'video views', amount: [
              { id: 0, amount: 500, cost: 3 },
              { id: 1, amount: 1000, cost: 7 },
              { id: 2, amount: 2500, cost: 13 },
              { id: 3, amount: 5000, cost: 23 },
              { id: 4, amount: 10000, cost: 45 },
              { id: 5, amount: 25000, cost: 80 },
              { id: 6, amount: 50000, cost: 140 }
            ]
        },
        {
            id: 2, name: 'twitch live', amount: [
              { id: 0, amount: 50, cost: 5 },
              { id: 1, amount: 100, cost: 10 },
              { id: 2, amount: 250, cost: 19 },
              { id: 3, amount: 500, cost: 36 },
              { id: 4, amount: 1000, cost: 57 },
              { id: 5, amount: 2500, cost: 100 }
            ]
        }  
    ] },
    {id: 6, name:'snapchat', icon: <BsSnapchat color='#FFFC00'/>, color: '#FFFC00',
    services: [
        {
            id: 0, name: 'followers', amount: [
              { id: 0, amount: 50, cost: 10 },
              { id: 1, amount: 100, cost: 19 },
              { id: 2, amount: 250, cost: 38 },
              { id: 3, amount: 500, cost: 70 }
            ]
        },
        {
            id: 1, name: 'views', amount: [
              { id: 0, amount: 100, cost: 20 },
              { id: 1, amount: 250, cost: 38 },
              { id: 2, amount: 500, cost: 70 },
              { id: 3, amount: 1000, cost: 120 }
            ]
        } 
    ] },
    {id: 7, name:'tiktok', icon: <BiLogoTiktok/>, color: '#FFFFFF',
    services: [
        {
            id: 0, name: 'followers', amount: [
              { id: 0, amount: 100, cost: 3 },
              { id: 1, amount: 250, cost: 5 },
              { id: 2, amount: 500, cost: 10 },
              { id: 3, amount: 1000, cost: 18 },
              { id: 4, amount: 2500, cost: 35 },
              { id: 5, amount: 5000, cost: 60 },
              { id: 6, amount: 10000, cost: 100 },
              { id: 7, amount: 25000, cost: 130 },
              { id: 8, amount: 50000, cost: 200 },
              { id: 9, amount: 100000, cost: 370 }
            ]
        },
        {
            id: 1, name: 'live views', amount: [
              { id: 0, amount: 250, cost: 10 },
              { id: 1, amount: 500, cost: 19 },
              { id: 2, amount: 1000, cost: 35 },
              { id: 3, amount: 2500, cost: 70 },
              { id: 4, amount: 5000, cost: 85 }
            ]
        },
        {
            id: 2, name: 'likes', amount: [
              { id: 0, amount: 100, cost: 1 },
              { id: 1, amount: 250, cost: 2 },
              { id: 2, amount: 500, cost: 5 },
              { id: 3, amount: 1000, cost: 9 },
              { id: 4, amount: 2500, cost: 18 },
              { id: 5, amount: 5000, cost: 39 },
              { id: 6, amount: 10000, cost: 70 },
              { id: 7, amount: 25000, cost: 110 },
              { id: 8, amount: 50000, cost: 150 },
              { id: 9, amount: 100000, cost: 200 }
            ]
        },
        {
            id: 3, name: 'comments', amount: [
              { id: 0, amount: 5, cost: 2 },
              { id: 1, amount: 10, cost: 3 },
              { id: 2, amount: 25, cost: 4 },
              { id: 3, amount: 50, cost: 6 },
              { id: 4, amount: 100, cost: 10 },
              { id: 5, amount: 250, cost: 21 },
              { id: 6, amount: 500, cost: 40 },
              { id: 7, amount: 1000, cost: 70 }
            ]
        }  
    ] },
    {id: 8, name:'spotify', icon: <BiLogoSpotify color='#1DB954'/>, color: '#1DB954',
    services: [
        {
            id: 0, name: 'plays', amount: [
              { id: 0, amount: 1000, cost: 7 },
              { id: 1, amount: 3000, cost: 19.6 },
              { id: 2, amount: 5000, cost: 31.5 },
              { id: 3, amount: 7000, cost: 42 },
              { id: 4, amount: 10000, cost: 56 },
              { id: 5, amount: 25000, cost: 110 },
              { id: 6, amount: 50000, cost: 175 }
            ]
        },
        {
            id: 1, name: 'monthly listeners', amount: [
              { id: 0, amount: 1000, cost: 4.2 },
              { id: 1, amount: 1500, cost: 7 },
              { id: 2, amount: 2500, cost: 11 },
              { id: 3, amount: 5000, cost: 19.6 },
              { id: 4, amount: 7500, cost: 26.6 },
              { id: 5, amount: 10000, cost: 30 }
            ]
        },
        {
            id: 2, name: 'saves', amount: [
              { id: 0, amount: 100, cost: 4 },
              { id: 1, amount: 500, cost: 8 },
              { id: 2, amount: 1000, cost: 14 },
              { id: 3, amount: 2500, cost: 28 },
              { id: 4, amount: 5000, cost: 40 },
              { id: 5, amount: 10000, cost: 55 }
            ]
        },
        {
            id: 3, name: 'followers', amount: [
              { id: 0, amount: 500, cost: 7 },
              { id: 1, amount: 1000, cost: 10 },
              { id: 2, amount: 1500, cost: 13 },
              { id: 3, amount: 2500, cost: 21 },
              { id: 4, amount: 5000, cost: 35 },
              { id: 5, amount: 10000, cost: 63 }
            ]
        }  
    ] },
]

export default services