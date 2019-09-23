import React , {Component} from 'react'
import ServicesComp from './ServicesComp'

class ServicesContainer extends Component {
    state = {
        data : []
    };
    async componentDidMount() {
        try {
            const url = `${process.env.REACT_APP_API_URL}/api/services`;
            const response = await fetch(url);
            const json = await response.json();
            this.setState({
                data: json
            });
            console.log(this.state.data);
        } catch (e) {
            console.dir(e)
        }
    }
    render() {
        return <ServicesComp data={this.state.data} />;
    }
}

export default ServicesContainer;