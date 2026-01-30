"use client";

import Image from "next/image";
import AppleMusic from "./apple-music";
import { Play, Pause } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/music/Tikkle Me - Blow My Brains Out.ogx";
const SEGMENTS = 18;
const FILLED_CHAR = "▓";
const EMPTY_CHAR = "▒";

export default function Spotify() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      if (!Number.isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      if (!isSeeking) {
        setCurrentTime(audio.currentTime || 0);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isSeeking]);

  useEffect(() => {
    if (!isSeeking) return;

    const handleMouseMove = (event: MouseEvent) => {
      seekToClientX(event.clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        seekToClientX(event.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      setIsSeeking(false);
    };

    const handleTouchEnd = () => {
      setIsSeeking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isSeeking, duration]);

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  const progress =
    duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0;
  const activeSegments = Math.round(progress * SEGMENTS);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // ignore play errors (e.g. autoplay restrictions)
        });
    }
  };

  const seekToClientX = (clientX: number) => {
    const bar = progressBarRef.current;
    const audio = audioRef.current;
    if (!bar || !audio || duration <= 0) return;

    const rect = bar.getBoundingClientRect();
    if (rect.width === 0) return;

    let ratio = (clientX - rect.left) / rect.width;
    ratio = Math.min(1, Math.max(0, ratio));

    const newTime = ratio * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    seekToClientX(event.clientX);
  };

  const handleProgressMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsSeeking(true);
    seekToClientX(event.clientX);
  };

  const handleProgressTouchStart = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    setIsSeeking(true);
    if (event.touches.length > 0) {
      seekToClientX(event.touches[0].clientX);
    }
  };

  return (
    <div className="group to-muted/25 from-muted hover:to-muted/50 relative mt-8 overflow-hidden border border-dotted border-neutral-600 bg-linear-to-bl to-30% p-3 transition-all duration-300 ease-in-out sm:mt-16 sm:p-4">
      <audio ref={audioRef} src={AUDIO_SRC} />
      <div className="flex gap-3 sm:gap-4">
        <div className="flex shrink-0 items-center self-stretch">
          <Image
            src="/img/blow-my-brains-out.jpg"
            alt="Blow My Brains Out"
            width={144}
            height={144}
            className="ring-muted/50 h-auto w-24 object-cover ring contrast-125 saturate-100 md:w-28"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div className="space-y-0.5 sm:space-y-1">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <AppleMusic />
              <Link
                href="https://music.apple.com/in/playlist/rest-in-noise/pl.u-6mo4lEZtKPgMoBx"
                target="_blank"
                className="truncate text-xs underline-offset-4 hover:underline sm:text-sm"
              >
                Rest In Noise
              </Link>
            </div>
            <div>
              <Link
                href="https://music.apple.com/in/album/blow-my-brains-out/358119484?i=358119693&ls"
                className="line-clamp-1 block text-base font-bold underline-offset-4 hover:underline sm:line-clamp-2 sm:text-lg md:text-xl"
              >
                Blow My Brains Out
              </Link>
            </div>
            <p className="truncate text-xs sm:text-sm md:text-base">
              <span>by </span>
              <Link
                href="https://music.apple.com/in/artist/tikkle-me/317477566?ls"
                className="underline-offset-4 hover:underline"
              >
                Tikkle Me
              </Link>
            </p>
          </div>

          <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3 sm:gap-4">
            <div className="text-muted-foreground flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2">
              <span className="shrink-0 text-xs">
                {formatTime(currentTime)}
              </span>
              <div
                className="flex min-w-0 flex-1 items-center gap-0"
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  userSelect: "none",
                }}
              >
                <div
                  className="flex cursor-pointer touch-none items-center gap-0 text-xs sm:text-sm"
                  ref={progressBarRef}
                  onClick={handleProgressClick}
                  onMouseDown={handleProgressMouseDown}
                  onTouchStart={handleProgressTouchStart}
                >
                  <span>[</span>
                  {Array.from({ length: SEGMENTS }).map((_, index) => (
                    <span
                      key={index}
                      style={{
                        color:
                          index < activeSegments
                            ? "hsl(var(--primary))"
                            : "currentColor",
                      }}
                    >
                      {index < activeSegments ? FILLED_CHAR : EMPTY_CHAR}
                    </span>
                  ))}
                  <span>]</span>
                </div>
              </div>
              <span className="shrink-0 text-xs">
                {formatTime(duration || 0)}
              </span>
            </div>
            <div
              className="ring-accent hover:bg-muted bg-muted/50 hover:border-foreground shrink-0 cursor-pointer rounded-full p-1.5 ring transition-all duration-300 ease-in-out active:scale-75 sm:p-1 sm:active:scale-50"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause
                  size={14}
                  className="fill-foreground stroke-none sm:h-3 sm:w-3"
                />
              ) : (
                <Play
                  size={14}
                  className="fill-foreground stroke-none sm:h-3 sm:w-3"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
