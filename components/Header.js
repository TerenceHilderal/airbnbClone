import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
	GlobeAltIcon,
	MenuIcon,
	SearchIcon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const Header = ({ placeholder }) => {
	const [searchInput, setSearchInput] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [numberOfGuests, setNumberOfGuests] = useState(1);

	const router = useRouter();

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const resetInput = () => {
		setSearchInput('');
	};

	const search = () => {
		router.push({
			pathname: '/search',
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				numberOfGuests,
			},
		});
	};

	const selectionRange = {
		startDate,
		endDate,
		key: 'selection',
	};

	return (
		<header className='sticky top-0 bg-white z-50 grid grid-cols-3 shadow-lg p-5 md:px-10'>
			{/* left */}
			<div
				className='relative flex items-center h-10 cursor-pointer my-auto'
				onClick={() => router.push('/')}
			>
				<Image
					src='/airbnb.png'
					layout='fill'
					objectFit='contain'
					objectPosition='left'
					alt=' air bnb logo'
				/>
			</div>

			{/* middle */}
			<div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
				<input
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					className=' flex-grow pl-5 outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400'
					type='text'
					placeholder={placeholder || 'Start your search'}
				/>
				<SearchIcon className=' hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2' />
			</div>

			{/* right */}
			<div className='flex items-center space-x-4 justify-end text-gray-500'>
				<p className='hidden md:inline'>Become a host</p>
				<GlobeAltIcon className='h-6 ' />
				<div className='flex items-center space-x-2 border-2 rounded-full p-2 cursor-pointer'>
					<MenuIcon className='h-6' />
					<UserCircleIcon className='h-6' />
				</div>
			</div>

			{searchInput && (
				<div className='flex flex-col col-span-3 mx-auto mt-1'>
					<DateRangePicker
						ranges={[selectionRange]}
						minDay={new Date()}
						rangeColors={['#FD5B61']}
						onChange={handleSelect}
					/>

					<div className='flex items-center border-b mb-4'>
						<h2 className='text-2xl flex-grow font-semibold'>
							Number of Guests
						</h2>
						<UsersIcon className='h-5' />
						<input
							className='w-12 pl-2 text-lg outline-none text-red-400'
							value={numberOfGuests}
							onChange={(e) => setNumberOfGuests(e.target.value)}
							min={1}
							type='number'
						/>
					</div>

					<div className='flex'>
						<button onClick={resetInput} className='flex-grow text-gray-500'>
							Cancel
						</button>
						<button className='flex-grow text-red-400' onClick={search}>
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
