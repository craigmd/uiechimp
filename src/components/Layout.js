import React from 'react'
import CreateSegmentModal from '../containers/analyzer/CreateSegmentModal'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }

  renderCreateSegmentModal() {
    return <CreateSegmentModal toggleMe={this.toggleModal} />
  }

  render() {
    const dispatch = this.props.dispatch;
    return (
      <div>
        <header>
          <div className="container row">
            <span>UIE Chimp pro</span>
            <a
              className="list-creator-btn"
              href="#"
              onClick={() => this.toggleModal()}
            >Make This List</a>
          </div>
        </header>
        {this.props.children}
        {this.state.showModal ? this.renderCreateSegmentModal() : null}
      </div>
    );
  }
}

export default Layout
