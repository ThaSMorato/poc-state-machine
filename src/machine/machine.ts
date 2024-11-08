import { usecaseLib } from "../config";
import { MachineConfig, MachineEntity } from "../config/machineConfig";
import { BaseUseCase } from "../use-cases/useCase";

export class Machine {
  private config: MachineConfig;
  private entity: MachineEntity;

  constructor(config: MachineConfig, entity: MachineEntity) {
    this.config = config;
    this.entity = entity;
  }

  async handle() {
    while (this.hasNext) {
      const currentState = this.currentState;
      const step = this.config[currentState];
      const token = step.token as keyof typeof usecaseLib;
      const UseCase = usecaseLib[token];
      const useCaseInstance = new UseCase();
      await useCaseInstance.transit(this.entity);
    }
    if(this.entity.result.isLeft) {
      throw this.entity.result.result
    }

    return this.entity.result.result
  }

  get currentState() {
    return this.entity.state;
  }

  private get hasNext() {
    const currentState = this.currentState;
    const step = Reflect.ownKeys(this.config).find((key) => key === currentState);
    return !!step
  }
}
