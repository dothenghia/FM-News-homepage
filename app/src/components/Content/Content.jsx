import React from 'react'

import './content.scss'
import web3Bg from '../../assets/images/image-web-3-desktop.jpg';
import web3BgMobile from '../../assets/images/image-web-3-mobile.jpg';
import retroImg from '../../assets/images/image-retro-pcs.jpg';
import topImg from '../../assets/images/image-top-laptops.jpg';
import growthImg from '../../assets/images/image-gaming-growth.jpg';

const Content = () => {
	return (
		<div className="content pt-5">

			<div className="row">
				<div className="col-12 col-md-8 main-content">
					<div className="row main-thumbnail">
						<img src={web3Bg}/>
						<img src={web3BgMobile}/>
					</div>

					<div className="row pt-3 pt-md-4 pt-xl-5">
						<div className="col-12 col-md-6 main-title"><h1>The Bright Future of Web 3.0?</h1></div>
						<div className="col-12 col-md-6 main-paragraph">
							<p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
							<button>READ MORE</button>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-4 mt-md-0 mt-5 side-contents">
					<h1>New</h1>
					<div className="row side-content">
						<h4>Hydrogen VS Eletric Cars</h4>
						<p>Will hydrogen-fueled cars ever catch up to EVs?</p>
					</div>

					<div className="row side-content">
						<h4>The Downsides of AI Artistry</h4>
						<p>What are the possible adverse effects of on-demand AI image generation?</p>
					</div>

					<div className="row side-content">
						<h4>Is VC Funding Drying Up?</h4>
						<p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
					</div>
				</div>
			</div>

			<div className="row pt-5 sub-contents">
				<div className="col-12 col-md-4">
					<div className="row mt-3 mt-md-0">
						<div className="col-4 sub-thumbnail">
							<img src={retroImg} alt='Retro PC'/>
						</div>

						<div className="col-8 sub-content">
							<h1>01</h1>
							<h4>Reviving Retro PCs</h4>
							<p>What happens when old PCs are given modern upgrades?</p>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-4">
					<div className="row mt-3 mt-md-0">
						<div className="col-4 sub-thumbnail">
							<img src={topImg} alt='Top 10 Laptops'/>
						</div>
						<div className="col-8 sub-content">
							<h1>02</h1>
							<h4>Top 10 Laptops of 2022</h4>
							<p>Our best picks for various needs and budgets.</p>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-4">
					<div className="row mt-3 mt-md-0">
						<div className="col-4 sub-thumbnail">
							<img src={growthImg} alt='Growth of Gaming'/>
						</div>
						<div className="col-8 sub-content">
							<h1>03</h1>
							<h4>The Growth of Gaming</h4>
							<p>How the pandemic has sparked fresh opportunities.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Content