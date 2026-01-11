'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const token =
	'BQCZylfeswlhPp-s76IWMwrdy_eeIRiELGvTa4qK81V1Lyk99dYly5kMmOfigmh3H8Bg12ifQ6jmjvYDCtjyuzsUBH2Em6e1vWKGyK5e9UxCw57kLu-KnzonQbYcKIfr7cI9zbSy7-eRyk3eG5sugyXuL6X0Yby3u9C6GKGs7EYfCl720OvPMMrAtIvv7_vETul2pu8cgFx-pbQzqIKp6sgEWruzz-Y2GFbCer939m1R6MBVPNuwQmW9Pzai2lKk2u2jW5oFZYr0uMFBzGxtDPWaWB2eoJDkQrcLu-UmyLC5ocgjJtHkt5HdJBfwxLNl0-27';

export type ExternalUrls = { spotify: string };

export type Image = {
	height: number;
	url: string;
	width: number;
};

export type Artist = {
	external_urls: ExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
};

export type Album = {
	album_type: string;
	artists: Artist[];
	available_markets: string[];
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[];
	is_playable?: boolean;
	name: string;
	release_date: string;
	release_date_precision: string;
	total_tracks: number;
	type: string;
	uri: string;
};

export type ExternalIds = { isrc?: string };

export type TopTrackItem = {
	album: Album;
	artists: Artist[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids?: ExternalIds;
	external_urls: ExternalUrls;
	href: string;
	id: string;
	is_local: boolean;
	is_playable?: boolean;
	name: string;
	popularity: number;
	preview_url?: string | null;
	track_number: number;
	type: string;
	uri: string;
};

export type TopTrackType = {
	items: TopTrackItem[];
	total: number;
	limit: number;
	offset: number;
	href: string;
	next?: string | null;
	previous?: string | null;
};

export default function Spotify() {
	const [topTrack, setTopTrack] = useState<TopTrackType>();

	useEffect(() => {
		(async (): Promise<void> => {
			try {
				const res = await axios.get<TopTrackType>(
					'https://api.spotify.com/v1/me/player/recently-played?limit=1',
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				setTopTrack(res.data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	if (!topTrack) return null;

	return (
		<div className='space-y-4 py-4 px-6 flex flex-col justify-center w-fit border border-dotted border-neutral-600 hover:border-orange-400 transition-colors duration-300 ease-in-out group'>
			<h1 className='text-sm text-center'>listening rn</h1>
			<div>
				<Link
					href={topTrack.items[0].external_urls.spotify}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h1 className='text-xs space-x-2 text-neutral-400'>
						<span>listening:</span>
						<span className='group-hover:text-orange-400 transition-colors duration-300 ease-in-out hover:underline'>
							{topTrack?.items[0]?.name.toLowerCase()}
						</span>
					</h1>
				</Link>
				<div className='text-xs text-neutral-400 flex flex-wrap gap-3'>
					<span>by:</span>
					{topTrack?.items[0]?.artists.map((artist) => (
						<Link
							key={artist.id}
							href={artist.external_urls.spotify}
							target='_blank'
							rel='noopener noreferrer'
							className='hover:underline flex items-center'
						>
							<span>{artist.name.toLowerCase()}</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
