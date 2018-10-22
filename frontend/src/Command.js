import Sticky from './Sticky';

class Command extends Sticky {

  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      resource: 'command',
      resourcePlural: 'commands',
      color: 'LightSkyBlue',
      baseUrl: 'http://localhost:3000/commands/',
    }
    console.log(this.state)
  }

}
export default Command;
