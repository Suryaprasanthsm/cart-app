import React from 'react'

const Home = ({cart,setCart}) => {
  

  
  return (
    <div className='opening' >
    <div className='inner'>
    <img src={'/src/food image2.jpg'} height={"200px"} width={"300px"} id='one'/>
    <p>FRENCH FRIES</p>
    <p> RS:120</p>
      <button>ADD TO CART</button>
    </div>
    <div>
    <img src={'/src/food imagee1.jpg'} height={"200px"} width={"300px"} id='two'/>
    <p>PRAWN FRY</p>
    <p> RS:175</p>
    <button>ADD TO CART</button>
    </div>
    <div>
    <img src={'/src/food image3.jpg'} height={"200px"} width={"300px"} id='three'/>
    <p>STRAWBERRY FALUDAA</p>
    <p> RS:99</p>
    <button>ADD TO CART</button>
    </div>
    <div>
    <img src={'/src/food image4.jpg'} height={"200px"} width={"300px"} id='four'/>
    <p>TRIPPLE LAYER CAKE</p>
    <p> RS:120</p>
    <button>ADD TO CART</button>
    </div>
    <div>
    <img src={'/src/food image5.jpg'} height={"200px"} width={"300px"} id='five'/>
    <p>BURGGER (CHICKEN)</p>
    <p> RS:120</p>
    <button>ADD TO CART</button>
    </div>
    <div>
    <img src={'/src/food image6.jpg'} height={"200px"} width={"300px"} id='six'/>
    <p>CHINEESE NOODLES</p>
    <p> RS:120</p>
    <button>ADD TO CART</button>
    </div>
    <div>
    <img src={'/src/food image8.jpg'} height={"200px"} width={"300px"} id='seven' />
    <p>VEG PIZZA</p>
    <p> RS:100</p>
    <button>ADD TO CART</button>
    </div>
    <div>
    <img src={'/src/food image7.jpg'} height={"200px"} width={"300px"} id='eight' />
    <p>STRAWBERRY DESERT</p>
    <p> RS:220</p>
    <button>ADD TO CART</button>
    </div>
    </div>
  )
}

export default Home
