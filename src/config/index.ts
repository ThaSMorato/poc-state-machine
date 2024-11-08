import { UseCase1 } from "../use-cases/useCase1";
import { UseCase2 } from "../use-cases/useCase2";
import { UseCase3 } from "../use-cases/useCase3";
import { UseCase4 } from "../use-cases/useCase4";
import { MachineConfig } from "./machineConfig";

export const config: MachineConfig = {
  state1: {
    name: "State 1",
    token: 'UseCase1',
    state: 'state1'
  },
  state2: {
    name: "State 2",
    token: 'UseCase2',
    state: 'state2'
  },
  state3: {
    name: "State 3",
    token: 'UseCase3',
    state: 'state3'
  },
  state4: {
    name: "State 4",
    token: 'UseCase4',
    state: 'state4'
  }
} as const

export const usecaseLib = {
  [UseCase1.token]: UseCase1,
  [UseCase2.token]: UseCase2,
  [UseCase3.token]: UseCase3,
  [UseCase4.token]: UseCase4
} as const
