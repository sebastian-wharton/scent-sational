const Footer = () => {
	return (
		<>
			<div className='absolute bottom-0 flex items-center justify-evenly bg-pink4 text-text-pinkText w-screen h-28'>
				<div className='logo'>
					<h1>Logo</h1>
					<div className='social'>
						<ul className='flex gap-2'>
							<li>Link</li>
							<li>Link</li>
							<li>Link</li>
						</ul>
					</div>
					<p>@Copyright Kaila Hill</p>
				</div>
				<div className='flex flex-col'>
					<h3>Title</h3>
					<ul>
						<li>Link</li>
						<li>Link</li>
						<li>Link</li>
					</ul>
				</div>
				<div className='flex flex-col'>
					<h3>Title</h3>
					<ul>
						<li>Link</li>
						<li>Link</li>
						<li>Link</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Footer;
