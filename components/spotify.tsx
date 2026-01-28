"use client";

import Image from "next/image";
import AppleMusic from "./apple-music";
import { Play, Pause } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DolbyAtmos from "./dolby-atmos";

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

    const handleMouseUp = () => {
      setIsSeeking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
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
    setIsSeeking(true);
    seekToClientX(event.clientX);
  };

  return (
    <div className="group to-muted/25 from-muted hover:border-foreground relative mt-16 flex gap-4 border border-dotted border-neutral-600 bg-linear-to-bl to-30% p-4 transition-all duration-300 ease-in-out hover:to-75%">
      <DolbyAtmos />
      <audio ref={audioRef} src={AUDIO_SRC} />
      <Image
        src="/img/blow-my-brains-out.jpg"
        alt="Blow My Brains Out"
        width={48}
        height={48}
        className="ring-muted/50 w-36 ring contrast-125"
      />
      <div className="flex w-full flex-col">
        <div className="flex items-center gap-2 pb-2">
          <AppleMusic />
          <Link
            href="https://music.apple.com/in/playlist/been-a-rough-day/pl.u-6mo4lEZtKPgMoBx?ls"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            Been A Rough Day
          </Link>
        </div>
        <Link
          href="https://music.apple.com/in/album/blow-my-brains-out/358119484?i=358119693&ls"
          className="w-fit text-xl font-bold underline-offset-4 hover:underline"
        >
          Blow My Brains Out
        </Link>
        <p>
          <span>by </span>
          <Link
            href="https://music.apple.com/in/artist/tikkle-me/317477566?ls"
            className="underline-offset-4 hover:underline"
          >
            Tikkle Me
          </Link>
        </p>
        <div className="full flex items-center justify-between">
          <div className="text-muted-foreground mt-2 flex items-center gap-2">
            <span>{formatTime(currentTime)}</span>
            <div
              className="flex items-center gap-0"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              <div
                className="flex items-center gap-0"
                ref={progressBarRef}
                onClick={handleProgressClick}
                onMouseDown={handleProgressMouseDown}
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
            <span>{formatTime(duration || 0)}</span>
          </div>
          <div
            className="ring-accent hover:bg-muted/75 bg-muted/50 hover:border-foreground translate-y-1 cursor-pointer p-1 ring transition-all duration-300 ease-in-out active:scale-95"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause size={12} fill="var(--foreground)" stroke="none" />
            ) : (
              <Play size={12} fill="var(--foreground)" stroke="none" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
