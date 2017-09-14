var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	     return (
	     <div>
           <h1 className="text-center page-title">Examples</h1>
           <p>Here are a few example locations to try out:</p>
           <ul>
             <li>
               <Link to='/?location=Singapore'>Singapore, PA</Link>
             </li>
             <li>
               <Link to='/?location=Rio'>Rio, Brazil</Link>
             </li>
           </ul>
         </div>
	     )
};

module.exports = Examples;