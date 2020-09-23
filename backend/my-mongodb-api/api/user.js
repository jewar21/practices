// Importar dependencias
const url = require('url')
const MongoClient = require('mongodb').MongoClient

// Crear variable de conexión  
let cachedDb = null

// Una funcion para conectarse a MongoDB,
// Tomando un solo parámetro del string de conexión
async function connectToDatabase(uri) {
  // Si la conexión de la base de datos está almacenada en caché,
  // úsalo en lugar de crear una nueva conexión
  if (cachedDb) {
    return cachedDb
  }

  // Si no hay ninguna conexión en caché, cree una nueva
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Seleccione la base de datos a través de la conexión,
  // usando la ruta de la base de datos del string de conexión
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Almacene en caché la conexión de la base de datos y devuelva la conexión
  cachedDb = db
  return db
}

// La función principal, exportada, del punto final,
// que se ocupa de la solicitud y la respuesta posterior
module.exports = async (req, res) => {
  // Obtemer una conexión a la base de datos, en caché o de otra manera
  // usando la variable de entorno del string de conexión como argumento
  const db = await connectToDatabase(process.env.MONGODB_URI)

  // Seleccione la colección "users" de la base de datos
  const collection = await db.collection('users')

  // Seleccione la colección del users de la base de datos
  const users = await collection.find({}).toArray()

  // Responda con una cadena JSON de todos los users de la colección
  res.status(200).json({ users })
}