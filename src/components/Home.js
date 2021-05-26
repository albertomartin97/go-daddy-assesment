import React from "react";
import image from "../images/arrow.svg";

class Home extends React.Component {
  state = {
    repos: [],
    selectedRepo: {},
    showDetail: false,
  };

  componentDidMount() {
    const apiUrl = "https://api.github.com/orgs/godaddy/repos";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ repos: data });
      });
  }

  async selectRepo(el) {
    this.setState({ selectedRepo: el });
    this.setState({ showDetail: true });

    await this.setState({ showDetail: true });
  }

  goBack() {
    this.setState({ showDetail: false });
  }

  render() {
    return (
      <div className="background-div">
        {!this.state.showDetail ? (
          <div>
            <h1>GoDaddy GitHub Repos</h1>
            {this.state.repos.map((el) => (
              <div onClick={() => this.selectRepo(el)} className="repo-div">
                <p className="repo-title">{el.name}</p>
              </div>
            ))}
          </div>
        ) : null}

        {this.state.showDetail ? (
          <div className="background-div">
            <img
              onClick={() => this.goBack()}
              className="back-button"
              src={image}
            />
            <h1>{this.state.selectedRepo.name}</h1>

            <div className="details-div">
              <h2>{this.state.selectedRepo.description}</h2>
              <div className="detail-bubble">
                <p className="detail-text">
                  Languages: {this.state.selectedRepo.language}
                </p>
              </div>

              <div className="detail-bubble">
                <p className="detail-text">
                  Forks: {this.state.selectedRepo.forks}
                </p>
              </div>

              <div className="detail-bubble">
                <p className="detail-text">
                  Open issues: {this.state.selectedRepo.open_issues_count}
                </p>
              </div>

              <div className="detail-bubble">
                <p className="detail-text">
                  Watchers: {this.state.selectedRepo.watchers}
                </p>
              </div>

              <div className="detail-bubble">
                <a
                  className="detail-text"
                  target="_blank"
                  href={this.state.selectedRepo.html_url}
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Home;
