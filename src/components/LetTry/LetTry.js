import React from 'react'
import style from './style.module.css'
import { HashLink  } from 'react-router-hash-link';
// import img from "./Personal site-rafiki.png"
import { data } from '../../data';
import stack from "./image-removebg-preview.png"
function LetTry() {
    
  return (
    <div className={style.body}>
        <div className={style.part1}>
            <div className={style.headmain}>
                <div className={style.head}>
                {data.name}
                </div>
                <div className={style.category}>{data.workField.toUpperCase()}</div>
            </div>
            <div>
                <img src={stack} className={style.stack} alt={data.skills}/>
            </div>
            <div className={style.oneline}>
                {data.onelineyou}
            </div>
            <div className={style.btns}>
                <HashLink className={style.chatbtn} smooth to="/#connectwithme">Let's Chat</HashLink>
                <HashLink className={style.projectbtn} smooth to="/#playground">Playground <span className={style.projectbtnarrow}>↗</span></HashLink>
            </div>
            <div>
            </div>
        </div>

        <div className={style.part2}>
            <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/98682478/266792125-12388cf7-0cd7-4d02-a171-b93863063ad0.png" alt={data.name}/>
        </div>
    </div>
  )
}

export default LetTry;