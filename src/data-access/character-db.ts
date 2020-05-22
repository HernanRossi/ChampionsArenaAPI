import { CharacterModel, ICharacter } from '../models'
import { QueryFindOptions } from 'mongoose'

const getCharacter = async (_id: string) => {
  return await CharacterModel.findOne({ _id })
}

const getCharacters = async (filter: QueryFindOptions) => {
  return await CharacterModel.find(filter)
}

const updateCharacter = async (_id: string, character: ICharacter) => {
  delete character._id
  return await CharacterModel.updateOne({ _id }, character, { upsert: true })
}

const createCharacter = async (character: ICharacter) => {
  const newCharacter = await CharacterModel.create(character)
  return await newCharacter.save()
}

const createCharacters = async (characters: ICharacter[]) => {
  return await CharacterModel.insertMany(characters)
}

const deleteCharacter = async (_id: string) => {
  return await CharacterModel.deleteOne({ _id })
}

const deleteCharacters = async (filter: QueryFindOptions) => {
  return await CharacterModel.deleteMany(filter)
}

export default {
  getCharacter,
  getCharacters,
  updateCharacter,
  createCharacter,
  createCharacters,
  deleteCharacter,
  deleteCharacters
}