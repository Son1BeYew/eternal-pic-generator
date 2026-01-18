"use client";

import { useState } from "react";

export default function SocialConnect() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const socialPlatforms = [
    {
      name: "Claude",
      color: "text-[#CC9B7A]",
      bgColor: "bg-[#CC9B7A]/10",
      borderColor: "border-[#CC9B7A]/30",
      hoverBorder: "group-hover:border-[#CC9B7A]",
      icon: (
        <div className="text-2xl font-bold">◐</div>
      ),
    },
    {
      name: "OpenAI",
      color: "text-[#10A37F]",
      bgColor: "bg-[#10A37F]/10",
      borderColor: "border-[#10A37F]/30",
      hoverBorder: "group-hover:border-[#10A37F]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
      ),
    },
    {
      name: "Google AI",
      color: "text-[#4285F4]",
      bgColor: "bg-[#4285F4]/10",
      borderColor: "border-[#4285F4]/30",
      hoverBorder: "group-hover:border-[#4285F4]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 296 298" fill="none">
          <mask id="gemini__a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }}>
            <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"/>
          </mask>
          <g mask="url(#gemini__a)">
            <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"/>
            <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"/>
            <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"/>
            <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"/>
            <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"/>
            <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"/>
            <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"/>
          </g>
        </svg>
      ),
    },
    {
      name: "Meta AI",
      color: "text-[#0081FB]",
      bgColor: "bg-[#0081FB]/10",
      borderColor: "border-[#0081FB]/30",
      hoverBorder: "group-hover:border-[#0081FB]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.0235,4.50341 C17.8529,4.3766 19.267,5.44519 20.2076,6.67737 C21.156,7.91976 21.8094,9.54336 22.1673,11.1394 C22.5251,12.7347 22.6208,14.4504 22.3239,15.9123 C22.0388,17.3161 21.2785,18.9223 19.5568,19.437 C17.9375,19.9211 16.5179,19.2167 15.5052,18.3648 C14.4894,17.5103 13.6292,16.3122 12.953,15.1885 C12.6252,14.6438 12.3272,14.0938 12.0637,13.573 C11.8001,14.0938 11.5021,14.6438 11.1743,15.1885 C10.4981,16.3122 9.63792,17.5103 8.62209,18.3648 C7.60941,19.2167 6.18982,19.9211 4.57048,19.437 C2.84884,18.9223 2.08848,17.3161 1.80341,15.9123 C1.50655,14.4504 1.60217,12.7347 1.95995,11.1394 C2.31789,9.54336 2.97134,7.91976 3.91972,6.67737 C4.86029,5.44519 6.27437,4.3766 8.10383,4.50341 C9.81996636,4.62237364 11.0674829,5.78648603 11.8446591,6.77187041 L12.0637,7.0609 L12.0637,7.0609 L12.2827156,6.77187041 C13.059814,5.78648603 14.3073182,4.62237364 16.0235,4.50341 Z M7.89637,7.49623 C7.47584,7.46708 6.92691,7.6821 6.30436,8.49766 C5.68961,9.30301 5.17981,10.4913 4.88724,11.7959 C4.59453,13.1011 4.5524,14.3747 4.74341,15.3153 C4.90819312,16.126825 5.17222414,16.4173547 5.33536471,16.5186918 L5.40276778,16.5532373 L5.40276778,16.5532373 L5.42973,16.5627 C5.6624,16.6322 6.04382,16.6134 6.69089,16.0691 C7.33482,15.5274 7.99318,14.6564 8.60392,13.6416 C8.87629333,13.1890333 9.12860444,12.7252222 9.35564593,12.2790926 L9.61563301,11.7540754 L9.61563301,11.7540754 L9.8493616,11.25714 L9.8493616,11.25714 L10.0548321,10.7993939 L10.0548321,10.7993939 L10.2300447,10.3919447 L10.2300447,10.3919447 L10.373,10.0459 L10.373,10.0459 C10.2165,9.73315 9.99218,9.32834 9.71032,8.92724 C9.06612,8.01052 8.42073,7.53258 7.89637,7.49623 Z M16.2309,7.49623 C15.7066,7.53258 15.0612,8.01052 14.417,8.92724 C14.1351,9.32834 13.9108,9.73315 13.7543,10.0459 L13.9809584,10.588688 L13.9809584,10.588688 L14.1715556,11.0226741 C14.2058156,11.0990422 14.2412947,11.1772747 14.2779512,11.25714 L14.511686,11.7540754 L14.511686,11.7540754 L14.7716778,12.2790926 C14.9987222,12.7252222 15.2510333,13.1890333 15.5234,13.6416 C16.1341,14.6564 16.7925,15.5274 17.4364,16.0691 C18.0372786,16.5745214 18.4090587,16.6268332 18.6454171,16.576082 L18.6976,16.5627 C18.8279,16.5237 19.1811,16.3141 19.3839,15.3153 C19.5749,14.3747 19.5328,13.1011 19.2401,11.7959 C18.9475,10.4913 18.4377,9.30301 17.8229,8.49766 C17.2004,7.6821 16.6515,7.46708 16.2309,7.49623 Z" fill="#09244B"/>
        </svg>
      ),
    },
    {
      name: "Midjourney",
      color: "text-[#000000]",
      bgColor: "bg-slate-100",
      borderColor: "border-slate-300",
      hoverBorder: "group-hover:border-slate-900",
      icon: (
        <div className="text-xl font-bold">⛵</div>
      ),
    },
    {
      name: "Stability AI",
      color: "text-[#9D39FF]",
      bgColor: "bg-[#9D39FF]/10",
      borderColor: "border-[#9D39FF]/30",
      hoverBorder: "group-hover:border-[#9D39FF]",
      icon: (
        <svg className="h-7 w-7" preserveAspectRatio="xMidYMid" viewBox="0 0 256 213">
          <defs>
            <linearGradient id="stability_ai__a" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#9D39FF" />
              <stop offset="100%" stopColor="#A380FF" />
            </linearGradient>
          </defs>
          <path fill="url(#stability_ai__a)" d="M72.418 212.45c49.478 0 81.658-26.205 81.658-65.626 0-30.572-19.572-49.998-54.569-58.043l-22.469-6.74c-19.71-4.424-31.215-9.738-28.505-23.312 2.255-11.292 9.002-17.667 24.69-17.667 49.872 0 68.35 17.667 68.35 17.667V16.237S123.583 0 73.223 0C25.757 0 0 24.424 0 62.236c0 30.571 17.85 48.35 54.052 56.798 2.534.633 3.83.959 3.885.976 5.507 1.704 12.938 3.956 22.293 6.755 18.504 4.425 23.262 9.121 23.262 23.2 0 12.872-13.374 20.19-31.074 20.19C21.432 170.154 0 144.36 0 144.36v47.078s13.402 21.01 72.418 21.01Z"/>
          <path fill="#E80000" d="M225.442 209.266c17.515 0 30.558-12.67 30.558-29.812 0-17.515-12.67-29.813-30.558-29.813-17.515 0-30.185 12.298-30.185 29.813s12.67 29.812 30.185 29.812Z"/>
        </svg>
      ),
    },
    {
      name: "Leonardo AI",
      color: "text-[#8B5CF6]",
      bgColor: "bg-[#8B5CF6]/10",
      borderColor: "border-[#8B5CF6]/30",
      hoverBorder: "group-hover:border-[#8B5CF6]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
    },
    {
      name: "Anthropic",
      color: "text-[#D97757]",
      bgColor: "bg-[#D97757]/10",
      borderColor: "border-[#D97757]/30",
      hoverBorder: "group-hover:border-[#D97757]",
      icon: (
        <svg className="h-7 w-7" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257" fill="currentColor">
          <path d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"/>
        </svg>
      ),
    },
    {
      name: "Replicate",
      color: "text-[#000000]",
      bgColor: "bg-slate-100",
      borderColor: "border-slate-300",
      hoverBorder: "group-hover:border-slate-900",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 726 726" fill="currentColor">
          <g clipPath="url(#replicate_light__clip0_1_3)">
            <path d="M726 310.438V392.476H438.068V726H346.302V310.438H726Z" />
            <path d="M726 155.219V237.402H264.845V726H173.078V155.219H726Z" />
            <path d="M726 0V82.1832H91.7664V726H0V0H726Z" />
          </g>
          <defs>
            <clipPath id="replicate_light__clip0_1_3">
              <rect width="726" height="726" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Hugging Face",
      color: "text-[#FFD21E]",
      bgColor: "bg-[#FFD21E]/10",
      borderColor: "border-[#FFD21E]/30",
      hoverBorder: "group-hover:border-[#FFD21E]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 95 88" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path d="M13,14.7890193 C22.8284801,14.7890193 26,6.02605902 26,1.5261751 C26,-0.812484109 24.4279133,-0.0763570998 21.9099482,1.17020987 C19.5830216,2.32219957 16.4482998,3.91011313 13,3.91011313 C5.82029825,3.91011313 0,-2.97370882 0,1.5261751 C0,6.02605902 3.17151989,14.7890193 13,14.7890193 Z" id="hugging_face__path-1"/>
          </defs>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
              <path d="M93.7930402,70.08 C94.5430402,72.24 94.3630402,74.54 93.3630402,76.54 C92.6430402,78 91.6130402,79.13 90.3530402,80.14 C88.8330402,81.34 86.9430402,82.36 84.6630402,83.34 C81.9430402,84.5 78.6230402,85.59 77.1030402,85.99 C73.2130402,87 69.4730402,87.64 65.6830402,87.67 C60.2630402,87.72 55.5930402,86.44 52.2730402,83.17 C50.5530402,83.38 48.8130402,83.5 47.0630402,83.5 C45.4030402,83.5 43.7630402,83.4 42.1330402,83.2 C38.8030402,86.45 34.1530402,87.72 28.7530402,87.67 C24.9630402,87.64 21.2230402,87 17.3230402,85.99 C15.8130402,85.59 12.4930402,84.5 9.77304019,83.34 C7.49304019,82.36 5.60304019,81.34 4.09304019,80.14 C2.82304019,79.13 1.79304019,78 1.07304019,76.54 C0.0830401858,74.54 -0.106959814,72.24 0.653040186,70.08 C-0.0469598142,68.43 -0.226959814,66.54 0.323040186,64.45 C0.573040186,63.5 0.983040186,62.62 1.50304019,61.84 C1.39304019,61.43 1.30304019,61.01 1.24304019,60.55 C0.863040186,57.81 1.81304019,55.31 3.60304019,53.37 C4.48304019,52.4 5.43304019,51.73 6.42304019,51.3 C5.69304019,48.2 5.31304019,45.01 5.31304019,41.75 C5.31304019,18.69 24.0030402,0 47.0630402,0 C54.9830402,0 62.3930402,2.2 68.7130402,6.04 C69.8530402,6.74 70.9730402,7.49 72.0430402,8.29 C72.5730402,8.69 73.1030402,9.1 73.6130402,9.53 C74.1330402,9.95 74.6430402,10.39 75.1330402,10.84 C76.6130402,12.19 78.0030402,13.64 79.2730402,15.19 C79.7030402,15.7 80.1130402,16.23 80.5130402,16.77 C81.3230402,17.84 82.0730402,18.95 82.7630402,20.1 C83.8130402,21.82 84.7330402,23.62 85.5330402,25.49 C86.0630402,26.74 86.5230402,28.02 86.9330402,29.33 C87.5430402,31.29 88.0130402,33.31 88.3330402,35.39 C88.4330402,36.08 88.5230402,36.78 88.5930402,37.48 C88.7330402,38.88 88.8130402,40.3 88.8130402,41.75 C88.8130402,44.97 88.4330402,48.13 87.7230402,51.18 C88.8230402,51.61 89.8630402,52.31 90.8330402,53.37 C92.6230402,55.31 93.5730402,57.82 93.1930402,60.56 C93.1330402,61.01 93.0430402,61.43 92.9330402,61.84 C93.4530402,62.62 93.8630402,63.5 94.1130402,64.45 C94.6630402,66.54 94.4830402,68.43 93.7930402,70.08" fill="#FFFFFF" fillRule="nonzero"/>
              <circle fill="#FFD21E" fillRule="nonzero" cx="46.75" cy="41.75" r="34.75"/>
              <path d="M81.5,41.75 C81.5,22.5581049 65.9418951,7 46.75,7 C27.5581049,7 12,22.5581049 12,41.75 C12,60.9418951 27.5581049,76.5 46.75,76.5 C65.9418951,76.5 81.5,60.9418951 81.5,41.75 Z M8,41.75 C8,20.3489659 25.3489659,3 46.75,3 C68.1510341,3 85.5,20.3489659 85.5,41.75 C85.5,63.1510341 68.1510341,80.5 46.75,80.5 C25.3489659,80.5 8,63.1510341 8,41.75 Z" fill="#FFAC03" fillRule="nonzero"/>
              <path d="M57.1723547,31.7151181 C58.0863134,32.7107502 57.3040427,35.2620959 58.7620957,35.2620959 C61.5235194,35.2620959 63.7620957,33.0235196 63.7620957,30.2620959 C63.7620957,27.5006721 61.5235194,25.2620959 58.7620957,25.2620959 C56.0006719,25.2620959 53.7620957,27.5006721 53.7620957,30.2620959 C53.7620957,31.5654666 56.3553563,30.8251108 57.1723547,31.7151181 Z" fill="#3A3B45" fillRule="nonzero" transform="translate(58.762096, 30.262096) rotate(-28.000000) translate(-58.762096, -30.262096)"/>
              <path d="M32.1723553,31.7151181 C33.086314,32.7107502 32.3040433,35.2620959 33.7620963,35.2620959 C36.52352,35.2620959 38.7620963,33.0235196 38.7620963,30.2620959 C38.7620963,27.5006721 36.52352,25.2620959 33.7620963,25.2620959 C31.0006725,25.2620959 28.7620963,27.5006721 28.7620963,30.2620959 C28.7620963,31.5654666 31.3553569,30.8251108 32.1723553,31.7151181 Z" fill="#3A3B45" fillRule="nonzero" transform="translate(33.762096, 30.262096) scale(-1, 1) rotate(-28.000000) translate(-33.762096, -30.262096)"/>
              <g transform="translate(33.500000, 41.500000)">
                <g fillRule="nonzero" fill="#3A3B45">
                  <path d="M13,14.7890193 C22.8284801,14.7890193 26,6.02605902 26,1.5261751 C26,-0.812484109 24.4279133,-0.0763570998 21.9099482,1.17020987 C19.5830216,2.32219957 16.4482998,3.91011313 13,3.91011313 C5.82029825,3.91011313 0,-2.97370882 0,1.5261751 C0,6.02605902 3.17151989,14.7890193 13,14.7890193 Z"/>
                </g>
                <g>
                  <mask id="hugging_face__mask-2" fill="white">
                    <use href="#hugging_face__path-1"/>
                  </mask>
                  <path d="M13.25,25 C18.0399291,25 21.9229338,21.1169953 21.9229338,16.3270662 C21.9229338,12.5962324 19.5672252,9.41560375 16.2620987,8.19147116 C16.1404592,8.14641904 16.0175337,8.10401696 15.8933923,8.06433503 C15.0599892,7.79793679 14.1717882,10.6623144 13.25,10.6623144 C12.3886883,10.6623144 11.5567012,7.77968641 10.7713426,8.01349068 C7.18916268,9.07991937 4.57706621,12.3984489 4.57706621,16.3270662 C4.57706621,21.1169953 8.46007093,25 13.25,25 Z" fill="#EF4E4E" fillRule="nonzero" mask="url(#hugging_face__mask-2)"/>
                </g>
              </g>
              <circle fill="#FFD21E" fillRule="nonzero" style={{ mixBlendMode: "multiply" }} cx="70.25" cy="33.75" r="3.25"/>
              <circle fill="#FFD21E" fillRule="nonzero" style={{ mixBlendMode: "multiply" }} cx="23.75" cy="33.75" r="3.25"/>
            </g>
          </g>
        </svg>
      ),
    },
    {
      name: "Runway",
      color: "text-[#34D399]",
      bgColor: "bg-[#34D399]/10",
      borderColor: "border-[#34D399]/30",
      hoverBorder: "group-hover:border-[#34D399]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 3v18h20V3H2zm18 16H4V5h16v14zM6 7h12v2H6V7zm0 4h12v2H6v-2zm0 4h8v2H6v-2z"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      color: "text-[#24292e]",
      bgColor: "bg-slate-100",
      borderColor: "border-slate-300",
      hoverBorder: "group-hover:border-slate-900",
      icon: (
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Tích hợp model tạo ảnh mạnh mẽ từ
        </h2>
        
        {/* Marquee container with overflow hidden */}
        <div className="mt-12 relative">
          {/* Add gradient fade on edges for smooth effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Add padding top for modal space */}
          <div className="pt-24 overflow-hidden">
            {/* Animated marquee - duplicate items for seamless loop */}
            <div className="flex animate-marquee hover:pause">
              {/* First set of icons */}
              {socialPlatforms.map((platform, index) => (
                <div
                  key={`${platform.name}-1-${index}`}
                  className="group flex flex-col items-center gap-4 mx-8 flex-shrink-0 relative"
                  onMouseEnter={() => setHoveredPlatform(`${platform.name}-1-${index}`)}
                  onMouseLeave={() => setHoveredPlatform(null)}
                >
                  <div className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${platform.borderColor} ${platform.bgColor} ${platform.color} shadow-sm transition-all duration-300 ${platform.hoverBorder} group-hover:shadow-lg group-hover:scale-110`}>
                    {platform.icon}
                  </div>
                  <p className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                    {platform.name}
                  </p>
                  
                  {/* Hover Modal */}
                  {hoveredPlatform === `${platform.name}-1-${index}` && (
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 duration-200">
                      <div className={`${platform.bgColor} backdrop-blur-xl bg-white/90 border ${platform.borderColor} rounded-xl px-4 py-2 shadow-xl`}>
                        <p className={`text-sm font-semibold ${platform.color} whitespace-nowrap`}>
                          {platform.name}
                        </p>
                        {/* Arrow pointing down */}
                        <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 border-b ${platform.borderColor} border-r ${platform.borderColor} rotate-45`}></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            {/* Second set of icons (duplicate for seamless loop) */}
            {socialPlatforms.map((platform, index) => (
              <div
                key={`${platform.name}-2-${index}`}
                className="group flex flex-col items-center gap-4 mx-8 flex-shrink-0 relative"
                onMouseEnter={() => setHoveredPlatform(`${platform.name}-2-${index}`)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <div className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${platform.borderColor} ${platform.bgColor} ${platform.color} shadow-sm transition-all duration-300 ${platform.hoverBorder} group-hover:shadow-lg group-hover:scale-110`}>
                  {platform.icon}
                </div>
                <p className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                  {platform.name}
                </p>
                
                {/* Hover Modal */}
                {hoveredPlatform === `${platform.name}-2-${index}` && (
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className={`${platform.bgColor} backdrop-blur-xl bg-white/90 border ${platform.borderColor} rounded-xl px-4 py-2 shadow-xl`}>
                      <p className={`text-sm font-semibold ${platform.color} whitespace-nowrap`}>
                        {platform.name}
                      </p>
                      {/* Arrow pointing down */}
                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 border-b ${platform.borderColor} border-r ${platform.borderColor} rotate-45`}></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {socialPlatforms.map((platform, index) => (
              <div
                key={`${platform.name}-3-${index}`}
                className="group flex flex-col items-center gap-4 mx-8 flex-shrink-0 relative"
                onMouseEnter={() => setHoveredPlatform(`${platform.name}-3-${index}`)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <div className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${platform.borderColor} ${platform.bgColor} ${platform.color} shadow-sm transition-all duration-300 ${platform.hoverBorder} group-hover:shadow-lg group-hover:scale-110`}>
                  {platform.icon}
                </div>
                <p className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                  {platform.name}
                </p>
                
                {/* Hover Modal */}
                {hoveredPlatform === `${platform.name}-3-${index}` && (
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className={`${platform.bgColor} backdrop-blur-xl bg-white/90 border ${platform.borderColor} rounded-xl px-4 py-2 shadow-xl`}>
                      <p className={`text-sm font-semibold ${platform.color} whitespace-nowrap`}>
                        {platform.name}
                      </p>
                      {/* Arrow pointing down */}
                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 border-b ${platform.borderColor} border-r ${platform.borderColor} rotate-45`}></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
