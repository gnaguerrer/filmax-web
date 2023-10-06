import React from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

const HomePage = async (): Promise<React.JSX.Element> => {
	const session = await getServerSession();

	if (!session) {
		redirect('/signIn');
	}

	return (
		<main className="w-screen h-screen bg-projector bg-center font-poppins">
			<div className="flex h-full  bg-gradient-to-bl  from-[#191817] via-[#6100C2]/40 to-[#6100C2]/60">
				<div className="w-full h-full flex flex-col items-center justify-center">
					<Image
						className="w-32 ml-2.5"
						src={require('../../public/filmu_plus_logo.png')}
						alt="filmu_plus_logo"
						width="0"
						height="0"
						sizes="100vw"
						placeholder="blur"
					/>
					<span className="mt-5 text-gray-50/90">Enjoy watching</span>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
