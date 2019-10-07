import React , {Component} from 'react'

class ApiCallContainer extends Component {
    state = {
        data : []
    };

    async componentDidMount() {
        try {
            const url = `${process.env.REACT_APP_API_URL}/api/${this.props.apiPath}`;
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
        const {
            componentForRender : MyComponent,
        } = this.props;
        return (
            <MyComponent data={this.state.data}/>
        )
    }
}

export default ApiCallContainer;