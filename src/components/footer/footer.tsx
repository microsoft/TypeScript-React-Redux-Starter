import "./footer.scss";
import { Resources } from "../../resources";
import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-fluid footer">
          <div className="row">
            <div className="col-md-12">
              <ul className="pull-right list-unstyled">
                <li>
                    <a href="">{Resources.Footer.ContactUs}</a>
                </li>
                <li>
                    © Microsoft {new Date().getFullYear()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

  