import React from 'react';
import { PDFExport } from "@progress/kendo-react-pdf";

import Navigation from './Navigation';
import HotelView from "./HotelView";
import Details from "./Details";
import CallToAction from "./CallToAction";

class Content extends React.PureComponent {
	exportPDF = () => {
		this.resume.save();
	}

	render() {
		return (
			<div className="content" >
				<nav className="sidebar">
					<Navigation />
				</nav>
				<main className="hotel-view">
					<HotelView />
					<PDFExport
						paperSize={"A3"}
						fileName="tenancy_agreement.pdf"
						title=""
						subject=""
						keywords=""
						margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
						ref={r => (this.resume = r)}
					>
						<Details />
					</PDFExport>
					<CallToAction onClick={this.exportPDF} />
				</main>
			</div>
		);
	}
}

export default Content;