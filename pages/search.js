import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

const Search = () => {
	const router = useRouter();

	const { location, endDate, startDate, numberOfGuests } = router.query;

	const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
	const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

	const range = `${formattedStartDate} to ${formattedEndDate}`;

	return (
		<div>
			<Header placeholder={` ${location} | ${range} | ${numberOfGuests} `} />
			<main className='flex pt-14 px-6'>
				<section className='flex-grow'>
					<p className='text-xs'>
						300 + Stays - {range} - for {numberOfGuests} guests
					</p>
					<h1 className='text-3xl font-semibold mt-2 mb-6'>
						Stays in {location}
					</h1>

					<div className=' hidden lg:inline-flex mb-5 space-x-5 text-gray-500 whitespace-nowrap'>
						<p className='button'>Cancellation flexibility</p>
						<p className='button'>Type of Place</p>
						<p className='button'>Price</p>
						<p className='button'>Rooms and Beds</p>
						<p className='button'>More filters</p>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Search;
