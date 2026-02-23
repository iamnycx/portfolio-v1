"use client";

import PlusIcons from "../plus-icons";
import { motion } from "motion/react";

export default function MusicPlayer() {
  return (
    <div className="border-muted-foreground/50 group relative aspect-700/400 w-full border">
      <p className="text-muted-foreground absolute top-0 -right-44 w-28">
        {"// component under construction"}
      </p>
      <PlusIcons />
      <div className="bg-muted/50 absolute left-16 bottom-2 p-2">
        <motion.div
          animate={{ opacity: [0.2, 1] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "mirror",
          }}
          className="h-2 w-1 bg-green-500"
        />
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "mirror",
          }}
          className="absolute blur-[2px] top-1/2 left-1/2 h-2 w-1 -translate-x-1/2 -translate-y-1/2 bg-green-500"
        />
      </div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="42" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="42" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="42" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="42" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="42" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="42" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="42" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="42" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="57" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="57" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="57" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="57" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="57" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="57" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="57" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="57" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="72" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="72" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="72" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="72" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="72" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="72" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="72" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="72" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="87" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="87" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="87" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="87" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="87" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="87" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="87" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="87" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="102" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="102" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="102" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="102" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="102" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="102" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="102" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="102" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="117" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="117" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="117" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="117" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="117" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="117" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="117" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="117" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="132" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="132" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="132" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="132" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="132" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="132" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="132" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="132" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="147" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="147" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="147" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="147" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="147" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="147" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="147" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="147" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="162" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="162" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="162" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="162" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="162" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="162" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="162" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="162" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="177" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="177" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="177" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="177" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="177" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="177" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="177" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="177" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="192" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="192" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="192" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="192" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="192" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="192" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="192" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="192" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="207" cy="32" r="5" fill="#AFAFAF" />
        <circle cx="207" cy="46" r="5" fill="#AFAFAF" />
        <circle cx="207" cy="60" r="5" fill="#AFAFAF" />
        <circle cx="207" cy="74" r="5" fill="#AFAFAF" />
        <circle cx="207" cy="88" r="5" fill="#AFAFAF" />
        <circle cx="207" cy="102" r="5" fill="#AFAFAF" />
        <circle cx="207" cy="116" r="5" fill="#AFAFAF" />
        <circle cx="207" cy="130" r="5" fill="#AFAFAF" />
        <circle cx="42" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="57" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="72" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="87" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="102" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="117" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="132" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="147" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="162" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="177" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="192" cy="144" r="5" fill="#AFAFAF" />
        <circle cx="207" cy="144" r="5" fill="#AFAFAF" />
        <g opacity="0.1">
          <g filter="url(#filter1_i_0_1)">
            <path
              d="M232 8H665V231H247C238.716 231 232 224.284 232 216V8Z"
              fill="#0A0B0C"
            />
          </g>
          <path
            d="M232 8H665V231H247C238.716 231 232 224.284 232 216V8Z"
            stroke="#AFAFAF"
            strokeOpacity="0.01"
          />
        </g>
        <g filter="url(#filter2_dd_0_1)">
          <rect x="265" y="27" width="370" height="101" rx="2" fill="#101113" />
        </g>
        <path
          d="M69 346C69 354.837 61.8366 362 53 362C44.1634 362 37 354.837 37 346C37 337.163 44.1634 330 53 330C61.8366 330 69 337.163 69 346Z"
          fill="black"
          fillOpacity="0.2"
        />
        <g filter="url(#filter4_f_0_1)">
          <path
            d="M66 346C66 353.18 60.1797 359 53 359C45.8203 359 40 353.18 40 346C40 338.82 45.8203 333 53 333C60.1797 333 66 338.82 66 346Z"
            fill="#0A0B0C"
          />
          <path
            d="M53 333.5C59.9036 333.5 65.5 339.096 65.5 346C65.5 352.904 59.9036 358.5 53 358.5C46.0964 358.5 40.5 352.904 40.5 346C40.5 339.096 46.0964 333.5 53 333.5Z"
            stroke="#AFAFAF"
            strokeOpacity="0.3"
          />
        </g>
        <path
          d="M212 206C212 219.807 200.807 231 187 231C173.193 231 162 219.807 162 206C162 192.193 173.193 181 187 181C200.807 181 212 192.193 212 206Z"
          fill="black"
          fillOpacity="0.2"
        />
        <g filter="url(#filter6_f_0_1)">
          <path
            d="M207.312 206C207.312 217.218 198.218 226.312 187 226.312C175.782 226.312 166.688 217.218 166.688 206C166.688 194.782 175.782 185.688 187 185.688C198.218 185.688 207.312 194.782 207.312 206Z"
            fill="#0A0B0C"
          />
          <path
            d="M187 186.188C197.942 186.188 206.812 195.058 206.812 206C206.812 216.942 197.942 225.812 187 225.812C176.058 225.812 167.188 216.942 167.188 206C167.188 195.058 176.058 186.188 187 186.188Z"
            stroke="#AFAFAF"
            strokeOpacity="0.3"
          />
        </g>
        <rect
          x="37"
          y="273"
          width="70"
          height="35"
          rx="2"
          fill="#AFAFAF"
          fillOpacity="0.3"
        />
        <g filter="url(#filter7_i_0_1)">
          <rect x="212" y="242" width="100" height="40" rx="2" fill="#101113" />
        </g>
        <g filter="url(#filter8_i_0_1)">
          <rect x="213" y="314" width="380" height="70" rx="2" fill="#1E1E1E" />
        </g>
        <rect x="603" y="341" width="5" height="30" rx="2.5" fill="#1E1E1E" />
        <rect x="611" y="341" width="5" height="30" rx="2.5" fill="#1E1E1E" />
        <rect x="619" y="341" width="5" height="30" rx="2.5" fill="#1E1E1E" />
        <rect x="627" y="341" width="5" height="30" rx="2.5" fill="#1E1E1E" />
        <rect x="635" y="341" width="5" height="30" rx="2.5" fill="#1E1E1E" />
        <rect x="643" y="341" width="5" height="30" rx="2.5" fill="#1E1E1E" />
        <rect x="651" y="341" width="5" height="30" rx="2.5" fill="#1E1E1E" />
        <defs>
          <filter
            id="filter0_d_0_1"
            x="0"
            y="0"
            width="673"
            height="402"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_0_1"
            />
            <feOffset dx="-5" dy="5" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.686699 0 0 0 0 0.686699 0 0 0 0 0.686699 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_i_0_1"
            x="231.5"
            y="7.5"
            width="434"
            height="224"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="5"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_innerShadow_0_1"
            />
            <feOffset dx="10" dy="-10" />
            <feGaussianBlur stdDeviation="2.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.686699 0 0 0 0 0.686699 0 0 0 0 0.686699 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
          <filter
            id="filter2_dd_0_1"
            x="255"
            y="20"
            width="387"
            height="118"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_0_1"
            />
            <feOffset dx="4" dy="-4" />
            <feGaussianBlur stdDeviation="2.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_0_1"
            />
            <feOffset dx="-4" dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.686699 0 0 0 0 0.686699 0 0 0 0 0.686699 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1"
              result="effect2_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_f_0_1"
            x="37"
            y="330"
            width="32"
            height="32"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.5"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <filter
            id="filter6_f_0_1"
            x="163.688"
            y="182.688"
            width="46.625"
            height="46.625"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.5"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <filter
            id="filter7_i_0_1"
            x="212"
            y="240"
            width="102"
            height="42"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="-2" />
            <feGaussianBlur stdDeviation="2.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.686699 0 0 0 0 0.686699 0 0 0 0 0.686699 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
          <filter
            id="filter8_i_0_1"
            x="213"
            y="314"
            width="384"
            height="74"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="10" dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
