import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { CirclePicker } from "react-color";
import "./../../assets/css/kits.css"
import kit1 from "./../../assets/images/kit1.png";
import kit2 from "./../../assets/images/kit2.png";
import kit3 from "./../../assets/images/kit3.png";

class Kits extends Component {

	constructor(props) {

			super(props);

			this.state = {
					selected: props.kit,
					color: props.color
			};

			this.handleKit1 = this.handleKit1.bind(this);
			this.handleKit2 = this.handleKit2.bind(this);
			this.handleKit3 = this.handleKit3.bind(this);
			this.handleColorPicker = this.handleColorPicker.bind(this);
	}

	handleKit1() {
		this.setState({ selected: 1 });
		this.props.handleKit({ ...this.state });
	}

	handleKit2() {
		this.setState({ selected: 2 });
		this.props.handleKit({ ...this.state });
	}

	handleKit3() {
		this.setState({ selected: 3 });
		this.props.handleKit({ ...this.state });
	}

	handleColorPicker(color) {
		this.setState({ color: color.hex })
		this.props.handleColor({ ...this.state });
	};

	render() {
		return (
			<>
				<Form.Group className="pt-4">
					<Form.Label style={{ color: "white" }}>
						<strong>Choose Kit</strong>
					</Form.Label>
					<div 
						className="d-flex justify-content-around align-items-center"
						style={{
							backgroundColor: "white",
							borderRadius: "5px",
							height: "4rem"
						}}
					>
						<img
							src={ kit1 }
							alt="football-shirt"
							className="kit-logo"
							style={{ backgroundColor: this.state.selected === 1 ? this.state.color : null }}
							onClick={ this.handleKit1 }
						/>
						<img
							src={ kit2 }
							alt="football-shirt"
							className="kit-logo"
							style={{ backgroundColor: this.state.selected === 2 ? this.state.color : null }}
							onClick={ this.handleKit2 }
						/>
						<img
							src={ kit3 }
							alt="football-shirt"
							className="kit-logo"
							style={{ backgroundColor: this.state.selected === 3 ? this.state.color : null }}
							onClick={ this.handleKit3 }
						/>
					</div>
				</Form.Group>
				<Form.Group className="pt-4">
					<Form.Label style={{ color: "white" }}>
						<strong>Choose Colour</strong>
					</Form.Label>
					<CirclePicker
						onChange={ this.handleColorPicker }
					/>
				</Form.Group>
			</>
		);
	}
}

export default Kits;