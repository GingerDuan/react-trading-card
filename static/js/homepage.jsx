'use strict';

function Homepage() {
  return  (<React.Fragment>
    
      <div>
        <a href="/cards">Go to the cards page</a>
      </div>
      <div>
        <a href="/about">Go to the about page</a>
      </div>
      <img src="/static/img/balloonicorn.jpg" alt="" />
    </React.Fragment>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
