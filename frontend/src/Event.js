import Sticky from './Sticky';

class Event extends Sticky {

  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      resource: 'event',
      resourcePlural: 'events',
      color: 'Orange',
      baseUrl: 'http://localhost:3000/events/',
    }
    console.log(this.state)
  }

}
export default Event;
