import Sticky from './Sticky';

class ReadModel extends Sticky {

  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      resource: 'readModel',
      resourcePlural: 'readModels',
      color: 'LightGreen',
      baseUrl: 'http://localhost:3000/readModels/',
    }
    console.log(this.state)
  }

}
export default ReadModel;
