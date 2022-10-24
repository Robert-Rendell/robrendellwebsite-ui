import React from 'react';

type Props = {

}

class RecursionPageComponent extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // nothing
  }

  render() {
    return (<>
    <ol>
      <li>
      Recurse a JavaScript object
      </li>
      <li>
      why is Recursion so important in nature and with humans?
      </li>
      <li>
      stackoverflow error, we live in an unordered world and in order for us to apply logic we require it be ordered.
      </li>
      <li>
      Recursive functions - base case and recursive case. Helper functions
      </li>
      <li>
      Boston Metro System
        <ul>
          <li>
          depth first
          </li>
          <li>
          breadth first
          </li>
        </ul>
      </li>
      <li>
      sutcliffe pentagons / ivy plant in processing sketch
      </li>
      <li>
      ivy worm hole, inner pentagons spin at a different speed?
      </li>
      <li>
      tree fractals
      </li>
      <li>
      fractals - the shape of recursion
      </li>
      <li>
      have Kyle do some drawings / artwork and it can be like a journey through recursion
      </li>
      <li>
      recursion is in our DNA yet our minds find it hard to understand recursive functions
      </li>
      <li>
      self referencing visuals (fractals) are very pleasing to our eyes though, especially animations
      </li>
    </ol>
    </>)
  }
}

export default RecursionPageComponent;