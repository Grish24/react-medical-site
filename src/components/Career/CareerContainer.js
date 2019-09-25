import React , {Component} from 'react'
import CareerComp from './CareerComp'

class CareerContainer extends Component {
    state = {
        data : []
    };
    async componentDidMount() {
        try {
            const url = `${process.env.REACT_APP_API_URL}/api/career`;
            const response = await fetch(url);
            const json = await response.json();
            this.setState({
                data: json
            });
        } catch (e) {
            console.dir(e)
        }
    }
    render() {
        return (
            <CareerComp data={this.state.data}/>
        )
    }
}

export default CareerContainer;