import React, { Component, createRef } from 'react'
import Creature from './Creature.js'







export default class CreatureList extends Component {

    state = {
        filter: ''
    }
    handleChange = e => {
        this.setState({
            filter: e.target.value
        });
    }


    render() {

        const filteredImage = this.props.images.filter((image) => {


            if (!this.state.filter) {

                return true;
            }

            if (image.horns === Number(this.state.filter)) {
                return true;
            }
        });




        return (
            <>
                <select onChange={this.handleChange}>
                    <option value=''>Show All</option>
                    <option value='1'>One Horn</option>
                    <option value='2'>Two Horns</option>
                    <option value='3'>Three Horns</option>
                    <option value='100'>One Hundred</option>
                </select>
                <div className="container">
                    {
                        filteredImage.map(image =>
                            <Creature
                                url={image.url}
                                title={image.title}
                                description={image.description}
                                horns={image.horns}
                            />
                        )
                    }
                </div>
            </>
        )
    }
}
