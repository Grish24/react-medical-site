import React , {Component} from 'react'
import InfoComp from './InfoComp'

class InfoContainer extends Component {
    state = {
        data : []
    };
    async componentDidMount() {
        try {
            const url = `${process.env.REACT_APP_API_URL}/api/about`;
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
            <InfoComp data={this.state.data}/>
        )
    }
}

export default InfoContainer;