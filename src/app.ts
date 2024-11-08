import { config } from "./config";
import { Machine } from "./machine/machine";

const machine = new Machine(config, {
  result: {
    isLeft: false,
    isRight: false,
  },
  state: 'state1'
})

machine.handle().then((result) => {
  console.log(result)
}).catch((error) => {
  console.log("acabou com erro")
  console.error(error)
})
