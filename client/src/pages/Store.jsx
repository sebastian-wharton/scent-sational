import Breadcrumb from '../components/Breadcrumb';
import AddCart from '../components/AddCart';
import Filters from '../components/Filters';
import StoreWrap from '../components/StoreWrap';
import Pagination from '../components/Pagination';

const Store = () => {
	return (
		<>
			<div className='bg-pink1'>
				<div className='grid grid-cols-12 grid-rows-12 gap-x-1 gap-y-2'>
					<div className='border-2 col-span-3 p-1 h-full'>
						<Breadcrumb />
					</div>
					<div className='border-2 col-span-2 '>
						<AddCart />
					</div>
					<div className='border-2 col-span-12 row-span-2'>
						<Filters />
					</div>
					<div className='border-2 col-span-12 row-span-8'>
						<StoreWrap />
					</div>
					<div className='border-2 col-span-4'>
						<Pagination />
					</div>
				</div>
			</div>
		</>
	);
};

export default Store;
