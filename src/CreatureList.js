import React, { Component } from 'react'
import Creature from './Creature.js'







export default class CreatureList extends Component {

    state = {
        filter: '',
        keyWord: ''
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        });
    }
    handleKeyWord = (e) => {
        this.setState({
            keyWord: e.target.value
        });
    }




    render() {
        const filteredImage = this.props.images.filter((image) => {
            if (!this.state.keyWord) {
                return true;
            } if (image.keyword === this.state.keyWord) {
                return true;
            }
            return false
        });
        return (
            <>
                <section className="searches">
                    <div className="sorter"> <div>Sort by Keyword</div>
                        <select onChange={this.handleKeyWord}>
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
                        filteredImage.map((image, key) =>
                            <Creature
                                key={key}
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
