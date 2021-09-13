import Image from 'next/image';

const Banner = () => {
	return (
		<div className='relative h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[670px] 2xl:h-[880px]'>
			<Image
				src='https://links.papareact.com/0fm'
				layout='fill'
				objectFit='cover'
			/>
			<div className='absolute top-1/2 w-full text-center'>
				<p className=' text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
				<button
					className='rounded-full text-purple-500 bg-white px-10 py-4 my-3 shadow-md font-bold
           hover:shadow-xl active:scale-90
        '
				>
					I'm flexible
				</button>
			</div>
		</div>
	);
};

export default Banner;
