import Image from 'next/image';
import {
	GlobeAltIcon,
	MenuIcon,
	SearchIcon,
	UserCircleIcon,
} from '@heroicons/react/solid';

const Header = () => {
	return (
		<header className='sticky top-0 z-50 grid grid-cols-3 shadow-lg p-5 md:px-10'>
			{/* left */}
			<div className='relative flex items-center h-10 cursor-pointer my-auto'>
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
					className=' flex-grow pl-5 outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400'
					type='text'
					placeholder='Start your search'
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
		</header>
	);
};

export default Header;
