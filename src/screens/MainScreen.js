import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../components/Items';

class MainScreen extends Component {

    constructor(props) {
        super(props);
    }

    displayData=()=>{
        const { result } = this.props.reducers;

        var listArray = result.posts.map((item, key) => {
            return <Items key={key} data={item} />
        });

        return listArray;     
    }

    render() {        
        const { result } = this.props.reducers;

        return (
            <div className="App">
                <section className="section">
                    Tech In Asia
                </section>
                <br />
                <section className="section">            
                <p>
                    {result!=undefined?
                        this.displayData():<div></div>
                    }
                </p>
                </section>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(MainScreen);