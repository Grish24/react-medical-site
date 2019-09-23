import React , {Component} from 'react'
import ServicesComp from './ServicesComp'
import {Switch , Route} from "react-router-dom";
import ServicesReadMore from '../../views/ServicesReadMore'

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
        } catch (e) {
            console.dir(e)
        }
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/Services"
                        render={props => <ServicesComp {...props} data={this.state.data} />}
                    />
                    {this.state.data.map((item, index) =>
                        <Route
                            key={item.id}
                            exact
                            path="/Services/:readMoreId"
                            render={props => <ServicesReadMore {...props} data={this.state.data[props.match.params.readMoreId-1]} />}
                        />
                    )}
                </Switch>
            </div>
        )
    }
}

export default ServicesContainer;