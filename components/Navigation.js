import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

const Navigation = () => {
	return (
		<div className='w-full flex justify-center items-center bg-acm-white fixed-top border-b-4 border-[#4184fc]'>
			<Navbar
				collapseOnSelect
				className='font-lexend fs-4 w-11/12 ml-auto mr-auto'
				expand='sm'
			>
				<Navbar.Brand>
					<Link href='/' passHref>
						<Nav.Link eventKey='1'>
							<img
								src='acm-ucr-logo.png'
								className='w-24 h-24'
								alt='acm@ucr logo'
							/>
						</Nav.Link>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbar-nav' />
				<Navbar.Collapse id='navbar-nav'>
					<Nav
						className='ml-auto mb-2 mb-lg-2 no-underline'
						// margin-bottom='120px'
					>
						<Link href='/' passHref>
							<Nav.Link
								className='m-auto !text-acm-black hover:!text-acm-gray'
								eventKey='6'
							>
								home
							</Nav.Link>
						</Link>
						<Link href='/about' passHref>
							<Nav.Link
								className='m-auto !text-acm-black hover:!text-acm-gray'
								eventKey='2'
							>
								about
							</Nav.Link>
						</Link>
						<Link href='/board' passHref>
							<Nav.Link
								className='m-auto !text-acm-black hover:!text-acm-gray'
								eventKey='3'
							>
								board
							</Nav.Link>
						</Link>
						<Link href='/events' passHref>
							<Nav.Link
								className='m-auto !text-acm-black hover:!text-acm-gray'
								eventKey='4'
							>
								events
							</Nav.Link>
						</Link>
						<Link href='/join' passHref>
							<Nav.Link
								className='m-auto !text-acm-black hover:!text-acm-gray'
								eventKey='5'
							>
								join us
							</Nav.Link>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
