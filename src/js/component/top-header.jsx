import React from 'react';

export class TopHeader extends React.Component{
    
    render(){
        return topHeader();
    }
}

function topHeader() {
        return <h1 className="text-center">todos</h1>;
    }