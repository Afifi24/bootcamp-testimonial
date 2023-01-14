import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Img from '../images/image-john.jpg'
import colone from '../images/pattern-quotes.svg'
import montagne from '../images/pattern-curve.svg'
import background from '../images/pattern-bg.svg'
import next from '../images/icon-next.svg'
import prev from '../images/icon-prev.svg'
import data from '../data'
import {motion, AnimatePresence} from 'framer-motion'
const Testimonial = () => {
const [index,setIndex] = useState(0)
const {id,image,job,desc,name} = data[index]
const Next =()=>{
  setIndex(index + 1)
  if(index>=data.length-1){
    setIndex(0)
  }
}
const Prev =()=>{
  setIndex(index - 1)
  if(index<=0){
    setIndex(data.length - 1)
  }
}
useEffect(()=>{
 
},[])

  return (
    <Testimonialstyle>
            <div className="container__bg">
              <img className='montagne' src={montagne} alt="" />
        <div className="container">
          <div className="testimonial">
              <div className="text__content">
                <p>{desc}
                  <img className='colone' src={colone} alt="" />
                 </p>
                <motion.div key={index} initial={{opacity:0, y:-100}} animate={{opacity:1,y:0,transition:{duration:0.75}}} className="author">
                <h2>{name}</h2>
                <small>{job}</small>
                </motion.div>
              </div>
              <div className="image__content">
                <img  className='background' src={background} alt="" />
                 {/* <AnimatePresence> */}
                <motion.img key={index} initial={{opacity:0,scale:0}} animate={{opacity:1,transition:{duration:0.5}, scale:1}} className='avatar' src={image} alt="image" />
                {/* </AnimatePresence> */}
                 <div className="arrow__btn">
                  <button onClick={Prev}><img src={prev} alt="" /></button>
                  <button onClick={Next}><img src={next} alt="" /></button>
                 </div>
              </div>

          </div>
        </div>
        </div>
    </Testimonialstyle>
  )
}

export default Testimonial


const Testimonialstyle = styled.div`
min-height: 100vh;

.container__bg{
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  .montagne{
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.container{
  width: var(--container-width-lg);
  margin: auto;
}
.testimonial{
  display: grid;
  grid-template-columns: 50% 50%;
  height: 92vh;
 
}
.text__content{
 display: flex;
 align-items: flex-start;
 justify-content: center;
 flex-direction: column;
 padding-top: 5rem;
 z-index: 2;
  p{
    line-height: 1.4;
    font-size: var(--size);
    font-weight: 300;
    min-width: 570px;
    z-index: 2;
    color: var(--Dark-Blue);
    position: relative;
    .colone{
    position: absolute;
    top:-23%;
    left:20%;
    transform: translateX(-20%);
    }
  }
 
}
.author{
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 3rem;
   h2{
    color:var(--Dark-Blue);
    font-size: 1.2rem;
   }
  small{
  font-size: 1.3rem;
   font-weight: 300;
   color: var(--Grayish-Blue);
  }
}
.image__content{
 padding-top:1rem ;
  position: relative;
  .avatar{
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    box-shadow: 2px 7px 20px rgba(0,0,0,0.2);
    border-radius: 1rem;
  }
  .background{
   position: absolute;
   left: -5%;
   top: -10%;
   z-index: -1;
  }
}
.arrow__btn{
  background-color: #fff;
  position: absolute;
  left: 2rem;
  bottom: -1.8rem;
  padding: 1rem 1.5rem;
  display: flex;
  gap: 2rem;
  border-radius: 1.8rem;
  box-shadow: 0px 2px 15px rgba(0,0,0,0.2);
  z-index: 10;
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 400ms;
    &:hover{
      transform: scale(1.5);

    }
  }
}
/* MEDIA QUERIES */

/* ===== medium scren ====  */

@media screen and (max-width:1024px) {
  .container{
    width: var(--container-width-md);
  }
  .text__container{
    p{
      min-width: 300px;
      width: 300px;
    }
  }
  .testimonial{
    height: 78vh;
  }
}
/* ===== small scren ====  */

@media screen and (max-width:950px) {
  .container__bg{
    min-height: 150vh;
  }
  .container{
  padding-top: 5rem;
}
  .testimonial{
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .text__content{
    grid-area: 2;
    p{
      text-align: center;
      min-width: initial;
      /* width: 100vw;
      padding: 0rem 2rem; */
    }
  }
  .image__content{
    grid-area: 1;
    max-width: 600px;
    display: grid;
    place-items: center;
    margin: auto;
    .background{
        width: 100%;
    }
    .avatar{
      width: 350px;
    }
  }
}

@media screen and (max-width:620px) {
.image__content{
  .avatar{
    width: 350px;
  }
}
.text__content{
  p{
    font-size: 24px;
  }
}
}
@media screen and (max-width:500px) {
.image__content{
  .avatar{
    width: 280px;
  }
}
.testimonial{
  gap: 1rem;
}
.text__content{
  align-items: center;
  p{
    font-size: 18px;
    .colone{
    position: absolute;
    top:-18%;
    left:50%;
    transform: translateX(-50%);
    transform: translateX(-20%);
    width: 50px;
    }
  }
}
.author{
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
   h2{
    color:var(--Dark-Blue);
    font-size: 14px;
    text-align: center;
   }
  small{
  font-size: 14px;
  text-align: center;
  }
}

.arrow__btn{
  left: 50%;
  transform: translateX(-50%);
}
}
`