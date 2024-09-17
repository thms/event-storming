```yaml
openapi: 3.0.0
info:
  title: Event Storming API
  version: 1.0.0
paths:
  /events:
    get:
      summary: List all events
      operationId: listEvents
      responses:
        '200':
          description: A list of events
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Event'
    post:
      summary: Create a new event
      operationId: createEvent
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Event'
      responses:
        '201':
          description: Event created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Event'
  /events/{id}:
    get:
      summary: Get an event by ID
      operationId: getEventById
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the event
          schema:
            type: string
      responses:
        '200':
          description: An event object
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Event'
    put:
      summary: Update an event by ID
      operationId: updateEvent
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the event
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Event'
      responses:
        '200':
          description: Event updated
    delete:
      summary: Delete an event by ID
      operationId: deleteEvent
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the event
          schema:
            type: string
      responses:
        '204':
          description: Event deleted

  /actors:
    get:
      summary: List all actors
      operationId: listActors
      responses:
        '200':
          description: A list of actors
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Actor'
    post:
      summary: Create a new actor
      operationId: createActor
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Actor'
      responses:
        '201':
          description: Actor created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Actor'
  /actors/{id}:
    get:
      summary: Get an actor by ID
      operationId: getActorById
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the actor
          schema:
            type: string
      responses:
        '200':
          description: An actor object
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Actor'
    put:
      summary: Update an actor by ID
      operationId: updateActor
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the actor
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Actor'
      responses:
        '200':
          description: Actor updated
    delete:
      summary: Delete an actor by ID
      operationId: deleteActor
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the actor
          schema:
            type: string
      responses:
        '204':
          description: Actor deleted

  /commands:
    get:
      summary: List all commands
      operationId: listCommands
      responses:
        '200':
          description: A list of commands
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Command'
    post:
      summary: Create a new command
      operationId: createCommand
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Command'
      responses:
        '201':
          description: Command created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Command'
  /commands/{id}:
    get:
      summary: Get a command by ID
      operationId: getCommandById
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the command
          schema:
            type: string
      responses:
        '200':
          description: A command object
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Command'
    put:
      summary: Update a command by ID
      operationId: updateCommand
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the command
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Command'
      responses:
        '200':
          description: Command updated
    delete:
      summary: Delete a command by ID
      operationId: deleteCommand
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the command
          schema:
            type: string
      responses:
        '204':
          description: Command deleted

  /policies:
    get:
      summary: List all policies
      operationId: listPolicies
      responses:
        '200':
          description: A list of policies
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Policy'
    post:
      summary: Create a new policy
      operationId: createPolicy
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Policy'
      responses:
        '201':
          description: Policy created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Policy'
  /policies/{id}:
    get:
      summary: Get a policy by ID
      operationId: getPolicyById
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the policy
          schema:
            type: string
      responses:
        '200':
          description: A policy object
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Policy'
    put:
      summary: Update a policy by ID
      operationId: updatePolicy
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the policy
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Policy'
      responses:
        '200':
          description: Policy updated
    delete:
      summary: Delete a policy by ID
      operationId: deletePolicy
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the policy
          schema:
            type: string
      responses:
        '204':
          description: Policy deleted

  /readModels:
    get:
      summary: List all read models
      operationId: listReadModels
      responses:
        '200':
          description: A list of read models
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ReadModel'
    post:
      summary: Create a new read model
      operationId: createReadModel
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ReadModel'
      responses:
        '201':
          description: Read model created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ReadModel'
  /readModels/{id}:
    get:
      summary: Get a read model by ID
      operationId: getReadModelById
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the read model
          schema:
            type: string
      responses:
        '200':
          description: A read model object
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ReadModel'
    put:
      summary: Update a read model by ID
      operationId: updateReadModel
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the read model
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ReadModel'
      responses:
        '200':
          description: Read model updated
    delete:
      summary: Delete a read model by ID
      operationId: deleteReadModel
      parameters:
        - name: id
          in: path
          required: true
          description: The ID of the read model
          schema:
            type: string
      responses:
        '204':
          description: Read model deleted

components:
  schemas:
    Event:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        xpos:
          type: number
        ypos:
          type: number
    Actor:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        xpos:
          type: number
        ypos:
          type: number
    Command:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        xpos:
          type: number
        ypos:
          type: number
    Policy:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        xpos:
          type: number
        ypos:
          type: number
    ReadModel:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        xpos:
          type: number
        ypos:
          type: number
```

Generated by model: openai

Generated at: 2024-09-17 12:57:18