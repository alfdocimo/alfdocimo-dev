class Client {
  constructor(firebase) {
    if (Client.instance) {
      return Client.instance;
    }

    Client.instance = this;

    this.firebase = firebase;

    return this;
  }

  async getVM() {
    const { docs } = await this.firebase.firestore().collection("vm").get();
    return docs.map((doc) => doc.data())[0];
  }
}

export default Client;
