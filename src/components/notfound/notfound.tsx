import { Resources } from "resources";
import * as React from "react";

export class NotFound extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>{Resources.NotFound.NotFound}</h1>
      </div>
    )
  }
}