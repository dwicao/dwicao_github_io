import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { List, WindowScroller } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

export default class ProjectsList extends Component {
	constructor(props) {
		super(props);

		this.rowRenderer = this.rowRenderer.bind(this);
	}

	rowRenderer ({
	    key,         // Unique key within array of rows
	    index,       // Index of row within collection
	    isScrolling, // The List is currently being scrolled
	    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
	    style        // Style object to be applied to row (to position it)
	  }) {
	    const name = this.props.dataRepos.map(obj => obj.description);
	    const homepage = this.props.dataRepos.map(obj => obj.homepage);
	    const source = this.props.dataRepos.map(obj => obj.html_url);
	    const rowStyle = {
	      p: {
	        paddingLeft: '20px',
	        fontSize: 24
	      },
	      i: {
	        fontSize: 18
	      }
	    };

	    return (
	      <div
	        key={key}
	        style={style}
	      >
	          <p style={rowStyle.p}>
	          <i style={rowStyle.i} className="material-icons">
	            <a href={source[index]} target="_blank">
	              code
	            </a>
	          </i>
	            {' '}
	            {name[index]}
	            {' '}
	            <i style={rowStyle.i} className="material-icons">
	              <a href={homepage[index]} target="_blank">
	                launch
	              </a>
	            </i>
	          </p>
	      </div>
	    );
	}

	noRowsRenderer() {
		const noRowStyle = {
  		  textAlign: 'center',
  		  marginTop: '24px'
		}
		return (
			<div>
				<Spinner style={noRowStyle} spinnerName="three-bounce" noFadeIn={false} />
			</div>
		);
	}

	render() {
		const listStyle = {
	      width: 'auto',
	    };
	    return (
	    	<WindowScroller>
	    		{({ height, isScrolling, scrollTop }) => (
			    	<List
			            style={listStyle}
			            height={270}
			            width={500}
			            rowCount={this.props.dataRepos.length}
			            rowHeight={70}
			            rowRenderer={this.rowRenderer}
			            noRowsRenderer={this.noRowsRenderer}
			        />
				)}
  			</WindowScroller>
        );
	}
}