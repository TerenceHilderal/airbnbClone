import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Airbnb-Clone</title>
				<link rel='icon' href='/airbnbLogo.png' />
			</Head>
			<Header />

			<Banner />
		</div>
	);
}
