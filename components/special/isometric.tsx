"use client";

import { motion as m } from "motion/react";
import { useState } from "react";
import { ISO_DOT2_PATH } from "./isometric-paths";

type HOVER_STATE = "TOP" | "MID" | "BOT";

export default function Isometric() {
  const [hovered, setHovered] = useState<HOVER_STATE | null>(null);
  const STROKE_TRANSITION = {
    type: "spring" as const,
    stiffness: 240,
    damping: 24,
    mass: 0.7,
  };
  const LAYER_TRANSITION = {
    type: "spring" as const,
    stiffness: 180,
    damping: 20,
  };
  const HOVER_MOVE_OFFSET = 8;
  const HOVER_ABOVE_GAP_OFFSET = 4;
  const HOVER_TOP_FACE_LIFT = 3;

  const strokeColor = (layer: HOVER_STATE) =>
    hovered === layer ? "var(--color-highlight)" : "var(--muted-foreground)";

  const cardOffset = (layer: HOVER_STATE, offset: number) =>
    hovered === layer ? 0 : offset;

  const hoverHandlers = (layer: HOVER_STATE) => ({
    onMouseEnter: () => setHovered(layer),
    onMouseLeave: () => setHovered(null),
  });

  const layerYOffset = (layer: HOVER_STATE) => {
    if (
      hovered === "BOT" &&
      (layer === "BOT" || layer === "MID" || layer === "TOP")
    ) {
      if (layer === "BOT") return -HOVER_MOVE_OFFSET;
      return -(HOVER_MOVE_OFFSET + HOVER_ABOVE_GAP_OFFSET);
    }

    if (hovered === "MID" && (layer === "MID" || layer === "TOP")) {
      if (layer === "MID") return -HOVER_MOVE_OFFSET;
      return -(HOVER_MOVE_OFFSET + HOVER_ABOVE_GAP_OFFSET);
    }

    if (hovered === "TOP" && layer === "TOP") {
      return -HOVER_MOVE_OFFSET;
    }

    return 0;
  };

  const topFaceYOffset = (layer: HOVER_STATE) =>
    hovered === layer ? -HOVER_TOP_FACE_LIFT : 0;

  return (
    <m.svg
      width="801"
      height="511"
      viewBox="0 0 801 511"
      fill="none"
      className="-translate-24"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <g id="ISOMETRIC">
        <line
          id="BORDERY"
          x1="0.125"
          y1="162.628"
          x2="606.343"
          y2="512.628"
          className="stroke-muted-foreground mask-b-from-75% stroke-[0.5]"
          strokeDasharray="2 2"
        />
        <line
          id="BORDERX"
          x1="299.875"
          y1="482.629"
          x2="735.388"
          y2="236.959"
          className="stroke-muted-foreground mask-b-from-50% stroke-[0.5]"
          strokeDasharray="2 2"
        />
        <g id="MAIN" filter="url(#filter0_d_4_282)">
          <g id="CARDS0">
            <m.path
              animate={{
                stroke: strokeColor("BOT"),
              }}
              transition={STROKE_TRANSITION}
              id="CONNECTION"
              d="M323 251.895L384.522 216.375L450.115 254.245"
              strokeDasharray="1 1"
              className="stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("BOT"),
              }}
              transition={STROKE_TRANSITION}
              id="CARD0"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 243.321 282.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("BOT"),
                attrY: cardOffset("BOT", 10),
                attrX: -cardOffset("BOT", 10),
              }}
              transition={STROKE_TRANSITION}
              id="CARD1"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 243.321 272.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("BOT"),
                attrY: cardOffset("BOT", 20),
                attrX: -cardOffset("BOT", 20),
              }}
              transition={STROKE_TRANSITION}
              id="CARD2"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 243.32 262.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("BOT"),
                attrY: cardOffset("BOT", 30),
                attrX: -cardOffset("BOT", 30),
              }}
              transition={STROKE_TRANSITION}
              id="CARD3"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 243.32 252.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.g
              animate={{
                fill: strokeColor("BOT"),
                y: cardOffset("BOT", 30),
              }}
              transition={STROKE_TRANSITION}
              id="WEB2"
              className="translate-y-0.5"
            >
              <path d="M282.579 248.005L272.916 243.644L273.777 243.147L282.846 247.305L282.749 247.361L276.675 242.594L277.572 242.076L285.829 245.583L285.732 245.639L278.53 240.403L279.391 239.906L286.944 245.485L285.707 246.199L277.608 242.769L277.875 242.615L283.816 247.291L282.579 248.005ZM290.128 243.646L281.52 238.676L286.685 235.694L287.485 236.156L283.144 238.662L286.248 240.454L290.443 238.032L291.231 238.487L287.036 240.909L290.152 242.708L294.59 240.146L295.39 240.608L290.128 243.646ZM298.004 239.099L289.396 234.129L291.76 232.764C292.698 232.223 293.611 231.933 294.5 231.896C295.397 231.854 296.214 232.045 296.949 232.47C297.313 232.68 297.551 232.92 297.665 233.191C297.786 233.457 297.774 233.73 297.628 234.01C297.483 234.281 297.204 234.535 296.792 234.773L296.719 234.731C297.22 234.442 297.737 234.241 298.271 234.129C298.812 234.012 299.334 233.987 299.835 234.052C300.336 234.117 300.797 234.271 301.217 234.514C301.961 234.943 302.292 235.424 302.211 235.956C302.122 236.483 301.625 237.008 300.72 237.531L298.004 239.099ZM298.04 238.168L299.932 237.076C300.611 236.684 300.975 236.315 301.023 235.97C301.072 235.625 300.845 235.307 300.344 235.018C299.851 234.733 299.289 234.61 298.659 234.647C298.036 234.68 297.402 234.883 296.755 235.256L294.876 236.341L298.04 238.168ZM294.088 235.886L295.725 234.941C296.347 234.582 296.687 234.236 296.743 233.905C296.8 233.564 296.586 233.254 296.101 232.974C295.599 232.685 295.054 232.556 294.464 232.589C293.874 232.612 293.243 232.818 292.572 233.205L291.008 234.108L294.088 235.886ZM305.395 234.832C304.813 234.496 304.385 234.137 304.11 233.754C303.835 233.362 303.722 232.909 303.771 232.396C303.811 231.878 304.029 231.262 304.425 230.548C304.635 230.165 304.777 229.841 304.85 229.575C304.922 229.3 304.91 229.059 304.813 228.854C304.716 228.649 304.506 228.453 304.183 228.266C303.851 228.075 303.488 227.949 303.092 227.888C302.696 227.818 302.283 227.823 301.855 227.902C301.435 227.977 301.014 228.135 300.594 228.378C299.947 228.751 299.604 229.15 299.563 229.575C299.523 230 299.782 230.429 300.339 230.863L299.418 231.325C298.666 230.779 298.315 230.203 298.363 229.596C298.412 228.989 298.884 228.427 299.782 227.909C300.364 227.573 300.97 227.349 301.6 227.237C302.223 227.12 302.829 227.106 303.419 227.195C304.009 227.284 304.547 227.468 305.032 227.748C305.476 228.005 305.779 228.273 305.941 228.553C306.102 228.824 306.143 229.141 306.062 229.505C305.981 229.86 305.799 230.291 305.516 230.8C305.25 231.281 305.084 231.717 305.019 232.109C304.947 232.496 304.963 232.832 305.068 233.117C305.173 233.402 305.351 233.626 305.601 233.789L310.584 230.912L311.385 231.374L305.395 234.832Z" />
            </m.g>
          </g>
          <g id="CARDS1">
            <m.path
              animate={{
                stroke: strokeColor("MID"),
              }}
              transition={STROKE_TRANSITION}
              id="CONNECTION_2"
              d="M254 211.895L342.335 160.895L477.209 238.765"
              strokeDasharray="2 2"
              className="stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("MID"),
              }}
              transition={STROKE_TRANSITION}
              id="CARD0_2"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 174.321 242.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("MID"),
                attrY: cardOffset("MID", 10),
                attrX: -cardOffset("MID", 10),
              }}
              transition={STROKE_TRANSITION}
              id="CARD1_2"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 174.321 232.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("MID"),
                attrY: cardOffset("MID", 20),
                attrX: -cardOffset("MID", 20),
              }}
              transition={STROKE_TRANSITION}
              id="CARD2_2"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 174.321 222.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("MID"),
                attrY: cardOffset("MID", 30),
                attrX: -cardOffset("MID", 30),
              }}
              transition={STROKE_TRANSITION}
              id="CARD3_2"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 174.32 212.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.g
              animate={{
                fill: strokeColor("MID"),
                y: cardOffset("MID", 30),
              }}
              transition={STROKE_TRANSITION}
              id="DESIGN"
              className="translate-y-0.5"
            >
              <path d="M205.252 213.194L196.644 208.224L198.571 207.111C199.331 206.672 200.16 206.39 201.057 206.264C201.946 206.133 202.863 206.168 203.809 206.369C204.755 206.56 205.688 206.922 206.61 207.454C207.531 207.986 208.158 208.525 208.489 209.071C208.829 209.612 208.885 210.139 208.659 210.653C208.433 211.166 207.939 211.642 207.18 212.081L205.252 213.194ZM205.276 212.256L206.319 211.654C207.248 211.117 207.669 210.534 207.58 209.904C207.499 209.269 206.885 208.62 205.737 207.958C204.581 207.29 203.453 206.933 202.354 206.887C201.255 206.831 200.241 207.071 199.311 207.608L198.268 208.21L205.276 212.256ZM213.128 208.646L204.52 203.676L209.685 200.694L210.485 201.156L206.144 203.662L209.248 205.454L213.443 203.032L214.231 203.487L210.036 205.909L213.152 207.708L217.59 205.146L218.39 205.608L213.128 208.646ZM223.829 202.692C223.239 203.033 222.584 203.266 221.865 203.392C221.154 203.513 220.438 203.53 219.719 203.441C219 203.343 218.345 203.142 217.755 202.839L218.555 202.307C219.016 202.536 219.513 202.687 220.046 202.762C220.58 202.827 221.101 202.816 221.61 202.727C222.128 202.634 222.605 202.461 223.041 202.209C223.461 201.966 223.764 201.726 223.95 201.488C224.136 201.241 224.197 201.005 224.132 200.781C224.076 200.552 223.89 200.347 223.574 200.165C223.283 199.997 222.96 199.89 222.605 199.843C222.249 199.787 221.8 199.808 221.259 199.906C220.709 199.999 219.994 200.193 219.113 200.487C218.361 200.734 217.702 200.909 217.136 201.012C216.563 201.11 216.045 201.129 215.585 201.068C215.124 200.998 214.675 200.837 214.239 200.585C213.778 200.319 213.483 200.018 213.354 199.682C213.224 199.346 213.265 199.001 213.475 198.646C213.685 198.282 214.081 197.932 214.663 197.596C215.253 197.255 215.884 197.036 216.554 196.938C217.217 196.835 217.872 196.835 218.519 196.938C219.157 197.036 219.743 197.216 220.277 197.477L219.476 198.009C219.08 197.818 218.648 197.685 218.179 197.61C217.718 197.531 217.254 197.528 216.785 197.603C216.324 197.673 215.88 197.832 215.451 198.079C214.861 198.42 214.534 198.772 214.469 199.136C214.413 199.495 214.615 199.808 215.075 200.074C215.366 200.242 215.669 200.347 215.985 200.389C216.308 200.426 216.696 200.398 217.149 200.305C217.601 200.202 218.183 200.034 218.894 199.801C219.824 199.498 220.62 199.295 221.283 199.192C221.946 199.08 222.528 199.071 223.029 199.164C223.53 199.248 224.007 199.421 224.46 199.682C224.92 199.948 225.199 200.254 225.296 200.599C225.385 200.94 225.304 201.294 225.054 201.663C224.803 202.022 224.395 202.365 223.829 202.692ZM228.759 199.622L227.959 199.16L230.178 197.879L223.17 193.833L220.951 195.114L220.151 194.652L225.413 191.614L226.213 192.076L223.994 193.357L231.002 197.403L233.221 196.122L234.021 196.584L228.759 199.622ZM239.448 193.675C238.834 194.029 238.122 194.244 237.314 194.319C236.498 194.389 235.621 194.307 234.683 194.074C233.745 193.84 232.796 193.446 231.834 192.891C230.912 192.359 230.246 191.824 229.833 191.288C229.421 190.751 229.263 190.24 229.36 189.755C229.457 189.269 229.829 188.84 230.476 188.467C231.001 188.163 231.575 187.963 232.198 187.865C232.82 187.767 233.471 187.76 234.15 187.844C234.837 187.923 235.52 188.089 236.199 188.341L235.41 188.88C234.635 188.609 233.895 188.471 233.192 188.467C232.489 188.453 231.854 188.609 231.288 188.936C230.819 189.206 230.565 189.526 230.524 189.895C230.476 190.259 230.638 190.655 231.009 191.085C231.373 191.509 231.939 191.943 232.707 192.387C233.475 192.83 234.226 193.157 234.962 193.367C235.697 193.577 236.38 193.668 237.011 193.64C237.649 193.607 238.215 193.448 238.708 193.164C239.145 192.912 239.403 192.627 239.484 192.31C239.565 191.983 239.484 191.642 239.242 191.288C238.991 190.928 238.599 190.585 238.066 190.259L235.859 191.533L235.083 191.085L238.054 189.37L242.285 191.813L241.533 192.247L239.278 190.987L239.569 190.903C239.917 191.225 240.163 191.549 240.309 191.876C240.454 192.202 240.462 192.52 240.333 192.828C240.196 193.131 239.901 193.413 239.448 193.675ZM244.39 190.597L235.782 185.627L236.958 184.948L248.161 187.37L240.462 182.925L241.286 182.449L249.894 187.419L248.718 188.098L237.515 185.676L245.214 190.121L244.39 190.597Z" />
            </m.g>
          </g>
          <g id="CARDS2">
            <m.path
              animate={{
                stroke: strokeColor("TOP"),
              }}
              transition={STROKE_TRANSITION}
              id="CONNECTION_3"
              d="M182 174.845L300.645 106.345L508.266 226.215"
              strokeDasharray="2 2"
              className="stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("TOP"),
              }}
              transition={STROKE_TRANSITION}
              id="CARD0_3"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 106.321 203.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("TOP"),
                attrY: cardOffset("TOP", 10),
                attrX: -cardOffset("TOP", 10),
              }}
              transition={STROKE_TRANSITION}
              id="CARD1_3"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 106.321 193.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("TOP"),
                attrY: cardOffset("TOP", 20),
                attrX: -cardOffset("TOP", 20),
              }}
              transition={STROKE_TRANSITION}
              id="CARD2_3"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 106.321 183.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.rect
              animate={{
                stroke: strokeColor("TOP"),
                attrY: cardOffset("TOP", 30),
                attrX: -cardOffset("TOP", 30),
              }}
              transition={STROKE_TRANSITION}
              id="CARD3_3"
              x="0.433013"
              width="79.5"
              height="31.5"
              transform="matrix(0.866025 -0.5 0.866025 0.5 106.32 173.061)"
              strokeDasharray="2 2"
              className="fill-background stroke-[0.5]"
            />
            <m.g
              animate={{
                fill: strokeColor("TOP"),
                y: cardOffset("TOP", 30),
              }}
              transition={STROKE_TRANSITION}
              id="WEB3"
              className="translate-y-0.5"
            >
              <path d="M145.579 169.005L135.916 164.644L136.777 164.147L145.846 168.305L145.749 168.361L139.675 163.594L140.572 163.076L148.829 166.583L148.732 166.639L141.53 161.403L142.391 160.906L149.944 166.485L148.707 167.199L140.608 163.769L140.875 163.615L146.816 168.291L145.579 169.005ZM153.128 164.646L144.52 159.676L149.685 156.694L150.485 157.156L146.144 159.662L149.248 161.454L153.443 159.032L154.231 159.487L150.036 161.909L153.152 163.708L157.59 161.146L158.39 161.608L153.128 164.646ZM161.004 160.099L152.396 155.129L154.76 153.764C155.698 153.223 156.611 152.933 157.5 152.896C158.397 152.854 159.214 153.045 159.949 153.47C160.313 153.68 160.551 153.92 160.665 154.191C160.786 154.457 160.774 154.73 160.628 155.01C160.483 155.281 160.204 155.535 159.792 155.773L159.719 155.731C160.22 155.442 160.737 155.241 161.271 155.129C161.812 155.012 162.334 154.987 162.835 155.052C163.336 155.117 163.797 155.271 164.217 155.514C164.961 155.943 165.292 156.424 165.211 156.956C165.122 157.483 164.625 158.008 163.72 158.531L161.004 160.099ZM161.04 159.168L162.932 158.076C163.611 157.684 163.975 157.315 164.023 156.97C164.072 156.625 163.845 156.307 163.344 156.018C162.851 155.733 162.289 155.61 161.659 155.647C161.036 155.68 160.402 155.883 159.755 156.256L157.876 157.341L161.04 159.168ZM157.088 156.886L158.725 155.941C159.347 155.582 159.687 155.236 159.743 154.905C159.8 154.564 159.586 154.254 159.101 153.974C158.599 153.685 158.054 153.556 157.464 153.589C156.874 153.612 156.243 153.818 155.572 154.205L154.008 155.108L157.088 156.886ZM171.548 154.236C170.642 154.759 169.717 155.041 168.771 155.083C167.817 155.12 166.965 154.95 166.213 154.572L167.001 154.047C167.607 154.332 168.234 154.441 168.88 154.376C169.527 154.311 170.145 154.108 170.735 153.767C171.123 153.543 171.418 153.303 171.62 153.046C171.822 152.78 171.891 152.516 171.826 152.255C171.762 151.984 171.523 151.73 171.111 151.492C170.715 151.263 170.295 151.128 169.85 151.086C169.406 151.035 168.953 151.063 168.492 151.17C168.032 151.277 167.595 151.45 167.183 151.688L166.455 152.108L165.655 151.646L166.383 151.226C166.73 151.025 166.989 150.815 167.159 150.596C167.336 150.372 167.397 150.15 167.34 149.931C167.276 149.707 167.078 149.499 166.746 149.308C166.261 149.028 165.728 148.907 165.146 148.944C164.564 148.972 163.99 149.149 163.424 149.476C162.867 149.798 162.547 150.122 162.466 150.449C162.386 150.766 162.519 151.067 162.867 151.352L161.945 151.814C161.404 151.399 161.181 150.944 161.278 150.449C161.367 149.95 161.812 149.469 162.612 149.007C163.145 148.699 163.703 148.484 164.285 148.363C164.875 148.237 165.453 148.211 166.019 148.286C166.585 148.351 167.102 148.519 167.571 148.79C168.112 149.103 168.379 149.457 168.371 149.854C168.355 150.246 168.072 150.666 167.522 151.114L167.304 150.988C168.104 150.629 168.929 150.451 169.777 150.456C170.626 150.451 171.366 150.631 171.996 150.995C172.53 151.303 172.857 151.646 172.978 152.024C173.108 152.397 173.047 152.778 172.796 153.165C172.546 153.543 172.13 153.9 171.548 154.236Z" />
            </m.g>
          </g>
          <g id="STACK">
            <g id="BASE">
              <mask id="path-18-inside-1_4_282" fill="white">
                <path d="M416 265.968L443.406 250.711L470.811 235.453L498.217 220.196L525.623 204.939L634 265.664L525.623 327.939L416 265.968Z" />
              </mask>
              <path
                d="M416 265.968L443.406 250.711L470.811 235.453L498.217 220.196L525.623 204.939L634 265.664L525.623 327.939L416 265.968Z"
                className="fill-background stroke-muted-foreground"
                strokeDasharray="1 1"
                mask="url(#path-18-inside-1_4_282)"
              />
            </g>
            <m.g
              id="BOT"
              {...hoverHandlers("BOT")}
              animate={{ y: layerYOffset("BOT") }}
              transition={LAYER_TRANSITION}
            >
              <g id="LEFT">
                <mask id="path-19-inside-2_4_282" fill="white">
                  <path d="M452.5 261.092L523.5 302.073C524.167 302.458 525 301.977 525 301.207L525 280.857C525 280.5 524.81 280.171 524.502 279.992L453.502 238.81C452.835 238.423 452 238.904 452 239.675L452 260.226C452 260.583 452.191 260.913 452.5 261.092Z" />
                </mask>
                <m.path
                  animate={{
                    stroke: strokeColor("BOT"),
                  }}
                  transition={STROKE_TRANSITION}
                  d="M452.5 261.092L523.5 302.073C524.167 302.458 525 301.977 525 301.207L525 280.857C525 280.5 524.81 280.171 524.502 279.992L453.502 238.81C452.835 238.423 452 238.904 452 239.675L452 260.226C452 260.583 452.191 260.913 452.5 261.092Z"
                  mask="url(#path-19-inside-2_4_282)"
                  className="fill-background"
                />
              </g>
              <m.g
                id="TOP"
                animate={{ y: topFaceYOffset("BOT") }}
                transition={LAYER_TRANSITION}
              >
                <mask id="path-20-inside-3_4_282" fill="white">
                  <path d="M452.55 238.994C451.871 238.61 451.874 237.63 452.556 237.25L524.432 197.207C524.735 197.038 525.105 197.038 525.408 197.208L596.464 237.051C597.141 237.43 597.146 238.403 596.473 238.79L525.414 279.65C525.108 279.827 524.731 279.828 524.424 279.654L452.55 238.994Z" />
                </mask>
                <m.path
                  animate={{
                    stroke: strokeColor("BOT"),
                  }}
                  transition={STROKE_TRANSITION}
                  d="M452.55 238.994C451.871 238.61 451.874 237.63 452.556 237.25L524.432 197.207C524.735 197.038 525.105 197.038 525.408 197.208L596.464 237.051C597.141 237.43 597.146 238.403 596.473 238.79L525.414 279.65C525.108 279.827 524.731 279.828 524.424 279.654L452.55 238.994Z"
                  mask="url(#path-20-inside-3_4_282)"
                  className="fill-background"
                />
              </m.g>
              <g id="RIGHT">
                <mask id="path-21-inside-4_4_282" fill="white">
                  <path d="M525 280.651C525 280.294 525.191 279.964 525.5 279.785L596.5 238.804C597.167 238.42 598 238.901 598 239.671L598 260.021C598 260.377 597.81 260.707 597.502 260.886L526.502 302.068C525.835 302.454 525 301.973 525 301.203L525 280.651Z" />
                </mask>
                <m.path
                  animate={{
                    stroke: strokeColor("BOT"),
                  }}
                  transition={STROKE_TRANSITION}
                  d="M525 280.651C525 280.294 525.191 279.964 525.5 279.785L596.5 238.804C597.167 238.42 598 238.901 598 239.671L598 260.021C598 260.377 597.81 260.707 597.502 260.886L526.502 302.068C525.835 302.454 525 301.973 525 301.203L525 280.651Z"
                  mask="url(#path-21-inside-4_4_282)"
                  className="fill-background"
                />
              </g>
            </m.g>
            <m.g
              id="MID"
              {...hoverHandlers("MID")}
              animate={{ y: layerYOffset("MID") }}
              transition={LAYER_TRANSITION}
            >
              <g id="LEFT">
                <mask id="path-22-inside-5_4_282" fill="white">
                  <path d="M452.5 231.092L523.5 272.073C524.167 272.458 525 271.977 525 271.207L525 250.857C525 250.5 524.81 250.171 524.502 249.992L453.502 208.81C452.835 208.423 452 208.904 452 209.675L452 230.226C452 230.583 452.191 230.913 452.5 231.092Z" />
                </mask>
                <m.path
                  animate={{
                    stroke: strokeColor("MID"),
                  }}
                  transition={STROKE_TRANSITION}
                  d="M452.5 231.092L523.5 272.073C524.167 272.458 525 271.977 525 271.207L525 250.857C525 250.5 524.81 250.171 524.502 249.992L453.502 208.81C452.835 208.423 452 208.904 452 209.675L452 230.226C452 230.583 452.191 230.913 452.5 231.092Z"
                  mask="url(#path-22-inside-5_4_282)"
                  className="fill-background"
                />
              </g>
              <m.g
                id="TOP"
                animate={{ y: topFaceYOffset("MID") }}
                transition={LAYER_TRANSITION}
              >
                <mask id="path-23-inside-6_4_282" fill="white">
                  <path d="M452.55 208.994C451.871 208.61 451.874 207.63 452.556 207.25L524.432 167.207C524.735 167.038 525.105 167.038 525.408 167.208L596.464 207.051C597.141 207.43 597.146 208.403 596.473 208.79L525.414 249.65C525.108 249.827 524.731 249.828 524.424 249.654L452.55 208.994Z" />
                </mask>
                <m.path
                  animate={{
                    stroke: strokeColor("MID"),
                  }}
                  transition={STROKE_TRANSITION}
                  d="M452.55 208.994C451.871 208.61 451.874 207.63 452.556 207.25L524.432 167.207C524.735 167.038 525.105 167.038 525.408 167.208L596.464 207.051C597.141 207.43 597.146 208.403 596.473 208.79L525.414 249.65C525.108 249.827 524.731 249.828 524.424 249.654L452.55 208.994Z"
                  mask="url(#path-23-inside-6_4_282)"
                  className="fill-background"
                />
              </m.g>
              <g id="RIGHT">
                <mask id="path-24-inside-7_4_282" fill="white">
                  <path d="M525 250.651C525 250.294 525.191 249.964 525.5 249.785L596.5 208.804C597.167 208.42 598 208.901 598 209.671L598 230.021C598 230.377 597.81 230.707 597.502 230.886L526.502 272.068C525.835 272.454 525 271.973 525 271.203L525 250.651Z" />
                </mask>
                <m.path
                  animate={{
                    stroke: strokeColor("MID"),
                  }}
                  transition={STROKE_TRANSITION}
                  d="M525 250.651C525 250.294 525.191 249.964 525.5 249.785L596.5 208.804C597.167 208.42 598 208.901 598 209.671L598 230.021C598 230.377 597.81 230.707 597.502 230.886L526.502 272.068C525.835 272.454 525 271.973 525 271.203L525 250.651Z"
                  mask="url(#path-24-inside-7_4_282)"
                  className="fill-background"
                />
              </g>
            </m.g>
            <m.g
              id="TOP-BOX"
              {...hoverHandlers("TOP")}
              animate={{ y: layerYOffset("TOP") }}
              transition={LAYER_TRANSITION}
            >
              <m.g
                id="TOP"
                animate={{ y: topFaceYOffset("TOP") }}
                transition={LAYER_TRANSITION}
              >
                <g id="LEFT">
                  <mask id="path-25-inside-8_4_282" fill="white">
                    <path d="M452.5 201.092L523.5 242.073C524.167 242.458 525 241.977 525 241.207L525 220.857C525 220.5 524.81 220.171 524.502 219.992L453.502 178.81C452.835 178.423 452 178.904 452 179.675L452 200.226C452 200.583 452.191 200.913 452.5 201.092Z" />
                  </mask>
                  <m.path
                    animate={{
                      stroke: strokeColor("TOP"),
                    }}
                    transition={STROKE_TRANSITION}
                    d="M452.5 201.092L523.5 242.073C524.167 242.458 525 241.977 525 241.207L525 220.857C525 220.5 524.81 220.171 524.502 219.992L453.502 178.81C452.835 178.423 452 178.904 452 179.675L452 200.226C452 200.583 452.191 200.913 452.5 201.092Z"
                    mask="url(#path-25-inside-8_4_282)"
                    className="fill-background"
                  />
                </g>
                <g id="TOP">
                  <mask id="path-26-inside-9_4_282" fill="white">
                    <path d="M452.55 178.994C451.871 178.61 451.874 177.63 452.556 177.25L524.432 137.207C524.735 137.038 525.105 137.038 525.408 137.208L596.464 177.051C597.141 177.43 597.146 178.403 596.473 178.79L525.414 219.65C525.108 219.827 524.731 219.828 524.424 219.654L452.55 178.994Z" />
                  </mask>
                  <m.path
                    animate={{
                      stroke: strokeColor("TOP"),
                    }}
                    transition={STROKE_TRANSITION}
                    d="M452.55 178.994C451.871 178.61 451.874 177.63 452.556 177.25L524.432 137.207C524.735 137.038 525.105 137.038 525.408 137.208L596.464 177.051C597.141 177.43 597.146 178.403 596.473 178.79L525.414 219.65C525.108 219.827 524.731 219.828 524.424 219.654L452.55 178.994Z"
                    mask="url(#path-26-inside-9_4_282)"
                    className="fill-background"
                  />
                </g>
                <g id="RIGHT">
                  <mask id="path-27-inside-10_4_282" fill="white">
                    <path d="M525 220.651C525 220.294 525.191 219.964 525.5 219.785L596.5 178.804C597.167 178.42 598 178.901 598 179.671L598 200.021C598 200.377 597.81 200.707 597.502 200.886L526.502 242.068C525.835 242.454 525 241.973 525 241.203L525 220.651Z" />
                  </mask>
                  <m.path
                    animate={{
                      stroke: strokeColor("TOP"),
                    }}
                    transition={STROKE_TRANSITION}
                    d="M525 220.651C525 220.294 525.191 219.964 525.5 219.785L596.5 178.804C597.167 178.42 598 178.901 598 179.671L598 200.021C598 200.377 597.81 200.707 597.502 200.886L526.502 242.068C525.835 242.454 525 241.973 525 241.203L525 220.651Z"
                    mask="url(#path-27-inside-10_4_282)"
                    className="fill-background"
                  />
                </g>
              </m.g>
              <m.g
                id="DISC"
                filter="url(#filter1_d_4_282)"
                animate={{
                  y: hovered === "TOP" ? -2 : 0,
                }}
                transition={LAYER_TRANSITION}
              >
                <g id="CIRCLE">
                  <mask id="path-28-inside-11_4_282" fill="white">
                    <path d="M563.971 179.439C563.971 191.865 546.063 201.939 523.971 201.939C501.88 201.939 483.971 191.865 483.971 179.439C483.971 167.012 501.88 156.939 523.971 156.939C546.063 156.939 563.971 167.012 563.971 179.439Z" />
                  </mask>
                  <path
                    d="M563.971 179.439C563.971 191.865 546.063 201.939 523.971 201.939C501.88 201.939 483.971 191.865 483.971 179.439C483.971 167.012 501.88 156.939 523.971 156.939C546.063 156.939 563.971 167.012 563.971 179.439Z"
                    strokeDasharray="1 1"
                    className="stroke-muted-foreground"
                    mask="url(#path-28-inside-11_4_282)"
                  />
                </g>

                <m.g id="LOGO">
                  <rect
                    id="DOT9"
                    x="0.433013"
                    width="4.5"
                    height="4.5"
                    transform="matrix(0.866025 -0.5 0.866025 0.5 537.402 180.155)"
                    className="stroke-accent-foreground stroke-[0.5]"
                  />
                  <rect
                    id="DOT8"
                    x="0.433013"
                    width="4.5"
                    height="4.5"
                    rx="0.75"
                    transform="matrix(0.866025 -0.5 0.866025 0.5 513.153 187.155)"
                    className="stroke-accent-foreground stroke-[0.5]"
                  />
                  <g id="DOT7">
                    <mask id="path-31-inside-12_4_282" fill="white">
                      <path d="M517.426 182.439L517.426 179.939L519.591 178.689L527.818 183.439L523.488 185.939L517.426 182.439Z" />
                    </mask>
                    <path
                      d="M517.426 182.439L517.426 179.939L519.591 178.689L527.818 183.439L523.488 185.939L517.426 182.439Z"
                      className="stroke-accent-foreground stroke-1"
                      mask="url(#path-31-inside-12_4_282)"
                    />
                  </g>
                  <rect
                    id="DOT6"
                    x="0.433013"
                    width="4.5"
                    height="4.5"
                    transform="matrix(0.866025 -0.5 0.866025 0.5 531.34 176.655)"
                    className="stroke-accent-foreground stroke-[0.5]"
                  />
                  <rect
                    id="DOT5"
                    x="0.433013"
                    width="4.5"
                    height="4.5"
                    transform="matrix(0.866025 -0.5 0.866025 0.5 507.091 183.655)"
                    className="stroke-accent-foreground stroke-[0.5]"
                  />
                  <rect
                    id="DOT4"
                    x="0.433013"
                    width="4.5"
                    height="4.5"
                    transform="matrix(0.866025 -0.5 0.866025 0.5 519.216 176.655)"
                    className="stroke-accent-foreground stroke-[0.5]"
                  />
                  <rect
                    id="DOT3"
                    x="0.433013"
                    width="4.5"
                    height="4.5"
                    rx="0.75"
                    transform="matrix(0.866025 -0.5 0.866025 0.5 525.278 173.155)"
                    className="stroke-accent-foreground stroke-[0.5]"
                  />
                  <path
                    id="DOT2"
                    d={ISO_DOT2_PATH}
                    className="fill-accent-foreground"
                  />
                  <rect
                    id="DOT1"
                    x="0.433013"
                    width="4.5"
                    height="4.5"
                    transform="matrix(0.866025 -0.5 0.866025 0.5 519.216 169.655)"
                    className="stroke-accent-foreground stroke-[0.5]"
                  />
                  <rect
                    id="DOT0"
                    x="0.433013"
                    width="4.5"
                    height="4.5"
                    transform="matrix(0.866025 -0.5 0.866025 0.5 519.216 190.655)"
                    className="stroke-accent-foreground stroke-[0.5]"
                  />
                </m.g>
              </m.g>
            </m.g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_4_282"
          x="51.8379"
          y="80.4161"
          width="652.182"
          height="346.288"
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
          <feOffset dx="7.79768" dy="36.5436" />
          <feGaussianBlur stdDeviation="31.1111" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4_282"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4_282"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_4_282"
          x="480.957"
          y="153.031"
          width="89.2444"
          height="54.2444"
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
          <feOffset dx="0.579256" dy="2.71467" />
          <feGaussianBlur stdDeviation="2.31111" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4_282"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4_282"
            result="shape"
          />
        </filter>
      </defs>
    </m.svg>
  );
}
