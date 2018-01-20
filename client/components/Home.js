import React from 'react'

const Home = props => {
	return (
		<section>
			<header>
				<h1>Lyrical</h1>
			</header>
			{props.children}
		</section>
	)
}

export default Home
