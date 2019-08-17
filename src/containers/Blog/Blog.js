import React, { Component, Suspense } from "react";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

const Posts = React.lazy(() => import('./Posts/Posts'))

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: ""
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ?<Route path="/posts" render={() => (
            <Suspense fallback={<h1>Loading</h1>}>
              <Posts />
            </Suspense>
          )}></Route> : null} 
          <Route path="/new-post" component={NewPost} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
