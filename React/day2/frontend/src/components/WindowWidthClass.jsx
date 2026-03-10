class WindowWidth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: typeof window !== "undefined" ? window.innerWidth : 0
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div>
        <p>Window width: <strong>{this.state.width}px</strong></p>
        <small>Resize the window to see it update. Unmount to remove the listener.</small>
      </div>
    );
  }
}