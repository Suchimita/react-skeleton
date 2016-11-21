var React = require("react");

var ListItem = React.createClass({
    render: function(){
        return(
            <h4>{this.props.ingredient}</h4>
        );
    }
});

module.exports = ListItem;
