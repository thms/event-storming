import Sticky from './Sticky';

class Policy extends Sticky {

  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      resource: 'policy',
      color: 'LightSteelBlue',
      baseUrl: 'http://localhost:3000/policies/'
    }
  }

}
export default Policy;
