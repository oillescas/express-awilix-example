const { createContainer, asClass, asValue, asFunction } = require("awilix");
const Server = require("./server");
const config = require("./config");
const routes = require("./routes");

const homeRouter = require("./routes/homeRouter");
const noteRouter = require("./routes/noteRouter");

const NoteService = require("./services/note.service");

const NoteRepository = require("./repositories/note.repository");

const Note = require("./models/note.model");

const container = createContainer();

//Config
container.register({
  config: asValue(config),
  Server: asClass(Server).singleton(),
  router: asFunction(routes).singleton()
});

//Routes
container.register({
  homeRouter: asFunction(homeRouter).singleton(),
  noteRouter: asFunction(noteRouter).singleton()
});

//Services
container.register({
  noteService: asClass(NoteService).singleton()
});

//Repositories
container.register({
  noteRepository: asClass(NoteRepository).singleton()
});

//Models
container.register({
  Note: asValue(Note)
});

//For testing
// const OtherNoteRepository = require("./repositories/otherNote.repository");

// container.register({
//  noteRepository: asClass(OtherNoteRepository).singleton()
// });

module.exports = container;
