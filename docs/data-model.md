```markdown
@startuml

package "Models" {
    class ReadModel {
        +String name
        +Number xpos
        +Number ypos
    }

    class Event {
        +String name
        +Number xpos
        +Number ypos
    }

    class Actor {
        +String name
        +Number xpos
        +Number ypos
    }

    class Command {
        +String name
        +Number xpos
        +Number ypos
    }

    class Policy {
        +String name
        +Number xpos
        +Number ypos
    }
}

package "Controllers" {
    class ReadModelController {
        +list(req, res, next)
        +show(req, res, next)
        +create(req, res, next)
        +update(req, res, next)
        +delete(req, res, next)
    }

    class EventController {
        +list(req, res, next)
        +show(req, res, next)
        +create(req, res, next)
        +update(req, res, next)
        +delete(req, res, next)
    }

    class ActorController {
        +list(req, res, next)
        +show(req, res, next)
        +create(req, res, next)
        +update(req, res, next)
        +delete(req, res, next)
    }
}

package "Database" {
    class Database {
        +connect()
        +disconnect()
    }
}

ReadModelController --> ReadModel
EventController --> Event
ActorController --> Actor

Database --> ReadModel
Database --> Event
Database --> Actor
Database --> Command
Database --> Policy

@enduml
```

Generated by model: openai

Generated at: 2024-09-13 12:04:54