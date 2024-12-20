import React from 'react'

export default function Footer() {
    return (
      <div className="bg-red-900 w-full mb-0 text-white-400">
        <div className="flex justify-between container mx-auto p-4">
          <div className='content-center'>
            <img
              src="/logo2.png"
              alt="logo"
              className="w-32 h-62 pb-2"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
                © 2024 Pamukkale Kağıt Ürünleri San. Tic. Ldt. Şti All rights reserved.
            </div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                version="1.1"
                height={20}
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.7 56.7"
                className="w-5 h-5"
              >
                <g>
                  <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z" />
                  <circle cx="41.5" cy="16.4" r="2.9" />
                  <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3 s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z" />
                </g>
              </svg>
              <a
                href="https://www.instagram.com/pamukkalekagit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <svg
                height={20}
                viewBox="0 0 8 6"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="w-5 h-5"
              >
                <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
              </svg>
              <a href="mailto:ornek@example.com">
                muhasebe@pamukkalekagit.com.tr
              </a>
            </div>
  
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 256 256"
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="w-5 h-5"
              >
                <path
                  d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z"
                  fill="white"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>(0258) 251 21 68</span>
            </div>
          </div>
  
          <div className="content-center">
          <p>Sümer Mahallesi, 2249. Sk. No:10 20020</p>
         <p>Merkezefendi/ DENİZLİ</p>
          </div>
        </div>
      </div>
    );
  }
  
