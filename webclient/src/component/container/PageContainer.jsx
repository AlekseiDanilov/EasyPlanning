import React from "react";
import { observer } from "mobx-react";
import RouterHelper from "../helper/RouterHelper";

@observer
class PageContainer extends React.Component {
  render() {
    return (
      <div>
        <RouterHelper />
        <div className="header">
          <div className="header__nav">
            <div className="header__nav__item">Публикации</div>
            <div className="header__nav__item">События</div>
          </div>
        </div>
        <main className="container">{this.props.children}</main>
        <footer className="footer">
          <div className="container">
            <span className="copyright">© EasyPlanning 2018</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default PageContainer;
