import Sticky from './Sticky';

class Actor extends Sticky {

  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      resource: 'actor',
      color: 'LightGoldenrodYellow',
      baseUrl: 'http://localhost:3000/actors/',
    }
  }

}
export default Actor;
