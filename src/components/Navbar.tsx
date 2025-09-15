'use client'
import React from 'react'
import { useState } from "react";
import Link from 'next/link'
import ContactModal from './ContactModal'

const Navbar = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const openModal = () => {
		setModalOpen(true);
	}
	
	const closeModal = () => {
		setModalOpen(false);
	}

	return (
		<>
			<nav className='w-full fixed-top px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 navbar'>
				<Link href="/" style={{ textDecoration: 'none' }}>
					<h1>Games by Carter</h1>
				</Link>
				<ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
					<li><h1><Link href="/" style={{ textDecoration: 'none' }}>Home</Link></h1></li>
					<li><h1><a href="/about" style={{ textDecoration: 'none' }}>About Me</a></h1></li>
				</ul>

				<div>
					<a className='navbar-contact-modal hidden lg:flex items-cneter gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4' style={{ textDecoration: 'none' }} onClick={openModal}><h1>Contact</h1></a>
				</div>
				{modalOpen && true && true && (
					<ContactModal onClose={closeModal} />
				)}
			</nav>
		</>
	)
}

export default Navbar