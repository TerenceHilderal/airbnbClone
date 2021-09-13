const Footer = () => {
	return (
		<div
			className=' grid grid-cols-1 md:grid-cols-4
    gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'
		>
			<div className='space-y-4 text-xs text-gray-800'>
				<h5 className='font-bold'> ABOUT</h5>
				<p>How Airbnb works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>

			<div className='space-y-4 text-xs text-gray-800'>
				<h5 className='font-bold'> COMMUNITY</h5>
				<p>Térence Hilderal</p>
				<p>It's not a real site</p>
				<p>Its just an awesome clone</p>
				<p>I know you're impressed</p>
				<p>terencehdl@gmail.com</p>
			</div>

			<div className='space-y-4 text-xs text-gray-800'>
				<h5 className='font-bold'> FREELANCING</h5>
				<p> I'm Térence Hilderal</p>
				<p>Here you can</p>
				<p>Find all my projects</p>
				<p>Checkit out:</p>
				<p>https://github.com/TerenceHilderal</p>
			</div>

			<div className='space-y-4 text-xs text-gray-800'>
				<h5 className='font-bold'> SUPPORT</h5>
				<p> I'm Térence Hilderal</p>
				<p>I'm a React/Next Developer</p>
				<p>Freelance of course</p>
				<p>Add me to your team</p>
				<p>terencehdl@gmail.com</p>
			</div>
		</div>
	);
};

export default Footer;
