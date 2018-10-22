import Sticky from './Sticky';

class Actor extends Sticky {

  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      width: 50,
      height: 70,
      resource: 'actor',
      resourcePlural: 'actors',
      color: 'LightGoldenrodYellow',
      baseUrl: 'http://localhost:3000/actors/',
    }
    console.log(this.state)
  }

}
export default Actor;
