const mqtt = require("mqtt");
const mqqtModel = require("../dataModels/mqqtModel");
const host = process.env.mqttHost;
const port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
const connectUrl = `https://${host}:${port}`;

const createData = async (req, res) => {
  const client = await mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: process.env.mqttUsername,
    password: process.env.mqttPassword,
    reconnectPeriod: 1000,
  });

  const topic = "myFirst MQQT project";
  client.on("connect", () => {
    console.log("Connected");
  });
  client.subscribe([topic], () => {
    console.log(`Subscribed to ${topic}`);
  });
  client.publish(
    topic,
    "done with publishing",
    { qos: 0, retain: false },
    (error) => {
      if (error) {
        console.error(error);
      } else {
        client.on("message", (topic, payload) => {
          console.log("Received Message:", topic, payload.toString());
          const newData = new mqqtModel({
            topic,
            publish: payload.toString(),
            subscribe: true,
          });
          newData.save().then(() => res.json("saved"));
        });
      }
    }
  );
};

module.exports = { createData };
