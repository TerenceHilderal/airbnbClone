import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData }) {
	return (
		<div className=''>
			<Head>
				<title>Airbnb-Clone</title>
				<link rel='icon' href='/airbnbLogo.png' />
			</Head>
			<Header />
			<Banner />

			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
					{/* pull some data from a server -API endpoints */}

					<div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{exploreData.map(({ img, location, distance }) => (
							<SmallCard
								key={location}
								img={img}
								location={location}
								distance={distance}
							/>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch('https://links.papareact.com/pyp')
		.then((res) => res.json())
		.catch((error) => console.error(error));

	return {
		props: {
			exploreData,
		},
	};
}
