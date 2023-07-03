import React from 'react'
import style from '@/components/containers/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <section className={style.subscribe}>
          <div rel='newletter - latest deals'>
            <h2>
            Get notifications of our latest deals<br />
            and offers direclty to your email.
            </h2>
            <div>
              <input type="text" placeholder='Email address' />
              <button>Subscribe</button>
            </div>
          </div>
        </section>
        
        <section className={style['resource-links']}>
          <ul>
            <li>
              <h2>Mami Hub</h2>
              <ul>
                <li>
                5A River Benue Street,<br />
                Maitama Abuja,<br />
                Nigeria.</li>
                <li className={style['email-link']}>
                  <div><Image src={'/svgs/mail.svg'} alt="contact via email" width="24" height="24" /></div>
                  admin@mamihub.com
                </li>
                <li> (+234)703 457 0965</li>
              </ul>
            </li>
            <li>
              <h2>Account</h2>
              <ul>
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Shop</li>
              </ul>
            </li>
            <li>
              <h2>Quick Link</h2>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
              </ul>
            </li>
            <li>
              <h2>Make Money on Mami Hub</h2>
              <ul>
                <li>Sell on mamihub</li>
              </ul>
            </li>
            <li>
              <h2>Download App</h2>
              <ul>
                <li>AppStore and play store</li>
                <li>Save N1000 when you download our app from</li>
                <li className={style['download-app']}>
                  <div>
                    <div>
                      <Image src={'/images/app-store.png'} alt="" width='192' height='57' />
                    </div>
                    <div>
                      <Image src={'/images/play-store.png'} alt="" width='192' height='58' />
                    </div>
                  </div>
                  <div>
                    <Image src={'/images/QRcod.png'} alt="" width='122' height='122' />
                  </div>
                </li>
              </ul>
            </li>
            
          </ul>
        </section>
        <section className={style['resource-links-mobile']}>
          <ul>
            <li>
              <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Help Center</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>Privacy policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
              </ul>
            </li>
            <li>
                <div>Become a seller</div>
            </li>
            
          </ul>
        </section>

        <section className={style['contact-links']}>
          <div>
            <Link href="">
                <Image src={'/svgs/fb-link.svg'} alt="" width='24' height='24' />
            </Link>
            <Link href="">
                <Image src={'/svgs/insta-link.svg'} alt="" width='24' height='24' />
            </Link>
            <Link href="">
                <Image src={'/svgs/twitter-link.svg'} alt="" width='24' height='24' />
            </Link>
            <Link href="">
                <Image src={'/svgs/tiktok-link.svg'} alt="" width='24' height='24' />
            </Link>
            <Link href="">
                <Image src={'/svgs/youtube-link.svg'} alt="" width='24' height='24' />
            </Link>
          </div>

          <div>
            <div>
            <Image src={'/svgs/copy.svg'} alt="" width='24' height='24' />
            </div>
            All rights reserved by MamiHub.
          </div>
          <div>
            <Link href="">
                <Image src={'/svgs/ri_visa-line.svg'} alt="" width='24' height='24' />
            </Link>
            <Link href="">
                <Image src={'/svgs/paypal-fill.svg'} alt="" width='24' height='24' />
            </Link>
            <Link href="">
                <Image src={'/svgs/paypal-fill.svg'} alt="" width='24' height='24' />
            </Link>
            <Link href="">
                <Image src={'/svgs/ri_mastercard-fill.svg'} alt="" width='24' height='24' />
            </Link>
            <Link href="">
                <Image src={'/svgs/paypal-fill.svg'} alt="" width='24' height='24' />
            </Link>
          </div>
        </section>

    </div>
  </footer>
  )
}

export default Footer