import React , {Component} from 'react'
import SliderComp from './SliderComp'

class SliderCompContainer extends Component {
    state = {
        data : []
    };
    async componentDidMount() {
        try {
            const url = `${process.env.REACT_APP_API_URL}/api/slider`;
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
        return <SliderComp data={this.state.data} />;
    }
}

export default SliderCompContainer;