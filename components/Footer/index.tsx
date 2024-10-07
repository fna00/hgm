import React from "react";

interface SocialMedia {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

interface Contact {
  email: string;
  phone: string;
}

interface FooterProps {
  data: {
    companyInfo: string;
    socialMedia: SocialMedia;
    contact: Contact;
    address: {
      line1: string;
      line2: string;
    };
  };
}

export default function Footer({ data }: FooterProps) {
  return (
    <div className="bg-black w-full mb-0 text-white">
      <div className="flex justify-between container mx-auto p-4">
        <div>
          <div className="flex mb-4">{data.companyInfo}</div>
          <div className="flex mb-4">
            <a
              className="flex"
              href={data.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mr-2 content-center">
                <svg
                  enable-background=" 0 0 256 256"
                  height={16}
                  fill="white"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 56.693 56.693"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
                </svg>
              </div>
              <div>Facebook |</div>
            </a>
            <a
              className="flex px-4"
              href={data.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mr-2 content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={16}
                  viewBox="0 0 1200 1227"
                  fill="white"
                >
                  <g clip-path="url(#clip0_1_2)">
                    <path
                      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2">
                      <rect width="1200" height="1227" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>Twitter</div>
            </a>
            |
            <a
              className="flex px-4"
              href={data.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mr-2 content-center">
                <svg
                  enable-background="new 0 0 183.836 179.8984"
                  id="linkedin"
                  height={16}
                  fill="white"
                  version="1.1"
                  viewBox="0 0 183.836 179.8984"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path d="M21.5663,0C9.0703,0,0,8.6172,0,20.488c0,11.8636,8.8907,20.4748,21.1367,20.4748c6.3516,0,11.8244-2.0584,15.828-5.9552   c3.84-3.738,5.9572-8.8944,5.9532-14.6132C42.6367,8.3868,33.8555,0,21.5663,0z M31.3867,29.2732   c-2.4804,2.4144-6.0272,3.6896-10.25,3.6896C13.4023,32.9628,8,27.834,8,20.488C8,13.0196,13.4531,8,21.5663,8   c7.9337,0,13.172,4.9392,13.3516,12.49C34.9179,23.9376,33.664,27.0564,31.3867,29.2732z" />
                    <path d="M3.836,179.8984h35.9531V47.7208H3.836V179.8984z M11.836,55.7208h19.9531v116.1776H11.836V55.7208z" />
                    <path d="M134.5939,47.7208c-16.672,0-26.8792,5.7536-32.7932,11.166l-1.1247-11.166H60v132.1776h39.836v-69.4708   c0-2.992,1.2107-9.2052,1.9727-10.8456c4.8124-10.3652,11.3044-10.3652,21.1364-10.3652c11.3244,0,20.8909,10.6192,20.8909,23.1876   v67.494h40v-74.6816C183.836,65.7128,158.3087,47.7208,134.5939,47.7208z M175.836,171.8984h-24v-59.494   c0-16.9064-13.2305-31.1876-28.8909-31.1876c-10.0468,0-21.4336,0-28.3944,14.998c-1.4376,3.0996-2.7147,10.5292-2.7147,14.2128   v61.4708H68V55.7208h25.4415l1.6328,16.1776h6.5544l1.172-1.8908c2.668-4.2948,11.1056-14.2868,31.7932-14.2868   c19.8632,0,41.2421,15.488,41.2421,49.496V171.8984z" />
                  </g>
                </svg>
              </div>
              LinkedIn
            </a>
            |
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
