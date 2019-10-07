import React from 'react';

class Item extends React.Component {
    render() {
        const name = this.props.name;
        return (
            <li>
                <div>
                    <input type="checkbox"></input>
                    {name}
                    <button>Delete</button>
                </div>
            </li>
      );
    }
}

export default Item;
