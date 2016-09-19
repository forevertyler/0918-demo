import React, { PropTypes } from 'react';

import marked from 'marked';
import { Md } from './utils/help';
import hljs from 'highlight.js';

class Blog extends React.Component {
  constructor(){
    super();
    this.state = {
      data:'',
      wait:true
    }
  }
  componentDidMount(){
     Md(this.props.params.title)
       .then( (recData) => {
        this.setState({
          data:recData.Md,
          wait:false
        })
         console.log(recData.data);
       });
   }
  render () {
    marked.setOptions({
    highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});
    let content = this.state.wait ? "wait.." : marked(this.state.data)
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}

export default Blog;
