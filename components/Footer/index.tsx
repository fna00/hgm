import React from "react";

interface FooterProps {
  data: {
    companyInfo: string;
    socialMedia: {
      instagram: string;
    };
    contact: {
      email: string;
      phone: string;
    };
    address: {
      line1: string;
      line2: string;
    };
  };
}


export default function Footer({ data }: FooterProps) {
  return (
    <div className="bg-blue-900 w-full mb-0 text-white-400">
      <div className="flex justify-between container mx-auto p-4">
        <div>
          <div className="flex gap-4">{data.companyInfo}</div>
          <div className="flex mb-4"> 
            <a
              className="flex px-4" 
              href={data.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mr-2 content-center">
                <svg
                  version="1.1"
                  height={16}
                  fill="white"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 56.7 56.7"
                  enable-background="new 0 0 56.7 56.7"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                    />
                    <circle cx="41.5" cy="16.4" r="2.9" />
                    <path
                      d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                    />
                  </g>
                </svg>
              </div>
              Instagram
            </a>
          </div>
          <div>
            <div className="flex">
              <div className="mr-4 content-center">
                <svg
                  height={16}
                  viewBox="0 0 8 6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
                </svg>
              </div>
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </div>
            <div>
              {data.contact.phone.split(".").map((part, index, array) => (
                <div key={index} className="flex">
                  <div className="mr-4 content-center">
                    <svg
                      viewBox="0 0 256 256"
                      width={16}
                      height={16}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect fill="none" height="4" />
                      <path
                        d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z"
                        fill="white"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <React.Fragment>
                    {part}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="content-center">
          <p>{data.address.line1}</p>
          <p>{data.address.line2}</p>
        </div>
      </div>
    </div>
  );
}
