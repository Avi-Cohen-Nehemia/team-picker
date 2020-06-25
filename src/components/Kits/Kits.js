import React, { Component } from "react";
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

class Kits extends Component {

    constructor(props) {

        super(props);

        this.state = {
            selected: "",
        };

        this.handleKit1 = this.handleKit1.bind(this);
        this.handleKit2 = this.handleKit2.bind(this);
        this.handleKit3 = this.handleKit3.bind(this);
    }

    handleKit1() {
        this.setState({ selected: 1 });
    }

    handleTKit2e() {
        this.setState({ selected: 2 });
    }

    handleKit3() {
        this.setState({ selected: 3 });
    }

    render() {
        return(
            <div 
                className="d-flex justify-content-around align-items-center"
                style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    height: "4rem"
                }}>
                <img
                    src={ kit1 }
                    alt="football-shirt"
                    width="50"
                    height="50"
                />
                <img
                    src={ kit2 }
                    alt="football-shirt"
                    width="50"
                    height="50"
                />
                <img
                    src={ kit3 }
                    alt="football-shirt"
                    width="50"
                    height="50"
                />
            </div>
        );
    }
}
  
export default Kits;