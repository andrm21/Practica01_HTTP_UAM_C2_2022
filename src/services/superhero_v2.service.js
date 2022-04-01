const SuperheroModel = require('../models/superhero_v2.model');


class SuperheroService {
  async createSuperhero(superheroV2) {
    superheroV2.save();
    return superheroV2;

  }



  async listSuperheroes() {
    return SuperheroModel.find();
  }

  async showSuperhero(superheroId) {
    return SuperheroModel.findById({ _id: superheroId }).then(
      (superheroFind) => {
        if (!superheroFind) throw Boom.notFound('No se encontró el superheroe');
        return superheroFind;
      }
    );


  }

  async editSuperhero(superheroId, superhero, realname, superpower) {
    return SuperheroModel.findByIdAndUpdate(
      { _id: superheroId },
      { superhero, realname, superpower }
    ).then((superheroFind) => {
      if (!superheroFind)
        throw Boom.notFound(
          'No se encontró el superheroe'
        ); /* new Error('No se encontró el superheroe'); */
    });
  }

  async removeSuperhero(superheroId) {
    return SuperheroModel.findById({ _id: superheroId }).then(
      (superheroFind) => {
        if (!superheroFind) throw Boom.notFound('No se encontró el superheroe');
        return SuperheroModel.deleteOne(superheroFind);
      }
    );

    
  }
}

module.exports = SuperheroService;
