import React, { PropTypes } from 'react'
import marked from 'marked';
console.log(marked('I am using __markdown__.'));
class MarkDown extends React.Component {
  
  render () {
    let content = marked('I am using __markdown__.')
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>

    )
  }
}

export default MarkDown;
