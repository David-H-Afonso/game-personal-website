import React from 'react'
import './CampaignList.css'
import { Lords } from '../../Lords'

const CampaignList = (props) => {
	const theEmpire = Lords?.filter((item) => item.race == 'The Empire') ?? null

	const races = [theEmpire]

	return (
		<div>
			{races.map((race) => (
				<>
					<h1>{race[0].race}</h1>
					<div className='List'>
						{race.map((item) => (
							<a href={`/lords/${item.name}${item.surname}`}>
								<div className='Lord'>
									<img src={item.image} />
									<p>
										{item.name} {item.surname}
									</p>
								</div>
							</a>
						))}
					</div>
				</>
			))}
		</div>
	)
}

export default CampaignList
