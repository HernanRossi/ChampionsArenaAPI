import mongoose from 'mongoose';
import CreateCharacterMock from '../mocks/create-character-mock';
import chai from 'chai';

import server from '../../src/server'
import faker from 'faker';
import request from "supertest"
import { ObjectID } from 'mongodb';

const ObjectId = mongoose.Types.ObjectId;

describe('Character', () => {


  afterEach(() => {
    server.close();
  })

  describe('Get Characters: ', () => {

    it('should respond status 200: /api/users', async () => {
      const id = new ObjectID()
      const res = await request(server).get(`/api/characters/${id}`)
      const jsonRes = JSON.parse(res.text);
      res.status.should.equal(200);
      jsonRes.characters.should.be.a('array');
    })
  })

  // describe('Get Character:', () => {
  //   it('Get character/id should respond status 422 with invalid id format', async () => {
  //     const charId = 234234234234234242342342;
  //     const response = await testApp.get(`/api/characters/${charId}`);
  //     response.status.should.equal(422);
  //   })

  //   it('Get character/id should response status 404 when character not found', async () => {
  //     const charId = new ObjectId();
  //     const response = await testApp.get(`/api/characters/${charId}`);
  //     response.status.should.equal(404);
  //   })
  // })

  // describe('Create Character:', () => {
  //   it('Create Character without a name returns status 422.', async () => {
  //     const newCharacterNoName = CreateCharacterMock();
  //     newCharacterNoName.name = '';
  //     const response = await testApp.post(`/api/characters`).send(newCharacterNoName);

  //     const jsonRes = JSON.parse(response.res.text);
  //     jsonRes.message.should.equal('New Character must have a name.');
  //     response.status.should.equal(422);
  //   })

  //   it('Create Character with valid payload should succeed status 200 and return created character.', async () => {
  //     const newCharacter = CreateCharacterMock();
  //     const response = await testApp.post(`/api/characters`).send(newCharacter);
  //     const jsonRes = JSON.parse(response.res.text);
  //     const newID = jsonRes._id;
  //     jsonRes.should.be.a('object');
  //     newID.should.be.a('string');
  //     response.status.should.equal(200);
  //   })
  // })

  // describe('Update Character:', () => {
  //   it('Update Character with valid id and payload should succeed status 200.', async () => {
  //     const newCharacter = CreateCharacterMock();
  //     newCharacter.name = faker.name.firstName();
  //     newCharacter.alignment = 'Neutral';
  //     newCharacter.level = 1;
  //     newCharacter.XP = 100;
  //     const response = await testApp.post(`/api/characters`).send(newCharacter);
  //     const jsonRes = JSON.parse(response.res.text);
  //     response.status.should.equal(200);
  //     testApp = chai.request(server);
  //     await mongoose.createConnection(mongoDBUrl, { useNewUrlParser: true });
  //     const newName = faker.name.firstName();
  //     jsonRes.name = newName;
  //     const newID = jsonRes._id;
  //     jsonRes.level = 2;
  //     jsonRes.XP = 500;
  //     const updateResponse = await testApp.put(`/api/characters/${newID}`).send(jsonRes);
  //     const updateJson = JSON.parse(updateResponse.res.text);
  //     updateResponse.status.should.equal(200);
  //     updateJson.name.should.equal(newName);
  //     updateJson.level.should.equal(2);
  //     updateJson.XP.should.equal(500);
  //   })

  //   it('Update Character with invalid id and payload should fail status 422.', async () => {
  //     const newCharacter = CreateCharacterMock();
  //     newCharacter.name = faker.name.firstName();
  //     newCharacter.alignment = 'Neutral';
  //     newCharacter.level = 1;
  //     newCharacter.XP = 100;
  //     const response = await testApp.post(`/api/characters`).send(newCharacter);
  //     const jsonRes = JSON.parse(response.res.text);
  //     response.status.should.equal(200);
  //     testApp = chai.request(server);
  //     await mongoose.createConnection(mongoDBUrl, { useNewUrlParser: true });
  //     const newName = faker.name.firstName();
  //     jsonRes.name = newName;
  //     const newID = new ObjectId();
  //     jsonRes.level = 2;
  //     jsonRes.XP = 500;
  //     const updateResponse = await testApp.put(`/api/characters/${newID}`).send(jsonRes);
  //     updateResponse.status.should.equal(422);
  //   })
  // })

  // describe('Delete Character:', () => {
  //   it('Delete Character with valid id and payload should succeed status 200.', async () => {
  //     const newCharacter = CreateCharacterMock();
  //     const response = await testApp.post(`/api/characters`).send(newCharacter);
  //     const jsonRes = JSON.parse(response.res.text);
  //     response.status.should.equal(200);
  //     testApp = chai.request(server);
  //     await mongoose.createConnection(mongoDBUrl, { useNewUrlParser: true });
  //     const newID = jsonRes._id;
  //     const deleteResponse = await testApp.delete(`/api/characters/${newID}`);
  //     deleteResponse.status.should.equal(200);
  //     deleteResponse.body.status.should.equal('OK');
  //     deleteResponse.body.result.n.should.equal(1);
  //   })

  //   it('Delete Character with invalid id should response status 422.', async () => {
  //     const newID = new ObjectId();;
  //     const deleteResponse = await testApp.delete(`/api/characters/${newID}`);
  //     deleteResponse.status.should.equal(422);
  //   })
  // })
})