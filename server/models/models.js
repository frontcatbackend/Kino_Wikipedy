const seq = require('../db')
const {DataTypes} = require('sequelize')

const User = seq.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "ADMIN"},
})

const Actor = seq.define('actor',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false, allowNull: false},
    img: {type: DataTypes.STRING,},
    isDeath:{type: DataTypes.BOOLEAN},
    date_of_birth:{type: DataTypes.DATE,},
    date_of_death:{type: DataTypes.DATE,},
    // country_of_birth:{type: DataTypes.STRING,},
    // country_of_death:{type: DataTypes.STRING,},

    
})
const Produsser = seq.define('produsser',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false, allowNull: false},
    img: {type: DataTypes.STRING,},
    isDeath:{type: DataTypes.BOOLEAN},
    date_of_birth:{type: DataTypes.DATE,},
    date_of_death:{type: DataTypes.DATE,},
    
})

const Movie = seq.define('movie',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    movie_name:{type: DataTypes.STRING,},
    description:{type: DataTypes.STRING},
    chapters:{type: DataTypes.INTEGER},
    year:{type: DataTypes.DATE},
    mov_video:{type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
})

const Serial = seq.define('serial',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    serial_name:{type: DataTypes.STRING,},
    description:{type: DataTypes.STRING},
    seasons:{type: DataTypes.INTEGER},
    year:{type: DataTypes.DATE, },
    se_video:{type: DataTypes.STRING, },
    img: {type: DataTypes.STRING,},
})

const Country = seq.define('country',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    country_name: {type: DataTypes.STRING,},
})

const Genre = seq.define('genre',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    genre: {type: DataTypes.STRING,},
})

///////////////////


//actors to movies, movies to actors m:m
Actor.belongsToMany(Movie, {through: "ActorsFilms"})
Movie.belongsToMany(Actor, {through: "ActorsFilms"})

//produssor to movie
Produsser.belongsToMany(Movie, {through:"ProdusserMovie"})
Movie.belongsToMany(Produsser, {through:"ProdusserMovie"})

//produssor to serial
Produsser.belongsToMany(Serial, {through:"ProdusserSerial"})
Serial.belongsToMany(Produsser, {through:"ProdusserSerial"})

//actors to geners, movies to actors m:m
Actor.belongsToMany(Genre, {through: "ActorsGenre"})
Genre.belongsToMany(Actor, {through: "ActorsGenre"})

//actors to serials, serials to actors m:m
Actor.belongsToMany(Serial, {through:"ActorsSerials"})
Serial.belongsToMany(Actor, {through:"ActorsSerials"})

//actors to country 1:m
Actor.hasOne(Country,)
Country.belongsTo(Actor)

//produssers to country 1:m
Produsser.hasOne(Country)
Country.belongsTo(Produsser)

//genres to movies m:m
Movie.belongsToMany(Genre, {through: 'MovieGenre'})
Genre.belongsToMany(Movie, {through: 'MovieGenre'})

//countries to movies m:m
Movie.belongsToMany(Country, {through: 'MovieCountry'})
Country.belongsToMany(Movie, {through: 'MovieCountry'})

//genres to serials m:m
Serial.belongsToMany(Genre, {through: 'SerialGenre'})
Genre.belongsToMany(Serial, {through: 'Serialenre'})

//genres to serials m:m
Serial.belongsToMany(Country, {through: 'SerialCountry'})
Country.belongsToMany(Serial, {through: 'SerialCountry'})




// //test function
// const run = async () => {
//     //creating actor
//     const swarz = await Actor.create({
//         name: "Arnold Shwarznegger",
//         isDeath: false,
//         date_of_birth:"1947-07-30",
//     })
//     //creating produssor
//     const terminatorProdussor = await Produsser.create({name: "James Cameron"})
//     const predatorProdussor = await Produsser.create({name: "Jhon Maktirnan"})
//     //creating films
//     const terminator1 = await Movie.create({movie_name:" The Terminator"})
//     const terminator2 = await Movie.create({movie_name:" The Terminator2"})
//     const predator1 = await Movie.create({movie_name:"Predator"})
//     //creating country
//     const usa = await Country.create({country_name: "Usa"})
//     const austria = await Country.create({country_name: "Austria"})
//     //creating genre
//     const predatorGenre = await Genre.create({genre:"thriller"})
//     const terminatorGenre = await Genre.create({genre:"sci-fi"})

//     //connekting instances
//     //adding films to actors
//     await swarz.addMovie([terminator1, terminator2, predator1])
//     //adding country to actor
//     await swarz.setCountry(usa)
//     // adding films to produssor
//     await terminatorProdussor.addMovie([terminator1, terminator2])
//     await predatorProdussor.addMovie([predator1])
//     // adding films to country
//     await terminator1.addCountry([usa])
//     await terminator2.addCountry([usa])
//     await predator1.addCountry([usa])
//     //adding films to genre
//     await terminatorGenre.addMovie([terminator1, terminator2])
//     await predatorGenre.addMovie([predator1])
    
    
//     //calling
//     const actors = await Actor.findAll({include:[Movie, Serial, Country, Genre]})
//     actors.forEach(actor => console.log(actor.toJSON()))
//     const films = await Movie.findAll({include:[Actor, Genre, Country, Produsser]})
//     films.forEach(film=> console.log(film.toJSON()))


//     //adding actors to fillm 
//     await terminator1.addActor([swarz])
//     await terminator2.addActor([swarz])
//     await predator1.addActor([swarz])

//     //adding produsser to film
//     await terminator1.addProdusser([terminatorProdussor])
  
// }

module.exports = {
   User, Produsser, Actor, Movie, Serial, Country, Genre,
}