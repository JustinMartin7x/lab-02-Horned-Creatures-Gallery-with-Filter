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
            } else if (image.horns === Number(this.state.filter)) {
                return true;
            } else if (image.keyword === this.state.filter) {
                return true;
            } else
                return false


        });




        return (
            <>
                <section className="searches">
                    <div className="sorter"> <div>Sort By Number of Horns</div>
                        <select onChange={this.handleChange}>
                            <option value=''>Show All</option>
                            <option value='1'>One Horn</option>
                            <option value='2'>Two Horns</option>
                            <option value='3'>Three Horns</option>
                            <option value='100'>One Hundred</option>
                        </select>
                    </div>
                    <div className="sorter"> <div>Sort by Keyword</div>
                        <select onChange={this.handleChange}>
                            <option value=''>Show All</option>
                            <option value="narwhal">Narwal</option>
                            <option value="rhino">Rhino</option>
                            <option value="unicorn">Unicorn</option>
                            <option value="unilego">Unilego</option>
                            <option value="markhor">Markhor</option>
                            <option value="mouflon">Mouflon</option>
                            <option value="addax">Addax</option>
                            <option value="chameleon">Chameleon</option>
                            <option value="lizard">Lizard</option>
                            <option value="dragon">Dragon</option>
                        </select>
                    </div>
                </section>
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
