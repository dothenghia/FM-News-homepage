import React from 'react'

import './content.scss'

const Content = () => {
	return (
		<div className="content">
			<div className="row">
				<div className="col-8 main-content">
					MAIN CONTENT
				</div>

				<div className="col-4 side-content">
					SIDE CONTENT
				</div>
			</div>

			<div className="row">
				<div className="col-4">1</div>
				<div className="col-4">2</div>
				<div className="col-4">3</div>
			</div>
		</div>
	)
}

export default Content