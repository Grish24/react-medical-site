import React , {Component} from 'react'
import {Switch , Route} from "react-router-dom";
import ServicesReadMore from './ServicesReadMore'
import ServicesComp from './ServicesComp'

class ServicesRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/Services"
                        render={props => <ServicesComp {...props} data={this.props.data} />}
                    />
                    {this.props.data.map((item, index) =>
                        <Route
                            key={item.id}
                            exact
                            path="/Services/:readMoreId"
                            render={props => <ServicesReadMore {...props} data={this.props.data[props.match.params.readMoreId-1]} />}
                        />
                    )}
                </Switch>
            </div>
        )
    }
}

export default ServicesRoute;