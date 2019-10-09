import React from 'react';

export default class TodoFooter extends React.Component {
    render() {
        return (
            <>
                N items left

                <button>All</button>
                <button>Active</button>
                <button>Completed</button>

                <button>Clear completed</button>
            </>
      );
    }
}

