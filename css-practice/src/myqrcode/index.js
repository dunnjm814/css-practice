import React, {useState, useEffect} from 'react'
import QRCode from 'qrcode.react'
import './qrkitty.css'

export default function MyQRCode() {
  const catKey = `${process.env.REACT_APP_CAT_KEY}`
  const [catImg, setCatImg] = useState('')
  const [loaded, setLoaded] = useState(false)
  const qrVal = catImg ? catImg.url : ''
  const getCat = async () => {
    const kitty = await fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${catKey}`,
        "Access-Control-Allow-Origin": "*"
      },
    });
    const kittyImg = await kitty.json();
    setCatImg(kittyImg[0])
  }

  useEffect(() => {
    if (!loaded) {
      setLoaded(prev => !prev)
    }
  }, [loaded])
  useEffect(() => {
    getCat()
    console.log(
catImg)
  }, [])

  return (
    <div className='qr-wrap'>
      <div className='code-container'>
        <QRCode value={qrVal} />
      </div>
      <div className='kitty-container'>
        <img className='kitty' src={qrVal} alt='its a kitty'/>
      </div>
    </div>
  )
}
