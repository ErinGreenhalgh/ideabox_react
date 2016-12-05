const React = require('react');
const ReactDOM = require('react-dom');

let ideas = [
  { id: 1, title: 'A great idea', body: 'Lorem ipsum…' },
  { id: 2, title: 'A wonderful proposal', body: 'Lorem ipsum…' },
  { id: 3, title: 'A brilliant inspiration', body: 'Lorem ipsum…' },
  { id: 4, title: 'A terrific thought', body: 'Lorem ipsum…' },
];

class AllIdeas extends React.Component {
  constructor() {
    super()
    this.state = {ideas: ideas}
  }

  render() {
    let ideas = this.state.ideas.map((idea) => {
      return (
        <section key={ idea.id }>
          <h2>{ idea.title }</h2>
          <p>{ idea.body }</p>
        </section>
      )
    });

    return (
      <div className="ideas-list">
        { ideas }
      </div>
    )
  }
}

ReactDOM.render(<AllIdeas />, document.getElementById("app-body"));
