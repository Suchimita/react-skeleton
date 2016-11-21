var React = require("react");
var ListItem = require("./ListItem.jsx")

var List = React.createClass({
    ingredients: ['coconut', 'salt', 'rice'],
    render: function(){
        var listItems = this.ingredients.map(function(i){
            return(<ListItem ingredient={i} />);
        });
        return(
            <ul>{listItems}</ul>
        );
    }
});

module.exports = List;
